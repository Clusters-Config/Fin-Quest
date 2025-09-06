import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { SignupSchema } from "../models/signup.js";
import jwt from "jsonwebtoken";

import { app } from "../app.js";
import mongoose from "mongoose";

const userlogin = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((exist) => exist?.trim() === "")) {
    throw new Apierror(404, "All fileds required");
  }

  const finduser = await SignupSchema.findOne({
    $and: [{ email }],
  });

  if (!finduser) {
    res.json({ valid: true });
    throw new Apierror(404, "User not found");
  }

  const userpassword = finduser.password;

  if (userpassword !== password) {
    res.json({ valid: true });
    throw new Apierror(404, "Password incorrect");
  }
  const _id = finduser?._id.toString();
  const username = finduser?.username;
  const firstname = finduser?.profile[0]?.firstname;
  const lastname = finduser?.profile[0]?.lastname;
  const dob = finduser?.profile[0]?.dob;
  const phone = finduser?.profile[0]?.phone;
  const hobbies = finduser?.profile[0]?.hobbies;
  const role = finduser.role;
  // console.log(finduser.role)

  // console.log(_id)
  const accessToken = jwt.sign(
    { firstname:firstname, lastname:lastname, dob:dob,phone:phone,username:username ,email: email, password: password ,hobbies:hobbies, id:_id, role:role},
    "json-access-token",
    {
      expiresIn: "30m",
    },
  );
  const refreshToken = jwt.sign(
    { firstname:firstname, lastname:lastname, dob:dob,phone:phone,username:username ,email: email, password: password ,hobbies:hobbies, id:_id, role:role},
    "json-refresh-token",
    {
      expiresIn: "60m",
    },
  );

  res.cookie("accessToken", accessToken, {
    maxAge: 1800000,
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });
  res.cookie("refreshToken", refreshToken, {
    maxAge: 3600000,
    secure: true,
    httpOnly: false,
    sameSite: "none",
  });

  const verifytoken = (req, res, next) => {
    const accesstoken = req.cookies.accessToken;
    if (!accesstoken) {
      if (renewToken()) {
        next();
      }
    } else {
      jwt.verify(accesstoken, "json-access-token", (err, decode) => {
        if (err) {
          return res.json({ valid: false, message: "Invalid token" });
        } else {
          req.email = jwt.decode(accessToken).email;
          next();
        }
      });
    }
  };

  const renewToken = (req, res, next) => {
    const refreshtoken = req.cookies.refreshToken;
    let exist = false;
    if (!refreshtoken) {
      return res.json({ valid: false, message: "Invalid token" });
    } else {
      jwt.verify(refreshtoken, "json-refresh-token", (err, decode) => {
        if (err) {
          return res.json({ valid: false, message: "Invalid token" });
        } else {
          const Email = jwt.decode(refreshToken).email;
          const accessToken = jwt.sign({ email: Email }, "json-access-token", {
            expiresIn: "3m",
          });
          res.cookie("accessToken", accessToken, {
            maxAge: 180000,
            httpOnly: true,
            secure: true,
            sameSite: "none",
          });
          exist = true;
          res.json({ valid: true, message: "Token Renewed" });
        }
      });
    }
    return exist;
  };



  res.send("Login successful");
});

export { userlogin };
