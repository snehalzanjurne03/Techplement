// backend/server.js
const express = require('express');
const fs = require('fs');
const path = require('path'); // Import path module
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('frontend'));

// Serve index.html for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html')); // Serve the index.html file
});

// Load quotes data
const quotes = JSON.parse(fs.readFileSync('quotes.json'));

// API to get a random quote
app.get('/api/quotes/random', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

// API to search for quotes by author
app.get('/api/quotes', (req, res) => {
    const author = req.query.author;
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
    res.json(filteredQuotes);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
