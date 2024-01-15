const express = require("express");
const { registerUser, logIn } = require("../controller/authController");
const { getUsers } = require("../controller/userController");
const router = express.Router();


router.post('/register',registerUser);
router.post('/login',logIn);
router.get('/users',getUsers);
module.exports = router;