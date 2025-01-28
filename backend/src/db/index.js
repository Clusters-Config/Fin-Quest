import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
 path:".env"
}
)

const DbConnect = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO||"mongodb+srv://badrinarayananramkumar:jlcWpp6yUK7sDLmG@finquest.pp84x.mongodb.net/?retryWrites=true&w=majority&appName=FinQuest")
        return connection
    }
    catch(err)
    {
        console.log("Error" + err);
        process.exit(1);
    }
}

export default DbConnect;