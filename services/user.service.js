import userModel from "../models/user.model";
import bycript from 'bcrypt'

export const updateUser = async(userID,updateData)=>{
    if(updateData.password){
        try {
            updateData.password = await bycript.hashSync(updateData.password,10)
            
        } catch (error) {
            throw error
        }
    }
    try{
        const user = await userModel.findById(userId,{
            $set:updateData
        })
    }catch(error){
        throw error
    }
}