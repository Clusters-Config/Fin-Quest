import mongoose from "mongoose";
import { Schema } from "mongoose";

const resultSchema = new Schema({
        email:{
            type:String,
            lowercase:true
        },
            mod1: 
            [
                {
                    path1:
                    {
                        type: Number,
                        required: true,
                    },
                    path2:
                    {
                        type: Number,
                        required: true,
                    }
                }  
            ],
            mod2: 
            [
                {
                    path1:
                    {
                        type: Number,
                        required: true,
                    },
                    path2:
                    {
                        type: Number,
                        required: true,
                    }
                }  
            ],
            mod3: 
            [
                {
                    path1:
                    {
                        type: Number,
                        required: true,
                    },
                    path2:
                    {
                        type: Number,
                        required: true,
                    }
                }  
            ],
            mod4: 
            [
                {
                    path1:
                    {
                        type: Number,
                        required: true,
                    },
                    path2:
                    {
                        type: Number,
                        required: true,
                    }
                }  
            ],
            mod5: 
            [
                {
                    path1:
                    {
                        type: Number,
                        required: true,
                    },
                    path2:
                    {
                        type: Number,
                        required: true,
                    },
                    path3:
                    {
                        type: Number,
                        required: true,
                    }
                }  
            ],

    {
        timestamps:true
});


const ResultSchema = mongoose.model("Result",resultSchema);
export{ResultSchema};