import express from "express";
import { asyncHandler } from "../../middleware/errorHandling.js";
import * as AuthController from "./auth.controller.js"
import Validation from "../../middleware/validation.js";
import { SigninSchema, SignupSchema } from "./auth.validation.js";
const app = express();

app.get('/signup',Validation(SignupSchema),asyncHandler(AuthController.signup));
app.get('/signin',Validation(SigninSchema),asyncHandler(AuthController.signin));
app.put('/confirmEmail/:token',asyncHandler(AuthController.confirmEmail))
app.put('/NewconfirmEmail/:refreshToken',asyncHandler(AuthController.NewConfirmEmail))
export default app;