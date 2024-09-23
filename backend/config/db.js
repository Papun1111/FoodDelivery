import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoUrl=process.env.MONGO_URL;
export const connectDb=async()=>{
    await mongoose.connect(mongoUrl).then(()=>{
        console.log("db connected");
    }).catch(err=>console.error(err.message));
}

