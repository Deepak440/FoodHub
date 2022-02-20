import asyncHandler from "express-async-handler";
import Restaurant from "../Models/restaurantModel.js";



// @desc : Fetch all restaurants
// @route : Get /api/restaurants
// @access Public

const getRestaurants = asyncHandler(async (req, res) => {
    
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  });


  
// @desc : Fetch all Food items of resuarant id
// @route : Get /api/restaurants/:id
// @access Public

const getRestaurantDetail = asyncHandler(async (req, res) => {
    
  const restaurantDetails = await Restaurant.findById(req.params.id);
  if (restaurantDetails) {
    res.json(restaurantDetails.foodItem);
  } else {
    res.status(404).json({ message: "Product not find" });
  }
});



  export {getRestaurants , getRestaurantDetail} ;