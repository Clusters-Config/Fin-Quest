import { Apierror } from "../utils/Apierror.js";
import { login } from "../models/login.models.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";

const userlogin  = AsyncHandler( async(req,res)=>{
    const {email,password} = req.body;

    if ([email, password].some((exist) => exist.trim() === "")) {
        throw new Apierror(400, "All elements required");
    }

    const existuser = await login.findOne({email});

    
    if(existuser){
        throw new Apierror(403,"User already exist");
    }

    const LoginUser = await new login({
        email,
        password
    });

    await LoginUser.save();
    
    console.log(LoginUser.email+" Created successful");
    res.status(200).json(LoginUser);
});

export {userlogin};