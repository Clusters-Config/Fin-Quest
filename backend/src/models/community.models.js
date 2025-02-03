import mongoose from "mongoose";

const mongo = mongoose.Schema;

const community = new mongo({
    id : Number , 
    name : String,
    domain : String,
    image : String,

})

const domain = mongoose.model('Domain',community);

export default domain;

