import UserModel from "../../../Database/Models/user.model.js"

export const profile = async (req,res)=>{
    try{
    const user = await UserModel.findById(req.id);
    return res.json({Message:"Success"})
}catch(error){
    res.json({Message:"Caught error",error:error.stack})
}
}