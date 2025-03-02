const jwt = require("jsonwebtoken");
const User = require('../models/Users');

const requireSignIn = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        // console.log("decode in middleware: ", decode);
        req.user = await User.findById(decode._id).select("-password");
        // console.log("decoded user: ", req.user);
        next();
    } catch (error) {
        console.log(`Error in Middleware: ${error}`);
    }
}

module.exports = requireSignIn;