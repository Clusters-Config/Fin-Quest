import mongoose, { Schema } from "mongoose";

const loginSchema = new Schema({
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

const login = mongoose.model("login",loginSchema);
export {login}