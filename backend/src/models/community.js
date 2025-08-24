import mongoose from "mongoose"
import {Schema} from "mongoose"

const communitychat = new Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const CommunitychatSchema = mongoose.model("communitychat", communitychat)
export default CommunitychatSchema;
