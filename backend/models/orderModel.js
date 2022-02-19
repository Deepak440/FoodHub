import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        restaurant: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Restaurant",
        },
      },
    ],
    
    tipPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    }, 
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;