import express from "express";
import * as UserController from "./user.controller.js"
import { auth } from "../../middleware/auth.middleware.js";
import FileUpload, { FileValidation } from "../../services/multer.js";

const app = express();

app.get('/profile',FileUpload(FileValidation.image).single('image'),auth,UserController.profile);
app.patch('/cover',FileUpload(FileValidation.image).array('image',5),auth,UserController.CoverPicture);

export default app;