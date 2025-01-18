// import jwt from'jsonwebtoken';
// import User from '../models/user.model.js';


// const secret = ('NJYOCyMrTCHctSr+mk+o7chG2GFKZos3mkmdRi0ht30=');
//  const protectRoute = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwt;
//         if(!token) {
//             return res.status(401).json({error: "Unauthorized - No Token Provided "});
//         }

//         const decoded = jwt.verify(token, secret);

// if(!decoded) {
//     return res.status(401).json({ error: "Unautorized - Invalid Token"});
// }

// const user = await User.findById(decoded.userId).select("-password");

// if(!user) {
//     return res.status(404).json({ error: "user not found"});
// }

// req.user = decoded;

// next();

        
//     } catch (error) {
//         console.log("Error in protectRoute middlware: ", error.message)
//         res.status(500).json({error: "Internal server error "});
//     }
//  }

// export default protectRoute;







import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

const secret = ('NJYOCyMrTCHctSr+mk+o7chG2GFKZos3mkmdRi0ht30=');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, secret);
        } catch (err) {
            if (err.name === "TokenExpiredError") {
                return res.status(401).json({ error: "Unauthorized - Token Expired" });
            }
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default protectRoute;


