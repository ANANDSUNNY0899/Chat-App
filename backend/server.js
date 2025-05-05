// import express from "express";
// import dotenv from "dotenv";

// import authRoutes from "./routes/auth.routes.js";
// import connectToMongoDB from "./db/connectToMongoDB.js";

// const app = express();

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// app.use("/api/auth",authRoutes);

// // app.get("/",(req,res) => {
// //     res.send("Helllow World! ");
// // });



// app.listen(PORT , () => {
//     connectToMongoDB();
//     const uri = ('mongodb+srv://asunny583:zkUm3FPe6xRJT47h@cluster0.eo4tj.mongodb.net/sun-db?retryWrites=true&w=majority&appName=Cluster0');
//     console.log("URI:", uri);
//     console.log(`Server Running on port ${PORT}`)
// });


import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import protectRoute from "./middleware/protectRoute.js";
const app = express();
const PORT = process.env.PORT || 5001;
dotenv.config();

// Middleware to parse JSON payloads
app.use(express.json());
app.use(cookieParser());

// Enable CORS
app.use(
    cors({
        origin: "http://localhost:3000", // ✅ Your frontend URL
        credentials: true, // ✅ Allow sending cookies
    })
);

// Routes
app.use("/api/auth", authRoutes); // to parse the incoming request with JSON playloads (from req.body)
app.use("/api/messages", messageRoutes);
app.use("/api/users", protectRoute, userRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try a different port.`);
        process.exit(1);
    } else {
        console.error(err);
    }
});
