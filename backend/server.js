import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectDb } from "./config/db.js";

//app config
const app=express();
const port=4000;
//middleware
app.use(express.json());
app.use(cors());
//db connection
connectDb();
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,async()=>{
    
    console.log(`listening on port ${port}`);
})























