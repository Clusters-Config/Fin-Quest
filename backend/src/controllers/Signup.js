import { SignupSchema } from "../models/signup.js";
import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

const Signup = AsyncHandler(async (req,res)=>{
    const{username,email,password, role} = req.body;

    if([username,email,password].some((exist)=> exist.trim() === ""))
        throw new Apierror(404,"All fields required");

    const existuser = await SignupSchema.findOne({
        $or:[{username},{email}]
    });

    if(existuser)throw new Apierror(404, "User already exist");
    let newSignup = await  new SignupSchema({
        username,
        email,
        password,
        role:role
    });

    await newSignup.save();

    

console.log(username+" Created successfully");
res.json(newSignup);

});







export{Signup}