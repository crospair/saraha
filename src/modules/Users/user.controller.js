import UserModel from "../../../Database/Models/user.model.js"
import cloudinary from "../../services/cloudinary.js"

export const profile = async (req,res)=>{
    if(!req.file){
        return next(new Error("Please Provide a File"));
    }
    const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{
        folder:`${process.env.APP_NAME}/user/${req.user._id}/profile`
    })
    const StoreImage = await UserModel.findByIdAndUpdate(req.user._id,{profilePic:secure_url},{new:false});
    await cloudinary.uploader.destroy(user.profilePic.public_id);
    return res.json({Message:"Success"})
}
export const CoverPicture = async (req,res)=>{
    const CoverPicture = [];
    for (const file of req.files) {
        CoverPicture.push(`upload/${file.filename}`);
    }
    const UpdateCoverPicture = await UserModel.findByIdAndUpdate(req.user._id,{cover:CoverPicture});

    return res.status(200).json({Message:"Success"});
}