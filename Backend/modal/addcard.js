import mongoose from "mongoose";
const addcardschema=mongoose.Schema(
    {
        image:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        discription:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }

);
const Addcard=mongoose.model('Addcard',addcardschema)
export default Addcard;