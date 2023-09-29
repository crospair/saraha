import mongoose, {mongo} from "mongoose";

const ConnectDB = async (req,res)=>{
    await mongoose.connect(process.env.DB_LOCAL)
    .then(()=>{
        console.log("ConnectDB")
    })
    .catch((error)=>{
        console.log(`Error to connect DB : ${error} `)
    })

    }


export default ConnectDB;