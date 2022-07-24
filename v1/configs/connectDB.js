import url from 'url';
import mongoose from 'mongoose';
const __filename = url.fileURLToPath(import.meta.url);
import logEvents from '../helpers/logEvents.js';
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        })
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.log("Connected to MongoDB failed!");
        logEvents(error.message, __filename);
    }
}
process.on('SIGINT', async () => {
    console.log("Killed server");
    await mongoose.connection.close();
    process.exit(0);
});
export default connectDB;