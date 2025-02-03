import express from "express";
import DbConnect from "./db/index.js";
import dotenv from "dotenv";
import { router } from "./Route/route.js";
import multer from "multer";
const app = express();

dotenv.config({
    path:"/Fin-Quest/backend/.env"
});

const hostname = "127.0.0.1";

app.use(express.json());

app.use("/createuser", router);

DbConnect()
.then(() =>{
    app.listen(process.env.PORT || 5000, () =>{      
    console.log("Connected DB");   
    console.log(`Server running at http://${hostname}:${process.env.PORT}`);
    } );

}).catch( (error)=>{
    console.log("Error" + error);
})