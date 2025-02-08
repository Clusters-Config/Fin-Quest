import jwt from "jsonwebtoken";

const VerifyUser = (req, res, next) => {
    const accessToken = req.cookies?.accessToken;

    if (!accessToken) {
        return res.status(401).json({ error: "Access token missing" });
    }

    try {
        const decoded = jwt.verify(accessToken, "json-access-token");
        res.json({valid:true ,email:decoded.email , password:decoded.password})
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

export default VerifyUser;
