import  jwt  from "jsonwebtoken";
import UserModel from "../../Database/Models/user.model.js";
export const auth = async (req,res,next)=>{
    try{
    const {authorization} = req.headers;
    
    if(!authorization?.startsWith(process.env.BEARERKEY)){
        return res.json({Message:"Invalid Token"})
    }

    const token = authorization.split(process.env.BEARERKEY)[1];

    if(!token){
        return res.json({message:"Invalid Token"});
    }

    const decoded = jwt.verify(token,process.env.LOGINSIGNATURE);

    const AuthUser = await UserModel.findById(decoded.id).select("Username email")
    if(!AuthUser){
        return res.json({Message:"Not a Registered Account"});
    }
    req.user = AuthUser
}catch(error){
    res.json({Message:"Caught error",error:error.stack})
}
next();
}

