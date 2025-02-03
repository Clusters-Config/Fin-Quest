import express from "express";
import { router } from "./Route/route.js";
import dotenv from "dotenv";

dotenv.config({
    path:"/Fin-Quest/backend/.env"
})



app.use("/createuser", router);

app.get("/", (req, res) => {
    res.send("Welcome to the API");
});


