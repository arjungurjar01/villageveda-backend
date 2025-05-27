import serverless from "serverless-http";
import app from '../src/index.js'
import connectDB from "../src/db/mongodb.js"; 

let isConnected = false;

const handler = async (req, res) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log("Connected to MongoDB (serverless)");
    } catch (err) {
      console.error("MongoDB connection failed:", err);
      return res.status(500).json({ message: "MongoDB connection failed" });
    }
  }

  return serverless(app)(req, res);
};

export default handler;
