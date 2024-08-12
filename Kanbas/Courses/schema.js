import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
        name:String,
        //number:{type:String,required: true, unique: true},
        number:String,
        startDate: Date,
        endDate:Date,
        department:String,
        credits: Number,
        description:String,
    },
    {collection: "courses"}
);
export default courseSchema;