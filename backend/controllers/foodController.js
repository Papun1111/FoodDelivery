import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Food not added" });
  }
};
//all food list
const listFood=async(req,res)=>{
try{
const foods=await foodModel.find({});
res.json({success:true,data:foods});
}catch(e){
console.log(e);
res.json({success:true,message:"Error"});
}
}
export { addFood,listFood };
