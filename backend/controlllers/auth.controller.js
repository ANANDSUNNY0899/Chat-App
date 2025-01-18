// import User from '../models/user.model.js';

// export const signup =  async(req, res) => {
//     try {
//         const  {fullName,username,password,confirmPassword,gender }= req.body;

//         if(password !== confirmPassword) {
//             return res.status(400).json({error:"Password don't match"})
//         }

//         const user = await User.findOne({username});
//         if(user) {
//             return res.status(400).json({error:"Username already exists"})
//         }

//         // HASH PASSWORD HERE

//         //https://avatar-placeholder.iran.liara.run/


//         // const boyProfilePic = 'https://avatar.iran.liara.run/public/boy?username=${username}'
//         // const girlProfilePic = 'https://avatar.iran.liara.run/public/girl?username=${username}'

//         const boyProfilePic = 'https://avatar.iran.liara.run/public/boy?username=${username}'
//         const girlProfilePic = 'https://avatar.iran.liara.run/public/girl?username=${username}'


//         const newUser = new User({
//             fullName,
//             username,
//             password,
//             gender,
//             profilePic: gender === "male" ? boyProfilePic : girlProfilePic
//         })

//         await newUser.save();

//         res.status(201).json({
//             _id: newUser._id,
//             fullName: newUser.fullName,
//             username: newUser.username,
//             profilePic: newUser.profilePic
//         });
//     } catch (error) {
//         console.log("Error in singup controller", error.message);
//         res.status(500).json({error: "Internal Server Error" });
//     }

    
// };

// export const login = (req, res) => {
//     console.log("LoginUser");
// };

// export const logout = (req ,res) => {
//     console.log("logoutUser");
// };


import bcrypt from "bcryptjs";
import User from '../models/user.model.js';
// import generateTokenandSetCookie from "../utils/generateToken.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        console.log("Received signup data:", req.body);
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // Check if passwords match
        if (password !== confirmPassword) {
            console.log("Passwords don't match");
            return res.status(400).json({ error: "Passwords don't match" });
        }

        // Check if username already exists
        console.log("Checking if username already exists...");
        const existingUser = await User.findOne({ username });
        console.log("Existing user check:", existingUser);

        if (existingUser) {
            console.log("Username already exists");
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Hashed password:", hashedPassword);

        // Profile picture assignment
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === "male" ? boyProfilePic : girlProfilePic;
        console.log("Profile picture:", profilePic);

        // Create new user
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic
        });

        console.log("Saving new user to database...");
        await newUser.save();
        console.log("New user saved successfully");
        console.log("Signup Finished");

        // Generate JWT token
        //generateToken(newUser._id, res);
        // console.log("JWT token generated");

        // Respond with user details
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,

            
        });

        

    } catch (error) {
        console.error("Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal Server err" });
    }
};


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({ error: "Invalid username or password " });
        }

        generateToken(user._id, res);

        res.status(200)/json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.log("Error in login controlled", error.message);
        res.status(500).json({error: "Internal Server Error" });
        
    }
};

export const logout = (req ,res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controlled", error.message);
        res.status(500).json({error: "Internal Server Error" });
    }
};