const User = require("../model/userModel");

exports.registerUser = async(req,res,next)=>{

    try {
        const result = await User.create(req.body);
        res.status(201).json({
            status:"Success",
            message:"User registered successfully",
            result
        })
        
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            message:"User cannot register.",
            error:error.message

        })
    }
}