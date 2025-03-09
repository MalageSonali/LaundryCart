const express = require("express");
const bodyparser = require("body-parser");
const {body, validationResult} = require("express-validator");
const Order = require("../models/Orders");
const requireSignIn = require("../middlewares/userMiddleware");
const { getOrdersController, deleteOrdersController } = require('../controllers/orderController');

const router = express.Router();
router.use(bodyparser.json());

router.get("/", requireSignIn, getOrdersController)

router.post('/delete/:id', requireSignIn, deleteOrdersController);



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