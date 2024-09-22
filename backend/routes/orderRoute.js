import express from "express";
import authMiddleware from "../middlewares/auth";

import { placeOrder } from "../controllers/orderController";

const orderRouter=Router.express();

orderRouter.post("/place",authMiddleware,placeOrder);



export default orderRouter;