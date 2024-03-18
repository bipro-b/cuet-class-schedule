const User = require("../model/userModel");


exports.getUser = async (query) => {
  try {
    const users = await User.find(query);
    return users;
  } catch (error) {
    console.error("Error fetching users: ", error);
    return null;
  }
};



exports.getCompanyServiceById = async (email) => {
    const user = await User.findOne({ email: email });
    return user;
  };
  
  