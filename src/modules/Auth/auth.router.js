import express from "express";
import { asyncHandler } from "../../middleware/errorHandling.js";
import * as AuthController from "./auth.controller.js"
import Validation from "../../middleware/validation.js";
import { SigninSchema, SignupSchema } from "./auth.validation.js";
const app = express();

app.post('/signup',Validation(SignupSchema),asyncHandler(AuthController.signup));
app.post('/signin',Validation(SigninSchema),asyncHandler(AuthController.signin));
app.get('/ConfirmEmail/:token',asyncHandler(AuthController.ConfirmEmail))
app.get('/NewConfirmEmail/:refreshToken',asyncHandler(AuthController.NewConfirmEmail))
export default app;