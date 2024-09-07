import { UserModel } from "../db/models/user-schema.js";
import mongoose from "../db/connection.js"

export const userController = {
    async like(request, response){
        const userInfo = request.body;
        try{
            const doc = await UserModel.create(userInfo);
            if(doc && doc._id){
            response.json({message:'Register SuccessFully'});
            }
            else{
                response.json({message:'Problem in Register'});
            }
        }
        catch(err){
            console.log('Register Err ', err);
            response.json({message:'Problem in Register'});
        }
    },
    async getliked(req,res){
        try{
            const doc=await UserModel.find({}).exec();
            // console.log("Doc is",doc);
            res.json({message:doc});
        }
        catch(err){
            console.log("Error in getting songs ",err);
        }
    }

}