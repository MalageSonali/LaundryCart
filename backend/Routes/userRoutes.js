const express = require("express");
const {registerController, loginController, testController} = require("../controllers/userController");
const requireSignIn = require("../middlewares/userMiddleware");

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.get('/test', requireSignIn, testController);

module.exports = router;