import { SignupSchema } from "../models/signup.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ResultSchema } from "../models/result.js";

const finduser = AsyncHandler(async (req, res) => {
  const { email} = req.body;
  const {useremail} = req.body;
  
  const user = await SignupSchema.findOne({ email: useremail || email});

   return res.status(202).json({user});
});


const finduserlearning = AsyncHandler(async(req,res)=>{
  const {email} = req.body;
  const user = await ResultSchema.findOne({email:email})
  if(user){
   return res.status(201).json(user)
  }
  else{
    return res.json({ message: "User not found"})
  }
})

export { finduser ,finduserlearning};  
