import { SignupSchema } from "../models/signup.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt, { decode } from "jsonwebtoken";
import cookieParser from "cookie-parser";

const finduser = AsyncHandler(async (req, res) => {
  const { email, useremail} = req.body;
  console.log(useremail); 
  
  const user = await SignupSchema.findOne({ email: useremail || email});

  res.status(202).json({user});
});

export { finduser };  
