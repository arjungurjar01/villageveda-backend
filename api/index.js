import serverless from "serverless-http";
import app from '../src/index.js'
import connectDB from "../src/db/mongodb.js"; 

let isConnected = false;

const setup = async () => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log("Connected to MongoDB (serverless)");
    } catch (err) {
      console.error("MongoDB connection failed:", err);
      // Don't throw yet — allow serverless handler to still exist
    }
  }
};

await setup(); // Ensure DB is connected before handling requests

const handler = serverless(app);

export default handler;