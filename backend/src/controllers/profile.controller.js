import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { SignupSchema } from "../models/signup.js";

const profile_user = AsyncHandler(async (req, res) => {
    
    const { useremail, firstname, lastname, dob, phone, hobbies } = req.body;

    if ([useremail ,firstname, lastname, dob, phone, hobbies].some((exist) => String(exist).trim() === "")){
        return res.status(401).send("Something went wrong")
        throw new Apierror(404, "All fields required");
    }
        

    const user = await SignupSchema.findOne({ 
      email: useremail });

 
    user.profile = {
        firstname,
        lastname,
        dob,
        phone,
        hobbies,
    };

    await user.save();

    console.log(useremail + " Profile Updated Successfully");

    res.json(user);
});

export { profile_user };
