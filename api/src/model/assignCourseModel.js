const mongoose = require("mongoose");


const courseSchema = mongoose.Schema({

    courseCode:{
        type: String,
        required: true
    },
    
   
},
{ timestamps: true }
)

const AssignCourse = mongoose.model("AssignCourse",courseSchema);
module.exports = AssignCourse;