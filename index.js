import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import ConnectDB from "./Database/connection.js";
import InitApp from './src/app.router.js';
const app = express();
const PORT = process.env.PORT || 3000;
ConnectDB()
InitApp(app,express)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})