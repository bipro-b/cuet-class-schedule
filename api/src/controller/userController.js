const User = require("../model/userModel")

exports.getUsers = async(req,res,next)=>{
    try {

        const users = await User.find({});
        res.status(200).json({
            status:"Success",
            message:"Successfully get user data",
            users
        })
        
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            message:"User data is not fetched!",
            error:error.message
        })
        
    }
}