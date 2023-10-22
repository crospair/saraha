export const asyncHandler = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch((error)=>{
            //res.status(500).json({Message:"Caught Error",error:error.stack});
            return next(new Error(error));
        })

    }
}

export const GlobalHandler = (err,res,res,next)=>{
    if(err){
        return res.json({Message:err.message});
    }
}
