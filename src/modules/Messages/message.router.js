import express from "express";
import * as MessageController from "./message.controller.js"
import { asyncHandler } from "../../middleware/errorHandling.js";
import { auth } from "../../middleware/auth.middleware.js";
const app = express();

app.post('/:receiverID',asyncHandler( MessageController.sendMessage));
app.get('/',auth,asyncHandler(MessageController.getMessages));

export default app;
