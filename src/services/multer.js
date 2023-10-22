import multer from "multer";
import { nanoid } from "nanoid";

export const FileValidation = {
    image:['image/jpeg','image/png','image/webp'],
    file:['application/pdf']
}

function FileUpload(CustomValidation = []){
    const storage = multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'uploads');
        },
        filename:(req,file,cb)=>{
            cb(null,nanoid()+file.originalname);
        }
    });
function FileFilter(req,res,cb){
    if(CustomValidation.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb("Invalid Format",false);
    }
}
    const upload = multer({FileFilter,storage});
    return upload;
}

export default FileUpload;