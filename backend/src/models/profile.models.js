import mongoose from "mongoose";
import { Schema } from "mongoose";

const profile = new Schema({
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

const profileschema = mongoose.model("profile.models",profile);
export{profileschema};