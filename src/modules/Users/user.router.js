import express from "express";
import * as UserController from "./user.controller.js"
import { auth } from "../../middleware/auth.middleware.js";

const app = express();

app.get('/profile',auth,UserController.profile);

export default app;