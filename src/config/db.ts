import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = async () => {
    try {
        const connectionString = process.env.MONGODB_URI;

        if (!connectionString) {
            throw new Error("MongoDB URI is not defined");
        }

        await mongoose.connect(connectionString);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(1);
    }
};

export default databaseConnection;
