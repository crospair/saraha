import ConnectDB from "../Database/connection.js";
import MessageRouter from "./modules/Messages/message.router.js";
import AuthRouter from './modules/Auth/auth.router.js';
import UserRouter from './modules/Users/user.router.js';
import cors from 'cors';



const InitApp = (app,express)=>{
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
    app.use(cors())
    ConnectDB()
}
export default InitApp;