import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator"
import dotenv from "dotenv"
dotenv.config();
// login user
const secret = process.env.JWT_SECRET;
const createToken=(id)=>{
    return jwt.sign({ id },secret, { expiresIn: '1d' });
}


const loginUser=async(req,res)=>{
const {email,password}=req.body;
try{
const user=await userModel.findOne({email});
if(!user){
    return res.json({success:false,message:"user does not exist"});    
}
const isMatch=await bcrypt.compare(password,user.password);
if(!isMatch){
    return res.json({success:false,message:"Invalid crendentials"})
}
const token=createToken(user._id);
res.json({success:true,token});
}
catch(e){
console.log(e);
res.json({success:false,message:"Error while logging in"});
}
}

const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
    const exists=await userModel.findOne({email});
    if(exists){
        return res.json({success:false,message:"User already exists"});
    }
    //validationg email format and strong password
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"Please enter valid email"});
    }
    if(password.length<8){
        return res.json({success:false,message:"Please enter strong password"});
    }
    //hashing user password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);
    
    const newUser=new userModel({name:name,email:email,password:hashedPassword});
    const user =await newUser.save();
    const token=createToken(user._id);
    res.json({success:true,token})
    }
    catch(err){
    console.error(err);
    res.json({success:false,message:"Error"});
    }
}

export {loginUser,registerUser};