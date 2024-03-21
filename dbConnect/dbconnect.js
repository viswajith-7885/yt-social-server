import mongoose from "mongoose";

export const dbconnect=()=>{
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("database has been connected successfully")
        
    } catch (error) {
        console.log(error)
    }
}