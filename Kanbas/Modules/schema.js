import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    id: String,
    name: String,
    description:String,
    module: String
});
const userSchema = new mongoose.Schema({
    name:String,
    descriptions:String,
    course:String,
    lessons:[lessonSchema],

},
{collection:"modules"}

);
export default userSchema;