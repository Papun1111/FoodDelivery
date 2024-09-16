import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//app config
const app=express();
const port=4000;
//middleware
app.use(express.json());
app.use(cors());
dotenv.config();
const mongoUrl=process.env.MONGO_URL;
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,async()=>{
    await mongoose.connect(mongoUrl);
    
    console.log(`listening on port ${port}`);
})























