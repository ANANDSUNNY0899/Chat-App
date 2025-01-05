 import mongoose from 'mongoose';

 const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://asunny583:zkUm3FPe6xRJT47h@cluster0.eo4tj.mongodb.net/sun-db?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDb", error.message);
    }
    mongoose.connect('mongodb+srv://asunny583:zkUm3FPe6xRJT47h@cluster0.eo4tj.mongodb.net/sun-db?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000, // 10 seconds timeout
    });
    
 }


export default connectToMongoDB;





