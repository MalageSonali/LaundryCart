const { hashPassword, comparePassword } = require("../helpers/userHelper");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const nodemailer = require('nodemailer');

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
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                photo: user.photo
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

const getUserDetailsController = async (req, res) => {
    try {
        const userProfileDetails = await User.find({ _id: req.user._id });
        res.status(200).send({
            success: true,
            data: userProfileDetails
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting user details",
            error
        });
    }
}

//not working
const updateUserPhotoController = async (req, res) => {
    try {
                
        const {photo} = req.files;
        if(photo && photo.size > 1000000){
            return res.status(500).send({ 
                error: "photo is Required and should be less then 1mb" 
            });
        }
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                 
            },
            {new: true}
        )
        if (photo) {
            user.photo.data = fs.readFileSync(photo.path);
            user.photo.contentType = photo.type;
        }

        await user.save();

        res.status(201).send({
            success: true,
            message: "Profile Updated Successfully",
            products,
        });
        
            
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while updating user details",
            error
        });
    }
}

const sendRecoveryEmailController = async (req, res) => {
    try {
        const { email} = req.body;
        const user = await User.findOne({email});
        if(user){

            //Node Mailer to send mail Functionality not available

            /*
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.MY_EMAIL,
                  pass: process.env.MY_PASSWORD
                }
              });
              
              var mailOptions = {
                from: process.env.MY_EMAIL,
                to: email,
                subject: 'OTP for Password Reset',
                text: `Here is your OTP: ${OTP}`
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                  return res.status(500).send({
                    success: false,
                    message: "Could not send Email"
                  })
                } else {
                  console.log('Email sent: ' + info.response);
                  return res.status(200).send({
                    success: true,
                    message: "Email sent successfully"
                  })
                }
              });
            */

            return res.status(200).send({
                success: true,
                message: "Feature is not available yet",
            });
            
        }else{
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in updating Password"
        })
    }
}

module.exports = {
    registerController,
    loginController,
    testController,
    getUserDetailsController,
    updateUserPhotoController,
    sendRecoveryEmailController,
}