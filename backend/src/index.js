import express from "express";

const app = express();
import DbConnect from "./db/index.js";

DbConnect().then(() =>{
    app.listen(process.env.PORT || 3008 , () =>{
        console.log("Connected DB");

    } )

}).catch( (error)=>{
    console.log("Error" + error);
})