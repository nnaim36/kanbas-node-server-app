import mongoose from "mongoose";
import schema from "../User/schema.js";
const model = mongoose.model("UserModel", schema);
export default model;