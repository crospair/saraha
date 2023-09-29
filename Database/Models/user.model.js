
import mongoose, { Schema,model } from "mongoose";

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        default:'Male',
        enum:['Male','Female'],
    }

},{
    timestamps:true,
})

const UserModel = mongoose.models.User || model('User',UserSchema);
export default UserModel;