import express from 'express'; 
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import restaurantRoutes from './routes/restaurantRoutes.js'

dotenv.config();

const app = express();
connectDB();
app.get('/' , (req, res) => {
    res.send("Api is running ");
})

app.use('/api/users' , userRoutes);
app.use('/api/restaurants' , restaurantRoutes);

const PORT = process.env.PORT || 5000 

app.listen(PORT, console.log(`Server is running at port ${PORT}`));
