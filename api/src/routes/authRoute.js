const express = require("express");
const { registerUser } = require("../controller/authController");
const { getUsers } = require("../controller/userController");
const router = express.Router();


router.post('/register',registerUser);
router.get('/users',getUsers);
module.exports = router;