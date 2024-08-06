import db from "../Database/index.js";
export default function ModuleRoutes(app) {

    //update module
    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
          (m) => m._id === mid);
        db.modules[moduleIndex] = {
          ...db.modules[moduleIndex],
          ...req.body
        };
        res.sendStatus(204);
    });
    

    //delete modules
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });
    

    //add modules
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        //console.log("add mod:",req.body);
        const newModule = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };
        db.modules.push(newModule);
        res.send(newModule);
      });
    

    //get modules
  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = db.modules.filter((m) => m.course === cid);
    res.json(modules);
  });
}
