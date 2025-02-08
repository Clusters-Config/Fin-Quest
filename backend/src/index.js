import { app } from "./app.js";
import DbConnect from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:"/Fin-Quest/backend/.env"
});

const hostname = "localhost";

DbConnect();

app.listen( process.env.PORT || 5000, () =>{      
    console.log("Connected DB");   
    console.log(`Server running at http://${hostname}:${process.env.PORT}`);
});


