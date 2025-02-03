import { Router } from "express";
import { userlogin } from "../controllers/userlogin.js";
import { Signup } from "../controllers/Signup.js";

const router = Router();

router.route("/login").post(userlogin);
router.route("/create").post(Signup);


export {router};