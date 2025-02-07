import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { SignupSchema } from "../models/signup.js";

const profile_user = AsyncHandler(async (req, res) => {
    

    

    const { useremail, firstname, lastname, dob, phone, hobbies } = req.body;

    if ([useremail ,firstname, lastname, dob, phone, hobbies].some((exist) => exist?.trim() === ""))
        throw new Apierror(404, "All fields required");

    const user = await SignupSchema.findOne({ 
      email: useremail });

    // Store the entire profile data in the SignupSchema
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
