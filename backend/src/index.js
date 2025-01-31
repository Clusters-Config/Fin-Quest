import express from "express";
import DbConnect from "./db/index.js";
const app = express();

DbConnect().then(() =>{
    app.listen(process.env.PORT || 3000 , () =>{
        console.log("Connected DB");

    } )

}).catch( (error)=>{
    console.log("Error" + error);
})