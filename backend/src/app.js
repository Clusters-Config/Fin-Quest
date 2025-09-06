
import { router } from "./Route/route.js";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

 
 dotenv.config({
   path: "/Fin-Quest/backend/.env",
 });
const app = express();


app.use(
 cors({    
   origin: ["http://localhost:5173", "https://fin-quest-frontend.onrender.com"],
    credentials: true,
 }),
  
);

const upload = multer();
app.use(upload.any());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", router);
 
 router.route("/").get((req, res) => {
   res.send("Backend for finquest");
 });
 
export { app };

