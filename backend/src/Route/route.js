import { Router } from "express";
import { userlogin } from "../controllers/userlogin.js";

const router = Router();

router.route("/").post(userlogin);

export {router};