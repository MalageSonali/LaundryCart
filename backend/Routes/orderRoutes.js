const express = require("express");
const bodyparser = require("body-parser");
const {body, validationResult} = require("express-validator");
const Order = require("../models/Orders");

const router = express.Router();
router.use(bodyparser.json());

router.get("/", async(req, res) => {
    const data = await Order.find();
    res.json({
        status: "Success",
        data
    })
})

router.post("/add", 
    body("order_id").notEmpty(), 
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors : errors.array()
            });
        }
        const result = await Order.create(req.body);
        res.json({
            status:"Success",
            result
        });
    } catch (error) {
        res.status(400).json({ 
            status : "Failed",
            error: error.message 
        });
    }
})

module.exports = router;