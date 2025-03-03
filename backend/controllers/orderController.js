const Order = require("../models/Orders");
const mongoose = require('mongoose');

const getOrdersController = async (req, res) => {
    try {
        const orders = await Order.find({ user_id: req.user._id });
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

const deleteOrdersController = async (req, res) => {
    try{
            const delOrder = await Order.findByIdAndDelete(req.params.id);
            if(delOrder){
                res.status(200).send({
                    success: true,
                    message: "Order Deleted successfully",
                });
            }else{
                res.status(404).send({
                    success: false,
                    message: "Order not found"
                })
            }
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting orders",
            error
        });
    }
}

module.exports = {
    getOrdersController,
    deleteOrdersController
}