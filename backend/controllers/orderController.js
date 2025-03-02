const Order = require("../models/Orders");
const mongoose = require('mongoose');

const getOrdersController = async (req, res) => {
    try {
        console.log("User ID from request:", req.user._id);
        const orders = await Order.find({ user_id: req.user._id });
        // console.log("Orders data from request:", orders)
        res.status(200).send({
            success: true,
            data: orders
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting orders",
            error
        });
    }
}

module.exports = {
    getOrdersController
}