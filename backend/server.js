import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config";

// App configuration
const app = express();
const port = process.env.PORT || 4000;  // Use environment variable for port or default to 4000

// Middleware
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));  
app.use(cors());

// Database connection
connectDb();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

// Server listening with basic error handling
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});
