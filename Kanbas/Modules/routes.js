/*
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
*/

import * as doa from "./dao.js";
export default function ModulesRoutes(app){

    const deleteModule = async(req,res) => {
        const status = await doa.deleteModule(req.params._id);
        res.json(status);
    };

    const createModule = async(req,res) => {
        const module = await doa.createModule(req.body);
        res.json(module);
    };

    const findAllModules = async(req,res) => {
        console.log("finding all modules");
        const modules = await doa.findAllModules();
        res.json(modules);
        return;
    };

    const updateModule = async(req,res) => {
        const {modleId} = req.params;
        const status = await doa.updateModule(modleId,req.body);
        res.json(status);
    };

    app.delete("/api/modules/:_id",deleteModule);
    app.post("/api/modules",createModule);
    app.get("/api/modules",findAllModules);
    app.put("/api/modules/:courseId",updateModule);
}
