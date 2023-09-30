import UserModel from "../../../Database/Models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import SendEmail from "../../services/SendEmail.js";

export const signup = async (req,res)=>{
    const {username,email,password,gender} = req.body;
    const user = await UserModel.findOne({email});
    if(user){
        return res.status(409).json({Message: "Email Exists"});
    }
const HashPassword =await bcrypt.hashSync(password,parseInt(process.env.SALTROUND));
const CreateUser = await UserModel.create({username:username,email,password:HashPassword,gender});
const token = jwt.sign({email},process.env.EMAILTOKEN,{expiresIn:'1h'});
const refreshToken = jwt.sign({email},process.env.EMAILTOKEN,{expiresIn:60*60*24});
const link = `${req.protocol}://${req.headers.host}/auth/confirmEmail/${token}`;
const refreshlink = `${req.protocol}://${req.headers.host}/auth/NewconfirmEmail/${refreshToken}`;
const html = `<a href=${link}>Verify Email</a> <br/> or <a href=${refreshlink}> Request a new email to verify here</a>` 
SendEmail(email,"Please Verify",html);
    return res.status(201).json({Message:"Success",user:CreateUser._id});
}
export const signin = async (req,res)=>{
 const {email,password} = req.body;
 const user = await UserModel.findOne({email});
 if(!user){
   return res.status(404).json({message:"Invalid Email"});
 }
 if(!user.confirmEmail){
  return res.status(400).json({Message:"Please Confirm your Email first"});
 }
    const match = bcrypt.compareSync(password,user.password);
    if(!match){
        return res.status(404).json({Message:"Invalid Password"});
    }
    const token = jwt.sign({id:user._id},process.env.LOGINSIGNATURE);
    return res.status(201).json({Message:'Success',token});
}

export const ConfirmEmail = async(req,res,next)=>{

    const {token} = req.params;
    const decoded = jwt.verify(token,process.env.EMAILTOKEN);
    const user = await UserModel.findOneAndUpdate({email:decoded.email,confirmEmail:false},{confirmEmail:true});
    if(user){
        return res.status(400).json({Message: "Your email is already verified"})
    }
   else{
        return res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
    }
    
    export const NewConfirmEmail = async (req, res, next) => {
        const { refreshToken } = req.params; 
        const decoded = jwt.verify(refreshToken, process.env.EMAILTOKEN);
        const token = jwt.sign({email:decoded.email},process.env.EMAILTOKEN, {
            expiresIn: '1h'
        });
        const link = `${req.protocol}://${req.headers.host}/auth/ConfirmEmail/${token}`;
        const html = `<a href=${link}>Verify Email</a>`;
        SendEmail(decoded.email, "Please Verify", html);
        return res.status(201).json({ Message: "New email has been sent successfully" });
    }
    