import model from "./model.js";

export const createCourse = (course) => {
    delete user._id;
    return model.create(course);
}

export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);


export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });