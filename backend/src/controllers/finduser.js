import { SignupSchema } from "../models/signup.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt, { decode } from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { ResultSchema } from "../models/result.js";

const finduser = AsyncHandler(async (req, res) => {
  const { email} = req.body;
  const {useremail} = req.body;
  
  const user = await SignupSchema.findOne({ email: useremail || email});

  res.status(202).json({user});
});


const finduserlearning = AsyncHandler(async(req,res)=>{
  const {useremail} = req.body;
  const user = await ResultSchema.findOne({email:useremail})
  console.log(user?.email)
  if(user){
    res.status(201).json(user)
  }
  else{
    res.status(404).json({ message: "User not found"})
  }
})

export { finduser ,finduserlearning};  
