const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files like index.html, script.js, etc.

// Define a route for the root URL
app.get('/quotes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Adjust the path as necessary
});

// Endpoint to fetch random quote
app.get('/quote', (req, res) => {
    res.redirect('https://api.quotable.io/random');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
