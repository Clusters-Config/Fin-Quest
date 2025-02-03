import mongoose from "mongoose";
import { Schema } from "mongoose";

const signupSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
},
{
    timestamps:true
});

const SignupSchema = mongoose.model("Signup",signupSchema);
export{SignupSchema};