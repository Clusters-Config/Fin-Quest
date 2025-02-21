import {AsyncHandler} from "../utils/AsyncHandler.js"
import streakSchema from "../models/streak.js";

const streak = AsyncHandler(async(req,res)=>{
    const {streak, email} = req.body;

    const user = await streakSchema.findOne({email:email})
    if(!user){
        const newuser = new streakSchema({
            email:email,
            streak:streak
        })

        await newuser.save()
    }
    else{
        user.streak = streak
        await user.save()
    }
    console.log("Done")
    return res.json(user)
})

export { streak};