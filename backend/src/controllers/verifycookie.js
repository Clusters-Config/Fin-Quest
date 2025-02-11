import jwt from "jsonwebtoken";

const VerifyUser = (req, res, next) => {
    const accessToken = req.cookies?.accessToken;
    const refreshToken = req.cookies?.refreshToken;
    if (!accessToken) {
        if(refreshToken){
            const email = jwt.decode(refreshToken).email;
            const password = jwt.decode(refreshToken).password;
            const username = jwt.decode(refreshToken).username;
            const firstname = jwt.decode(refreshToken).firstname;
            const lastname = jwt.decode(refreshToken).lastname;
            const dob = jwt.decode(refreshToken).dob;
            const phone = jwt.decode(refreshToken).phone;
            const hobbies = jwt.decode(refreshToken).hobbies;
            const accessToken = jwt.sign(
                { firstname:firstname, lastname:lastname, dob:dob,phone:phone,username:username ,email: email, password: password ,hobbies:hobbies},
                "json-access-token",
                {
                  expiresIn: "3m",
                });

                res.cookie("accessToken", accessToken, {
                    maxAge: 180000,
                    httpOnly: false,
                    secure: true,
                    sameSite: "strict",
                  });
                console.log("Created access token with refresh token")
                res.status(202).json({messgae:"Created access token with refresh token"})
        }
        else{
            res.status(401).json({ error: "Access and Refresh token missing please login" });
        }
         
    }

    try {
        const decoded = jwt.verify(accessToken, "json-access-token");
        res.status(202).json({valid:true ,email:decoded.email , password:decoded.password, username:decoded.username , firstname:decoded.firstname,lastname:decoded.lastname, dob:decoded.dob, phone:decoded.phone ,hobbies:decoded.hobbies})
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

export default VerifyUser;
