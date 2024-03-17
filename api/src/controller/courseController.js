const { createCourseService, getCourseService, getCourseServiceById, updateCourseServiceById, bulkUpdateCourseService, deleteCourseService, bulkDeleteCourseService } = require("../service/courseService")

exports.createCourse = async(req,res,next)=>{
    try {


        const result = await createCourseService(req.body);

        res.status(200).json({
            status:"Success",
            message:"Successfully created data.",
            result
            
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Couldn't create data",
            error:error.message
        })
    }
}

exports.getCourse = async(req,res,next)=>{
    try {


        const result = await getCourseService();

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

exports.getCourseById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Call your service function to get the course by ID
      const result = await getCourseServiceById(id);
  
      // Respond with the result
      res.status(200).json({
        status: "Success",
        message: "Successfully fetched data.",
        result
      });
    } catch (error) {
      // Handle errors
      res.status(400).json({
        status: "Fail",
        message: "Couldn't fetch data",
        error: error.message
      });
    }
  };

exports.updateCourseById = async(req,res,next)=>{
    try {
        
        const {id} = req.params;

        const result = await updateCourseServiceById(id,req.body);

        res.status(200).json({
            status:"Success",
            message:"Successfully updated data.",
            result
            
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Couldn't updated data",
            error:error.message
        })
    }
}

exports.bulkUpdateCourse = async(req,res,next)=>{
    try {
        
        const result = await bulkUpdateCourseService(req.body);

        res.status(200).json({
            status:"Success",
            message:"Successfully updated data.",
            result
            
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Couldn't updated data",
            error:error.message
        })
    }
}

exports.deleteCourseById = async(req,res,next)=>{
    try {

        const {id} = req.params;
        
        const result = await deleteCourseService(id);

        res.status(200).json({
            status:"Success",
            message:"Successfully deleted data.",
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Couldn't deleted data",
            error:error.message
        })
    }
}

 
exports.bulkDeleteCourse= async(req,res,next)=>{
    try {        
        const result = await bulkDeleteCourseService(req.body.ids);

        if(!result.deletedCount){
            return res.status(400).json({
                status:"Fail",
                error:"Couldn't delete the data"
            })
        }

        res.status(200).json({
            status:"Success",
            message:"Successfully deleted data.",
        })
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message:"Couldn't deleted data",
            error:error.message
        })
    }
}
