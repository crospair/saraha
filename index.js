import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import MessageRouter from './src/modules/Messages/message.router.js';
import ConnectDB from "./Database/connection.js";
const app = express();
const PORT = process.env.PORT || 3000;
ConnectDB()

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})