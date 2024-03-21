import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        min:3,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    profilePicture:{
        type:String,
        default:"",
    },
    coverPicture:{
        type:String,
        default:"",
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    disc:{
        type:String
    },
    from:{
        type:String
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }
})

export default mongoose.model("User",userSchema);