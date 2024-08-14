import mongoose from "mongoose";

/*const lessonSchema = new mongoose.Schema({
    id: String,
    name: String,
    description:String,
    module: String
});
*/
const moduleSchema = new mongoose.Schema({
    name:String,
    descriptions:String,
    courseid:String,
    lessons:[],

},
{collection:"modules"}

);
export default moduleSchema;