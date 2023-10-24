import validationResult from "express-validator"
export const validateInput=(req,res,next)=>{
    const errors=validationResult(req);
    if(errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});

    }
    // check if specific fields are empty and ad custom error message
    const {email,password}=req.body;
if(!email||email.trim()===''){
    return res.status(400).json({errors:[{msg:'Email is required'}]});
}
if(!password||password.trim()===''){
    //rejex  method add kar na h 
    return res.status(400).json({errors:[{msg:'password is required'}]});
}
next()
}