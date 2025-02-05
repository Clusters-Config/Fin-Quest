import { SignupSchema } from "../models/signup.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";



const finduser = AsyncHandler( async (req,res)=>{
    const {email} = req.body;
    const user = await SignupSchema.findOne({email});

   
    res.json({login: user.login});    
})

export  {finduser};