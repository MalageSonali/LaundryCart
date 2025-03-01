const { hashPassword, comparePassword } = require("../helpers/userHelper");
const User = require("../models/Users");
// const {body, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
    try {
        const {name, email, phone, state, district, address, pincode, password} = req.body;
        if(!name){
            return res.send({message:"Name is required"});
        }
        if(!email){
            return res.send({message:"Email is required"});
        }
        if(!phone){
            return res.send({message:"Phone is required"});
        }
        if(!state){
            return res.send({message:"State is required"});
        }
        if(!district){
            return res.send({message:"District is required"});
        }
        if(!address){
            return res.send({message:"Address is required"});
        }
        if(!pincode){
            return res.send({message:"Pincode is required"});
        }
        if(!password){
            return res.send({message:"Password is required"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(200).send({
                success: false,
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
        const {credential, password} = req.body;

        if(!credential || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid Credentials or Password"
            })
        }

        let user = await User.findOne({email: credential});
        if(!user){
            user = await User.findOne({phone: credential});
        }
        if(!user){
            return res.status(404).send({
                success: false,
                message: "User is not registered"
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