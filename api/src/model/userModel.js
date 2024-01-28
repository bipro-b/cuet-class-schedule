const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type: String,
        default:"teacher"
        },
    avatar: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }

   
},{ timestamps: true })

const User = mongoose.model("User",userSchema);
module.exports = User;