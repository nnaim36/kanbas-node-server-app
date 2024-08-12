/*
import Database from "../Database/index.js";
export default function CourseRoutes(app) {

    //deleting courses
    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        Database.courses = Database.courses.filter((c) => c._id !== id);
        res.sendStatus(204);
      });
    
    app.post("/api/courses", (req, res) => {
        const course = { ...req.body,
          _id: new Date().getTime().toString() };
        Database.courses.push(course);
        res.send(course);
      });
    

  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    //console.log(courses);
    res.send(courses);
  });

  //updating course
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });

}
*/
import * as doa from "./dao.js";
export default function CourseRoutes(app){
    const deleteCourse = async (req,res) => {
        console.log("Deleting!!!:",req.params._id);
        const status = await doa.deleteCourse(req.params._id);
        //const status = await doa.deleteCourse(req.params.CourseID);
        res.json(status);
    };

    const createCourse = async (req,res) => {
        console.log("create course:",req.body);
        const course = await doa.createCourse(req.body); 
        res.json(course);
    };

    const findAllCourses = async (req,res) => {
        const courses = await doa.findAllCourses();
        res.json(courses);
        return;
    }
    const updateCourse = async (req,res) => {
        console.log("Updating",req.body);
        const {courseId} = req.params;
        const status =await doa.updateCourse(courseId,req.body);
        res.json(status);
    }

    app.delete("/api/courses/:_id",deleteCourse);
    app.post("/api/courses",createCourse);
    app.get("/api/courses",findAllCourses);
    app.put("/api/courses/:courseId",updateCourse);
}