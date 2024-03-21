import userModel from "../models/user.model.js";
import bcrypt from "bcrypt"

export const registerUser = async (body)=>{
    
        const hashPassword = bcrypt.hashSync(body.password,10);
        const newuser = new userModel({
            username:body.username,
            email:body.email,
            password:hashPassword
        })

       
        await newuser.save();
        return newuser
     
}

export const loginUser = async (body)=>{
    const user=await userModel.findOne({email:body.email})
    !user&& res.status(404).json("user not found")
    const passwordCheck = await bcrypt.compare(body.password,user.password)
    !passwordCheck&& res.status(400).json("wrong password");
    return user;
}