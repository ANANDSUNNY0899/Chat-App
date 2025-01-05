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

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
//const MONGODB_URI = process.env.MONGODB_URI;

// Middleware to parse JSON payloads

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);


// Connect to MongoDB
//connectToMongoDB(MONGODB_URI);

// Start the server
app.listen(PORT, () => {

    connectToMongoDB();
    const uri = ('mongodb+srv://asunny583:zkUm3FPe6xRJT47h@cluster0.eo4tj.mongodb.net/sun-db?retryWrites=true&w=majority&appName=Cluster0');
    console.log("URI:", uri);
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try a different port.`);
        process.exit(1);
    } else {
        console.error(err);
    }
});
