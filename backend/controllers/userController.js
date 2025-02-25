const { hashPassword, comparePassword } = require("../helpers/userHelper");
const User = require("../models/Users");
// const {body, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
    try {
        const {name, email, phone, state, district, address, pincode, password} = req.body;
        if(!name){
            return res.send({error:"Name is required"});
        }
        if(!email){
            return res.send({error:"Email is required"});
        }
        if(!phone){
            return res.send({error:"Phone is required"});
        }
        if(!state){
            return res.send({error:"State is required"});
        }
        if(!district){
            return res.send({error:"District is required"});
        }
        if(!address){
            return res.send({error:"Address is required"});
        }
        if(!pincode){
            return res.send({error:"Pincode is required"});
        }
        if(!password){
            return res.send({error:"Password is required"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: "Already register, Please login!"
            })
        }

        const hashedPassword = await hashPassword(password);
        const user = await new User({name, email, phone, state, district, address, pincode, password : hashedPassword}).save();

        res.status(201).send({
            success: true,
            message:"User Register Successfully",
            user
        });


    } catch (error) {
        console.log(`Error in Registration: ${error}`);
        res.status(500).send({
            success: false,
            message: "Error in Registration",
            error
        });
    }
}

const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid Email or Password"
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            });
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            });
        }
        const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn : '7d'});
        res.status(200).send({
            success: true,
            message: "Login Successful",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        });
    }catch(error){
        console.log(`Error in login: ${error}`);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error
        });
    }
}

const testController = (req, res) => {
    res.send({
        success: true,
        message: "Protected Route"
    });
}

module.exports = {
    registerController,
    loginController,
    testController
}