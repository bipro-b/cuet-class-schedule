const mongoose = require("mongoose");


const courseSchema = mongoose.Schema({

    courseCode:{
        type: String,
        required: true
    },
    
    teacherName:{
        type: String,
        required: true
    },
    levelTerm:{
        type: String,
        required: true
    },
    time:{
        type: Number,
        required: true
    },
    day:{
        type: Number,
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