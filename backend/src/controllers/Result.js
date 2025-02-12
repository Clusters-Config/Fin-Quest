import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Apierror } from "../utils/Apierror.js";
import {SignupSchema} from "../models/signup.js";
import { ResultSchema } from "../models/result.js";


const resultpage = AsyncHandler(async(req,res)=>{
    const {userscore,email,mod,path,mods} = req.body;

    const resultuser = await ResultSchema.findOne({email:email})

    if(!email){
        throw new Apierror(404, "User not found")
        res.status(404).json({message:"User not found"})
    }
   if (mods == "mod1" && path == "path1") {
     if(resultuser){
         resultuser.module[0].mod1.path1 = userscore
        await resultuser.save()
     }
     else{
         const result = new ResultSchema({
             email:email,
             module:[{}]
         })
     result.module[0].mod1.path1 = userscore;

     await result.save();
     }
     console.log(email+" Score updated successful")
   }


   if (mods == "mod1" && path == "path2") {
     if(resultuser){
         resultuser.module[0].mod1.path2 = userscore
        await resultuser.save()
     }
     else{
         const result = new ResultSchema({
             email:email,
             module:[{}]
         })
     result.module[0].mod1.path2 = userscore;

     await result.save();
     }
     console.log(email+" Score updated successful")
   }


   if (mods == "mod2" && path == "path1") {
     if(resultuser){
         resultuser.module[0].mod2.path1 = userscore
        await resultuser.save()
     }
     else{
         const result = new ResultSchema({
             email:email,
             module:[{}]
         })
     result.module[0].mod2.path1 = userscore;

     await result.save();
     }
     console.log(email+" Score updated successful")
   }
   
   if (mods == "mod2" && path == "path2") {
    if(resultuser){
        resultuser.module[0].mod2.path2 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod2.path2 = userscore;
    await result.save();
    }
    console.log(email+" Score updated successful")
  }

  if (mods == "mod3" && path == "path1") {
    if(resultuser){
        resultuser.module[0].mod3.path1 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod3.path1 = userscore;
    await result.save();
    }
    console.log(email+" Score updated successful")
  }

  if (mods == "mod3" && path == "path2") {
    if(resultuser){
        resultuser.module[0].mod3.path2 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod3.path2 = userscore;
    await result.save();
    }
    console.log(email+" Score updated successful")
  }

  if (mods == "mod4" && path == "path1") {
    if(resultuser){
        resultuser.module[0].mod4.path1 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod4.path1 = userscore;
    await result.save();
    }
    console.log(email+" Score updated successful")
  }

  if (mods == "mod4" && path == "path2") {
    if(resultuser){
        resultuser.module[0].mod4.path2 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod4.path2 = userscore;
    await result.save();
    }
    console.log(email+" Score updated successful")
  }

  if (mods == "mod5" && path == "path1") {
    if(resultuser){
        resultuser.module[0].mod5.path1 = userscore;
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod5.path1 = userscore;
    await result.save();
    }
    console.log(email+" 5 Score updated successful")
  }

  if (mods == "mod5" && path == "path2") {
    if(resultuser){
        resultuser.module[0].mod5.path2 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod5.path2 = userscore;
    await result.save();
    }
    console.log(email+" Score updated successful")
  }

  if (mods == "mod5" && path == "path3") {
    if(resultuser){
        resultuser.module[0].mod5.path3 = userscore
       await resultuser.save()
    }
    else{
        const result = new ResultSchema({
            email:email,
            module:[{}]
        })
    result.module[0].mod5.path3 = userscore;
    await result.save();
    }
    console.log(email+" Score updated successful")
  }

  res.json({message:resultuser})
})

export default resultpage