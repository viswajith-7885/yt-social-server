
import { loginUser, registerUser } from "../services/auth.service.js";

//Resgister
export const register = async (req,res)=>{
    try {
        
        const newUSer=await registerUser(req.body)

        const {password,...data}=newUSer._doc
        res.status(200).json({
            data,
            message:"user has been registered successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            error:error,
            message:"Error occured registering user"
        })
        console.log(error);
    }
}

export const login =async(req,res)=>{
    try {
        const loggedInuser = await loginUser(req.body)
        
        res.status(200).json({
            loggedInuser,
            message:"user logged in succesfully",
           
        })
        
    } catch (error) {
        res.status(500).json({
            error:error,
            message:"Error occured login user"
        })
        console.log(error);
    }
}