const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String, 
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    product_type: {
        type: String, 
        require: true
    },
    quantity: {
        type: Number, 
        required: true
    },
    wash_type: {
        type: [String], 
        required: true, 
        enum: ["washing-machine", "ironing", "towel", "bleach"]
    },
    price: {
        type: Number, 
        required: true
    }, 
    order_date_time: {
        type: String, 
        required: true
    },
    store_location: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },
    store_phone: {
        type: Number, 
        required: true
    },
    total_items: {
        type: Number,
        required: true
    },
    status: {
        type: String, 
        required: true, 
        enum: ["Ready to Pickup", "In Washing", "In Ironing", "Ready to deliver", "Cancelled"]
    }
},
{timestamps: true}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;