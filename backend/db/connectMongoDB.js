import mongoose from "mongoose";

export default async function connectMongoDb(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully!");

    } catch (error) {
        console.log("Error connecting to MondoDB: ", error.message);
    }
}