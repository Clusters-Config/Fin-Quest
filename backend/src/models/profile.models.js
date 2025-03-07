import mongoose from "mongoose";
import { Schema } from "mongoose";
import { Apierror } from "../utils/Apierror";



const profile = new Schema({
    firstname:{
        type:String,
      
    },

    lastname:{
        type:String,
      
    },
    dob:{
        type:String,
      
    },
    phone:{
        type:String,
     
    },
    hobbies:{
        type:String,
       
    },
    email:{
        type:String,

        lowercase:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Signup"
    }
},
{
    timestamps:true
});

const profileSchema = mongoose.model("profile",profile);
export{profileSchema};