import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { SignupSchema } from "../models/signup.js";

const profile_user = AsyncHandler(async (req, res) => {
    
    const { useremail, firstname, lastname, dob, phone, hobbies, role } = req.body;

    // console.log(req.body)
    if ([useremail ,firstname, lastname, dob, phone, hobbies].some((exist) => String(exist).trim() === "")){
        return res.status(401).send("Something went wrong")
        throw new Apierror(404, "All fields required");
    }
    // console.log("hello")


    const user = await SignupSchema.findOne({ 
        email: useremail
    });
    // let urole = await SignupSchema.findOne({
    //     email: useremail
    // });
    // console.log(urole)


 
    user.profile = {
        firstname,
        lastname,
        dob,
        phone,
        hobbies,
        
    }

    // console.log(urole)

    user.role = role

    
    await user.save();

    console.log(useremail + " Profile Updated Successfully");

    res.json(user);
});

export { profile_user };
