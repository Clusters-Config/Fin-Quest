import mongoose from "mongoose";
import { Schema } from "mongoose";

const signupSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Password required"]
    },
    
    profile: [
        {
        firstname: {
            type: String,
           
           
        },
        lastname: {
            type: String,
       
        },
        dob: {
            type: String,
           
        },
        phone: {
            type: Number,
    
        },
        hobbies: {
            type: String,
        
        }
    }]

},
{
    timestamps:true
});

const SignupSchema = mongoose.model("Signup",signupSchema);
export{SignupSchema};
