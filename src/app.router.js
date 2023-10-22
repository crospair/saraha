import ConnectDB from "../Database/connection.js";
import MessageRouter from "./modules/Messages/message.router.js";
import AuthRouter from './modules/Auth/auth.router.js';
import UserRouter from './modules/Users/user.router.js';
import cors from 'cors';
import { GlobalHandler } from "./middleware/errorHandling.js";



const InitApp = (app,express)=>{
    app.use(cors());
    app.use('/uploads',express.static('upload'));
    ConnectDB()
    app.use(express.json());
    app.use('/users',UserRouter);
    app.use('/messages',MessageRouter);
    app.use('/auth',AuthRouter);
    app.use('/',(req,res)=>{
        return res.json({Message:"Welcome!"});
})
app.use('*',(req,res)=>{
    return res.json({Message:"404 Not Found"});
})
app.use(GlobalHandler)
    
}
export default InitApp;