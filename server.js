// Imports
import express from 'express';
import dotenv from 'dotenv';
import { logReq, globalErr } from './Middleware/middleware.js';
import connectDB from './db/conn.js';
import birdRoutes from './Routes/birdRoutes.js'

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();

// (Request) Middleware
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/bird", birdRoutes )

// Global Error Handling Middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
});