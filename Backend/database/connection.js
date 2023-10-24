import mongoose from "mongoose";
 
// DB connection 
export const connect=()=>{
    mongoose.set("strictQuery",true);
    mongoose.connect(process.env.USER_DB_URL,{
        useNewUrlParser:true,
    })
    .then(()=>{
        console.log("Database  connected ");
    })
    .catch((err)=>{
        console.log(`Database  connection error: ${err}`);
    }
    )
 
    
}