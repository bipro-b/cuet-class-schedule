const Course = require("../model/assignCourseModel");
exports.createCourseService = async (data) => {
  const course = await Course.create(data);
  return course;
};

exports.getCourseService = async () => {
  const course = await Course.find({});
  return course;
};
exports.getCourseServiceById = async (id) => {
  const Course = await Course.findOne({ _id: id });
  return Course;
};

exports.updateCourseServiceById = async (id, data) => {
  const course = await Course.updateOne(
    { _id: id },
    {
      $set: data,
    },
    { runValidators: true }
  );
  return course;
};

exports.bulkUpdateCourseService = async (data) => {
  const updateOperations = data.map((Course) => ({
    updateOne: {
      filter: { _id: Course._id },
      update: { $set: Course },
    },
  }));

  const updateCompanies = await Course.bulkWrite(updateOperations);

  return updateCompanies;
};

exports.deleteCourseService = async (id) => {
  const deletedCourse = await Course.deleteOne({ _id: id });
  return deletedCourse;
};

exports.bulkDeleteCourseService = async (ids) => {
  const result = await Course.deleteMany({ _id: ids });
  return result;
};