import multer from "multer";
import { nanoid } from "nanoid";

function FileUpload(){
    const storage = multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null,'uploads');
        },
        filename:(req,res,cb)=>{
            cb(null,nanoid()+"-"+file.originalname);
        }
    });

function FileFilter(req,res,cb){
    if(file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/jpg"
    || file.mimetype == "image/webp"){
        cb(null,true);
    }else{
        cb("Invalid Format",false);
    }
}
    const upload = multer({FileFilter,storage});
    return upload;
}

export default FileUpload;