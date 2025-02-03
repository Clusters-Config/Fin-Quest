import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
 path:"./.env"
}
)

const DbConnect = async () => {
    try{
        const Dbconnection = await mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASS}@cluster0.pcacg.mongodb.net/${process.env.DB_NAME}`);
    }
    catch(err)
    {
        console.log("Error" + err);
        process.exit(1);
    }
}

export default DbConnect;