import mongoose from "mongoose"
import { Schema } from "mongoose"

const streak = new Schema({
    email:{
        type:String
    },
    streak:{
        type:String
    }
})

 const streakSchema = mongoose.model("streak", streak)

 export default streakSchema;