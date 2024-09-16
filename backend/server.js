import express from "express";
import cors from "cors";

//app config
const app=express();
const port=4000;
//middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})























