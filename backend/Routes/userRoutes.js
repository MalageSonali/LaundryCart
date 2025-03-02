const express = require("express");
const {registerController, loginController, testController, getUserDetailsController} = require("../controllers/userController");
const requireSignIn = require("../middlewares/userMiddleware");

const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.get('/test', requireSignIn, testController);

router.get('/', requireSignIn, getUserDetailsController);

router.get('/auth-user', requireSignIn, (req, res) => {
    res.status(200).send({ok:true});
})

module.exports = router;