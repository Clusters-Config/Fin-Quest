import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Apierror } from "../utils/Apierror.js";
import {SignupSchema} from "../models/signup.js";
import { ResultSchema } from "../models/result.js";


const TerminologyPage = AsyncHandler(async(req,res)=>{
    const {score,email} = req.body;

    const user = await SignupSchema.findOne({email:email})
    useremail = user.email

    const result = new ResultSchema({
        email:useremail,
        // module.mod1[0].path1: score
    })

})

export default TerminologyPage