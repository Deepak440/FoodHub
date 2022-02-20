import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import restaurants from './data/restaurants.js'
import User from './Models/userModels.js'
import Restaurant from './Models/restaurantModel.js'
import Order from './Models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
      await Order.deleteMany()
      await Restaurant.deleteMany()
      await User.deleteMany()
  
      await User.insertMany(users)
      await Restaurant.insertMany(restaurants)
      console.log('Data Imported!')
      process.exit()
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }

  const destroyData = async () => {
    try {
      await Order.deleteMany()
      await Restaurant.deleteMany()
      await User.deleteMany()
  
      console.log('Data Destroyed!')
      process.exit()
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }

  if (process.argv[2] == '-d') {
    destroyData()
  } else {
    importData()
  }