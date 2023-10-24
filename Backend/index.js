import "dotenv/config";
import express from "express"
import { connect } from "./database/connection.js";
import path from "path"
import { fileURLToPath } from "url";
 import morgan from "morgan";
import cors from "cors";
 
import routes from "./routes/userRoutes.js";

const _filename=fileURLToPath(import.meta.url);
// setup fole path
const _dirname=path.dirname(_filename);
console.log("directory-name-->",_dirname);
// create express app
var app = express();

// ADD THIS
app.use(cors());
// create database connection
connect();

app.use(express.json())
// API Routes
app.get("/", (req,res,next)=>{
    res.status(200).json({message:"server is connected hi"});
});


//app.use("/api/users", require("./routes/userRoutes.js"));
app.use(express.json());
app.use(morgan("dev"))
app.use("/api",  routes); 
app.use 
// start server 
const PORT=process.env.PORT;
app.listen(process.env.PORT, 
    ()=>{console.log(`server is running on ${PORT} port`)
})


// import http from 'http'
// const server=http.createServer((req,res)=>{
//     res.end('halo sadam')
// });
// server.listen(3001,()=>{
//     console.log('server runing 3001');
//     console.log(`node version ${process.version}`)
// })