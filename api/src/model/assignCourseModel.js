const mongoose = require("mongoose");


const courseSchema = mongoose.Schema({

    courseTitle:{
        type: String,
        required: true
    },
    courseName:{
        type: String,
        required: true
    },
    levelTerm:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    day:{
        type: String,
        required: true
    },
    sessional:{
        type: Boolean,
        default:false
    },
},
{ timestamps: true }
)

const AssignCourse = mongoose.model("AssignCourse",courseSchema);
module.exports = AssignCourse;