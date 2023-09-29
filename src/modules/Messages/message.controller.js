import MessageModel from "../../../Database/Models/message.model.js";
import UserModel from "../../../Database/Models/user.model.js";

export const getMessages = async (req,res)=>{
    const messageList = await MessageModel.find({receiverID:req.user._id})
    return res.json({Message:"Success",messageList});
}

export const sendMessage = async (req,res)=>{
    const {receiverID} = req.params;
    const {message} = req.body;
    const user = await UserModel.findById(receiverID);
    if(!user){
        return res.json({Message: "User Not Found"})
    }
    const createMessage = await MessageModel.create({message,receiverID});
    return res.status(201).json({Message:"Success"})
};