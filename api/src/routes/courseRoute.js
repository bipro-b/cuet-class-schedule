const express = require("express");
const CourseController = require("../controller/courseController")

const router = express.Router()

router.route("/bulk-update").put(CourseController.bulkUpdateCourse);
router.route("/bulk-delete").delete(CourseController.bulkDeleteCourse)

router.route("/")
.post(CourseController.createCourse)
.get(CourseController.getCourse)


router.route("/:id")
.get(CourseController.getCourseById)
.put(CourseController.updateCourseById)
.delete(CourseController.deleteCourseById)

module.exports = router;