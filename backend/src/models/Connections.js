import { Schema } from "mongoose";
import mongoose from "mongoose";


const connection = new Schema({
    user: {
        type: String,
        required :true
    },
    connection: {
        type: String,
        required: true
    }
}, {
    timestamps : true
})

const connectionSchema = mongoose.model("connections", connection)
export default connectionSchema;