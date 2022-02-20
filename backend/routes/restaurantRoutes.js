import express from "express";
import asyncHandler from "express-async-handler";
import Restaurant from '../models/restaurantModel.js';

const router = express.Router();

router.get('/' ,asyncHandler(async (req , res) =>{
    const restaurants = await Restaurant.find({});
    res.send(restaurants);


}));

export default router;