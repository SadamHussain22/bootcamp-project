export const errorHandler=(err,req,res,nex)=>{
    console.error(err)
    res.status(500).json({error:'internel server error'})
    nex();
}