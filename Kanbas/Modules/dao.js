import model from "./model.js";
export const createModule = (module) => {} // implemented later
export const findAllModules = () => model.find();

export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });