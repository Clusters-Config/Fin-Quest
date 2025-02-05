import { profileSchema } from "../models/profile.models.js";
import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { SignupSchema } from "../models/signup.js";

const profile_user = AsyncHandler(async (req,res)=>{
    const{firstname,lastname,dob,phone,hobbies,email} = req.body;

    if([firstname,lastname,dob,phone,hobbies,email].some((exist)=> exist?.trim() === ""))
        throw new Apierror(404,"All fields required");

    const existuser = await SignupSchema.findOne({
        $or:[{email}]
    });

    if(existuser)throw new Apierror(404, "User already exist");
    let profile = await  new profileSchema({
        firstname,
        lastname,
        dob,
        phone,
        hobbies,
        email
    });

    await profile.save();
console.log(firstname+" Updated successfully");

res.json(profile);

});




export{profile_user}