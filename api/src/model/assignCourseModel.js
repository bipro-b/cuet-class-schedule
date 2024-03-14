const mongoose = require("mongoose");


const courseSchema = mongoose.Schema({

    CourseCode:{
        type: String,
        required: true
    },
    TeacherName:{
        type: String,
        required: true
    },
    Day:{
        type: Number,
        required: true
    },
    Time:{
        type: Number,
        required: true
    },
   
    Sessional:{
        type: Boolean,
        default:false
    },
},
{ timestamps: true }
)

const AssignCourse = mongoose.model("AssignCourse",courseSchema);
module.exports = AssignCourse;