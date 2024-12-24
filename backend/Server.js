
//Importing moudles
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",  // Your React app's URL
    methods: ['GET', 'POST'],
    credentials: true

}));

//MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'auth_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
//for unknown purposes and also for just testing
// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password:'UAmFr1OZFOHzsKN',
//     database: 'auth_db',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1); // Exit process if DB connection fails
    } else {
        console.log('Connected to MySQL database');
    }
});

// Database connection error handler
db.on('error', (err) => {
    console.error('Database error:', err.message);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
    }
});

// Test database connection endpoint
app.get('/test-db', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database connection failed' });
        }
        res.json({ message: 'Database connection successful' });
    });
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {

    try {
        const { email, password } = req.body;

        // Validate inputs
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        //calling stored procedure RegisterUser
        db.query('CALL RegisterUser(?, ?)', [email, hashedPassword], (err, results) => {
            if (err) {
                if (err.sqlState === '45000') {
                    return res.status(400).json({ error: err.message });
                }
                return res.status(500).json({ error: 'Internal server error' });
            }

            const user = results[0][0];
            const token = jwt.sign(
                { userId: user.userId, email: user.email },
                process.env.JWT_SECRET || 'your-secret-key',
                { expiresIn: '24h' }
            );

            res.status(201).json({ message: 'User created successfully', token });
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        

        // Validate inputs
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        //calling stored procedure LoginUser
        db.query('CALL LoginUser(?)', [email], async (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' });
            }

            const user = results[0][0];
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const token = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.JWT_SECRET || 'your-secret-key',
                { expiresIn: '24h' }
            );

            res.json({ message: 'Login successful', token });
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Server listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
