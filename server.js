// Imports
import express from 'express';
import dotenv from 'dotenv';


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// (Request) Middleware
app.use(express.json());

// Routes


// Global Error Handling Middleware


// Listener
app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`)
});