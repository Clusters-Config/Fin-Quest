import { Router } from "express";
import { userlogin } from "../controllers/userlogin.js";
import { Signup } from "../controllers/Signup.js";
import { profile_user } from "../controllers/profile.controller.js"; 

const router = Router();

router.route("/login").post(userlogin);
router.route("/signup").post(Signup);
router.route("/profile").post(profile_user);


export {router};