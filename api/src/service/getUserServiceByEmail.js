const User = require("../model/userModel");


exports.getCompanyServiceById = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
  };
  