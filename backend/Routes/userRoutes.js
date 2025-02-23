const User = require("../models/Users");
const express = require("express");
const bodyparser = require("body-parser");
const {body, validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "SECRET";

const router = express.Router();
router.use(bodyparser.json());

router.get("/", async(req, res) => {
    const data = await User.find();
    res.json({
        status: "Success",
        data
    })
})

router.post("/register", 
    body("name").isAlpha("en-US", {ignore:' '}),
    body("password").isLength({min:8}),
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors : errors.array()
            });
        }
        const { name, email, phone, state, district, address, pincode, password} = req.body;
        bcrypt.hash(password, 10, async (err, hash) => {
            if(err){
                res.status(400).json({
                    status: "Failed",
                    message: err.message
                })
            }
            await User.create({ name, email, phone, state, district, address, pincode, password : hash});
            res.json({
                status:"Success",
                message : "Data successfully added."
            });
        });
    } catch (error) {
        res.status(400).json({ 
            status : "Failed",
            error: error.message 
        });
    }
})

module.exports = router;