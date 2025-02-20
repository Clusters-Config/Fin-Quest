import {suggesstionSchema }from "../models/suggestion.js"; 
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { SignupSchema } from "../models/signup.js";
import { Apierror } from "../utils/Apierror.js";
import { discussionSchema } from "../models/suggestion.js";

const suggesstion = AsyncHandler(async(req,res)=>{
    const{email,newcomments} = req.body;

    if([email,newcomments].some((exist)=> !exist?.trim()))
        throw new Apierror(404,"All fields required");

    const user = await SignupSchema.findOne({email:email});

    if(user){
        // const commentuser = await suggesstionSchema.findOne({email:email})
        
            const ucomment = new suggesstionSchema({
                email:email,
                comment:newcomments             
            })

            await ucomment?.save()
        
    }


   return res.status(202)
    
    
})

const discussion = AsyncHandler(async(req,res)=>{
    const{email,discussion} = req.body;

    if([email,discussion].some((exist)=> !exist?.trim()))
        throw new Apierror(404,"All fields required");

    const user = await discussionSchema.findOne({email:email});

    if(user){
        // const commentuser = await suggesstionSchema.findOne({email:email})
        
            const udiscussion = new suggesstionSchema({
                email:email,
                comment:discussion             
            })

            await udiscussion?.save()
        
    }
    

   return res.status(202)
    
    
})

export {discussion,suggesstion}