export const authenticatUser =(req,res,next)=>{
    const token=req.header("Authorization");
    if(!token){
        return res.status(401).json({error:"Unauthorized"});

    };
    next();
}