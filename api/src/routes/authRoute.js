const express = require("express");
const { registerUser, logIn } = require("../controller/authController");
const { getUsers, getUserByEmail } = require("../controller/userController");
const router = express.Router();


router.route("/:email").get(getUserByEmail);
router.post('/register',registerUser);
router.post('/login',logIn);
router.get('/users',getUsers);
module.exports = router;