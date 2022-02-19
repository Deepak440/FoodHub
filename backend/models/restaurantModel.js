import mongoose from 'mongoose';

const {Schema } = mongoose;



const foodItemsSchema = Schema({
    name : {
        type : String,
        required : true
    },
    image :{
        type :String,
        required : true

    },
    price :{
        type : Number,
        required :true,
        default :0  
    },
    description :{
        type : String,
        required :true  
    },
    

}, {timestamps : true});

const restaurantSchema = Schema({

    name :{
        type : String,
        required :true 
    },
    image :{
        type :String,
        required : true

    },
    description :{
        type : String,
        required :true  
    },
    numReviews :{
        type : Number,
        required :true,
        default :0  
    },
    foodItems :[foodItemsSchema],
 

}, {
    timestamps : true
});


const  Restaurant  = mongoose.model('Restaurant' , restaurantSchema);

export default Restaurant;
