import express from "express";
import { getRestaurants, getRestaurantDetail } from "../controller/restaurantController.js";

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/:id").get(getRestaurantDetail);

export default router;