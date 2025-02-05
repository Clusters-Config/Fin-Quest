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
    firstname:{
        type:String,
        required:true,
    },

    lastname:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    hobbies:{
        type:String,
        required:true,
    },
},
{
    timestamps:true
});

const SignupSchema = mongoose.model("Signup",signupSchema);
export{SignupSchema};