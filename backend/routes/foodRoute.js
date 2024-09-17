import express from "express"
import { Router } from "express"
import { addFood } from "../controllers/foodController.js"
import multer from "multer"
const foodRouter=Router();
//Image Storage engine
const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,res,cb)=>{
return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage})

foodRouter.post("/add",addFood);

export default foodRouter;