import express from "express";
import * as UserController from "./user.controller.js"
import { auth } from "../../middleware/auth.middleware.js";
import FileUpload from "../../services/multer.js";

const app = express();

app.get('/profile',FileUpload().single('image'),auth,UserController.profile);

export default app;