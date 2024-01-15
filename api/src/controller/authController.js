const bcryptjs = require("bcryptjs");
const User = require("../model/userModel");
const { errorHandler } = require("../utils/error");
const jwt = require("jsonwebtoken");
exports.registerUser = async (req, res, next) => {
  const { username, department,email, password,avatar } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, department,email, password: hashedPassword,avatar});


  try {
    await newUser.save();
    res.status(201).json({
      message: "User SignUP successfully.",
      newUser
    });
  } catch (error) {
    next(error);
    if (error.code === 11000) {
      return res.status(409).json({ error: "User already exists" });
    } else {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

exports.logIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(404, "User not found."));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong Credential"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
