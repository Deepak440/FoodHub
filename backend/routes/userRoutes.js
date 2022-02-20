import express from "express";
import asyncHandler from "express-async-handler";
import User from '../models/userModel.js';

const router = express.Router();

router.get('/' , asyncHandler(async (req , res) =>{
    const users = await User.find({});
    res.send(users);

}));

export default router;