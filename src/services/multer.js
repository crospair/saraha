import multer from "multer";
import { nanoid } from "nanoid";

export const FileValidation = {
    image:['image/jpeg','image/png','image/webp'],
    file:['application/pdf']
}

function fileUpload(CustomValidation = []){
    const storage = multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null,'uploads');
        },
        filename:(req,file,cb)=>{
            cb(null,nanoid()+file.originalname);
        }
    });
function fileFilter(req,file,cb){
    if(CustomValidation.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb("Invalid Format",false);
    }
}
    const upload = multer({fileFilter,storage});
    return upload;
}

export default fileUpload;