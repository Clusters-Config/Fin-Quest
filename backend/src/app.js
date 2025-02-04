import express from "express";
import { router } from "./Route/route.js";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config({
    path:"/Fin-Quest/backend/.env"
})
const app = express();

app.use(express.json());
const upload = multer()
app.use(upload.any());


app.use("/user", router);
router.route("/").get((req,res)=>{
    res.send("/user/login \n /user/create");
})


export {app};
