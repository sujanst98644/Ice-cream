import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import dbConnect from "./config/dbconnect.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "https://ice-cream-api-red.vercel.app/", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// Debug middleware
app.use((req, res, next) => {
  // console.log('Incoming request:', {
  //   method: req.method,
  //   path: req.path,
  //   body: req.body,
  //   headers: req.headers
  // });
  next();
});
// Database Connection
dbConnect();

// Routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

// Fallback Route
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
