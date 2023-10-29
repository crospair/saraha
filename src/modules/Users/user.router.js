import express from "express";
import * as UserController from "./user.controller.js"
import { auth } from "../../middleware/auth.middleware.js";
import fileUpload, { FileValidation } from "../../services/multer.js";

const app = express();

app.get('/profile',fileUpload(FileValidation.image).single('image'),auth,UserController.profile);
app.patch('/cover',fileUpload(FileValidation.image).array('image',5),auth,UserController.CoverPicture);

export default app;