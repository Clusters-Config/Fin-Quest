import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { SignupSchema, } from "../models/signup.js";

const userlogin  = AsyncHandler( async(req,res)=>{

    const {email,password} = req.body;

    if([email,password].some((exist)=> exist.trim()=== "")){
        throw new Apierror(404,"All fileds required");
    }

    const finduser = await SignupSchema.findOne({
        $and:[{email}]
    });

    const userpassword = finduser.password;

    if(userpassword !== password)
        throw new Apierror(403,"Password incorrect");
    if(!finduser){
        throw new Apierror(404,"User not found");
    }

    console.log(email+" Login successful");
    res.send("Login successful");



});

export {userlogin};