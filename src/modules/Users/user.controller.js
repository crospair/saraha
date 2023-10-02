import UserModel from "../../../Database/Models/user.model.js"

export const profile = async (req,res)=>{
    

    const ImageURL =  req.file.destination +'/'+ req.file.filename;
    const StoreImage = await UserModel.findByIdAndUpdate(req.user._id,{profilePic:ImageURL})
    
    return res.json({Message:"Success"})
}
