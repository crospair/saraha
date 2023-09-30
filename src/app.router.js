import ConnectDB from "../Database/connection.js";
import MessageRouter from "./modules/Messages/message.router.js";
import AuthRouter from './modules/Auth/auth.router.js;';
import UserRouter from './modules/Users/user.router.js';
import cors from 'cors'

const InitApp = (app,express)=>{
    app.use(express.json);
    ConnectDB()
    app.use(cors())
    app.use('/users',UserRouter);
    app.use('/messages',MessageRouter);
    app.use('/auth',AuthRouter);
    app.use('*',(req,res)=>{
        return res.json({Message:"404 not found"});
})
}
export default InitApp;