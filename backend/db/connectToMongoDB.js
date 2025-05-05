import mongoose from 'mongoose';

// Make sure this connection function is called
const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://asunny583:Hekoa1844jVnvjOQ@cluster0.z7d8b.mongodb.net/chat-app-yt?retryWrites=true&w=majority&appName=Cluster0', {
            
        });
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};


export default connectToMongoDB;





