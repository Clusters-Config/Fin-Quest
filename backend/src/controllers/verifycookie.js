import jwt from "jsonwebtoken";

const VerifyUser = (req, res, next) => {
    const accessToken = req.cookies?.accessToken;
    const refreshToken = req.cookies?.refreshToken;
    if (!accessToken) {
        console.log("No access token")
        if(refreshToken){
            const email = jwt.decode(refreshToken).email;
            const password = jwt.decode(refreshToken).password;
            const accessToken = jwt.sign(
                { email: email, password: password },
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
        res.status(202).json({valid:true ,email:decoded.email , password:decoded.password})
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

export default VerifyUser;
