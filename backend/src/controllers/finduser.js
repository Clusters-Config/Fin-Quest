import { SignupSchema } from "../models/signup.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt, { decode } from "jsonwebtoken";
import cookieParser from "cookie-parser";

const finduser = AsyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await SignupSchema.findOne({ email: email });

  res.json({ login: user });
});

export { finduser };
