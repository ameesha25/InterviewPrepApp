require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const app = express();
const authRoutes = require('./routes/authRoutes.js'); 
const sessionRoutes = require('./routes/sessionRoutes.js'); 
const questionRoutes = require('./routes/questionRoutes.js'); 
const {protect} = require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplanation} = require("./controllers/aiController");

// Middleware to handle CORS

// ✅ Correct and full CORS setup
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// app.use( 
//     cors({
//         // origin: "http://localhost:5173",
//         origin: process.env.FRONTEND_URL || "http://localhost:5173",

//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type", "Authorization"],
//     })
// );

// Handle preflight (OPTIONS) requests globally
// app.options("/*", cors());

//Database Connection
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/sessions', sessionRoutes); 
app.use('/api/questions', questionRoutes);
app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);
// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));
// Start Server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`Server running at Port ${PORT}`))


