import { SignupSchema } from "../models/signup.js";
import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

const profile_user = AsyncHandler(async (req,res)=>{
    const{firstname,lastname,dob,phone,hobbies} = req.body;

    if([firstname,lastname,dob,phone,hobbies].some((exist)=> exist.trim() === ""))
        throw new Apierror(404,"All fields required");

    const existuser = await SignupSchema.findOne({
        $or:[{email}]
    });

    if(existuser)throw new Apierror(404, "User already exist");
    let profile = await  new SignupSchema({
        firstname,
        lastname,
        dob,
        phone,
        hobbies
    });

    await profile.save();
console.log(username+" Updated successfully");

res.json(profile);

});







export{profile_user}