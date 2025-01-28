// Import required packages using ES module syntax
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Initialize the express application
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());  // Parse JSON bodies in requests

// Temporary in-memory storage for users (In a real-world scenario, this would be a database)
let users = [];

// Signup route
app.post('/signup', (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Simulate saving the new user (in a real app, save to DB)
  users.push({ email, username, password });
  console.log('New user registered:', { email, username, password });

  res.status(201).json({ message: 'User signed up successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and credentials are correct
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Simulate successful login
  console.log('User logged in:', { username, password });

  res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
