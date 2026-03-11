// app.js

// Main application logic

// Import necessary modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Movie Application!');
});

app.get('/movies', (req, res) => {
    // Logic to fetch movies
    res.send('List of Movies');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
