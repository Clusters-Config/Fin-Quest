import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Apierror } from "../utils/Apierror.js";
import {SignupSchema} from "../models/signup.js";
import { ResultSchema } from "../models/result.js";


const resultpage = AsyncHandler(async(req,res)=>{
    const {userscore,email} = req.body;

    const user = await SignupSchema.findOne({email:email})
    if(!user){
        throw new Apierror(404,"Email not found")
    }
    const useremail = user.email
    console.log(useremail)

    const resultuser = await ResultSchema.findOne({email:useremail})

    if(resultuser){
        resultuser.module[0].mod1.path1 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:useremail,
            module:[{}]
        })
    result.module[0].mod1.path1 = userscore;
    console.log(result)
    await result.save();
    }
    console.log(useremail+" Score updated successful")

})

export default resultpage