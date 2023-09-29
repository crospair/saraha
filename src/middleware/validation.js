const DataMethods = ['body','query','params','headers']
const Validation = (Schema)=>{ 
    return (req,res,next) => {
    const ValidationArray = [];
    DataMethods.forEach((key)=>{
        if(Schema[key]){
            const ValidationResult = Schema[key].validate(req[key],{abortEarly:false});
            if(ValidationResult.error){
                ValidationArray.push(ValidationResult.error.details);
            }
        }
    })
    if(ValidationArray.length > 0){
        return res.status(400).json({Message:"Validation Error", ValidationArray});
    }else{
        next()
    }

}
}

export default Validation;