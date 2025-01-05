import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import User from './Models/userModel.js';
import routes from './Routes/api.routes.js';

// Load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173","https://car-rental-web-jx9p.vercel.app"],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use("/",routes);

// Connect to MongoDB with error handling
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas');
        
        // Log database name to verify correct connection
        const dbName = mongoose.connection.name;
        console.log(`Connected to database: ${dbName}`);
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
});

    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit if cannot connect to database
    });

// Handle MongoDB connection events
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


app.get('/', (req, res) => {
    res.send('Welcome to the Car Rental Backend!');
});

    app.get('/users', async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ 
                error: 'Internal server error',
                details: error.message 
            });
        }
    });


// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'ok',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Server listen

// Handle process termination
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1);
    }
});