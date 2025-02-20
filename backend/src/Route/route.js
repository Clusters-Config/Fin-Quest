import { Router } from "express";
import { userlogin } from "../controllers/userlogin.js";
import { Signup } from "../controllers/Signup.js";
import { profile_user } from "../controllers/profile.controller.js"; 
import {finduser} from "../controllers/finduser.js"
import {VerifyUser} from "../controllers/verifycookie.js";
import TerminologyPage from "../controllers/Result.js";
import { finduserlearning } from "../controllers/finduser.js";
import { clearcookies } from "../controllers/verifycookie.js";
import { decode } from "../controllers/finduser.js";
// import {chat} from "../controllers/chat.controller.js";
import {suggesstion} from "../controllers/suggesstion.js";
import {discussion} from "../controllers/suggesstion.js";
import { finddiscussion } from "../controllers/suggesstion.js";
import { globalchat } from "../controllers/suggesstion.js";
import { findglobalchat } from "../controllers/suggesstion.js";
const router = Router();

router.route("/login").post(userlogin);
router.route("/signup").post(Signup);
router.route("/profile").post(profile_user);
router.route("/finduser").post(finduser);
router.route('/verify').get(VerifyUser);
router.route("/resultpage").post(TerminologyPage)
router.route("/finduserlearning").post(finduserlearning)
router.route("/clearcookies").get(clearcookies)
router.route("/decode").get(decode)
// router.route("/chat").post(chat)
router.route("/comment").post(suggesstion)
router.route("/discussion").post(discussion)
router.route("/finddiscussion").get(finddiscussion)
router.route("/globalchat").post(globalchat)
router.route("/findglobalchat").get(findglobalchat)

export {router};