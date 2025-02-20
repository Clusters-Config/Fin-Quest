import mongoose, { Schema } from "mongoose"


const suggesstion  = new Schema({
    comment:{
        type:String
    },
    email:{
        type:String
    }
})


const discussion = new Schema({
    username:{
        type:String
    },
    comment:{
        type:String
    },
    email:{
        type:String
    }
})

const suggesstionSchema = mongoose.model("suggesstion",suggesstion); 
const discussionSchema = mongoose.model("discussion",discussion); 
export {suggesstionSchema , discussionSchema}