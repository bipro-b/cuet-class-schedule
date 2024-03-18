const User = require("../model/userModel");
const { getCompanyServiceById, getUser } = require("../service/userService");

exports.getUsers = async (req, res, next) => {
    try {
      const result = await getUser(req.body);
      if (result) {
        res.status(200).json({
          status: "Success",
          message: "Successfully get user data",
          result,
        });
      } else {
        throw new Error("No users found or there was an error fetching users.");
      }
    } catch (error) {
      res.status(500).json({
        status: "Failed",
        message: "User data is not fetched!",
        error: error.message,
      });
    }
  };

exports.getUserByEmail = async(req,res,next)=>{
    try {
        
        const {email} = req.params;

        const result = await getCompanyServiceById(email);

        res.status(200).json({
            status:"Success",
            message:"Successfully fetch data.",
            result
            
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Couldn't fetch data",
            error:error.message
        })
    }
}