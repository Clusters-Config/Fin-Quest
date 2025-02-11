import { Router } from "express";
import { userlogin } from "../controllers/userlogin.js";
import { Signup } from "../controllers/Signup.js";
import { profile_user } from "../controllers/profile.controller.js"; 
import {finduser} from "../controllers/finduser.js"
import VerifyUser from "../controllers/verifycookie.js";
import TerminologyPage from "../controllers/TerminologyPage.js";
const router = Router();

router.route("/login").post(userlogin);
router.route("/signup").post(Signup);
router.route("/profile").post(profile_user);
router.route("/finduser").post(finduser);
router.route('/verify').get(VerifyUser);
router.route("/1/TerminologyPage").post(TerminologyPage)

export {router};