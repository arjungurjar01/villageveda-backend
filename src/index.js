import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors" ;
import reviewRouter from './routes/review.route.js'
import  dotenv  from "dotenv";
import connectDB from "./db/mongodb.js";
import bodyParser from "body-parser";




dotenv.config({
  path: './.env'
}) 


const app = express();




app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));




//route end points
app.use('/api/v1/reviews',reviewRouter) ; 





app.get("/", (req, res) => {
  res.send("server is running!");
});

app.get("/api/health", (req, res) => { 
    res.status(200).json({ message: "Backend is up and running!" });
  });


// app.listen(process.env.PORT,()=>{ 
//     console.log(`Server is running on port http://localhost:${port}`);  
// })   







export default app;