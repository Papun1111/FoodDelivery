import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoUrl="mongodb+srv://gohanmohapatra:iloveyou123@pamotra.1xy2l.mongodb.net/Pamotra?retryWrites=true&w=majority&appName=Pamotra"
export const connectDb=async()=>{
    await mongoose.connect(mongoUrl).then(()=>{
        console.log("db connected");
    }).catch(err=>console.error(err.message));
}

