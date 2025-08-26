import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.MONGODB_URL;
const client = new MongoClient(URL);

let dbConnection;

export async function connectToDatabase() {
    if (dbConnection) return dbConnection;
    try {
        await client.connect();
        console.log("Database connected");
        dbConnection = client.db();
        return dbConnection;
    } catch (error) {
        console.log('Failed to connect to database',error);
    }
}

