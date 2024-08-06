import db from "../Database/index.js";
export default function AssignmentRoutes(app){

    app.get("/api/courses/:cid/assignments", (req, res) =>{
        const { cid } = req.params;
        const assignments = db.assignments.filter((m) => m.course === cid);
        console.log(cid);
        res.json(assignments);
    });

    app.put("/api/assignments/:mid", (req, res) => {
        const { mid } = req.params;
        const assignmentIndex = db.assignments.findIndex(
          (m) => m._id === mid);
        db.assignments[assignmentIndex] = {
          ...db.assignments[assignmentIndex],
          ...req.body
        };
        res.sendStatus(204);
    });
    
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        console.log("assignments add:",req.body);
        const newAssignment = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
      });

      //delete assignment
      app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        console.log("assignment delete:",aid);
        db.assignments = db.assignments.filter((m) => m._id !== aid);
        res.sendStatus(200);
    });
}