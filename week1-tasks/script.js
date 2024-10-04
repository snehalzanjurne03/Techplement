// Fetch Random Quote
function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote-text').innerText = `"${data.content}"`;
            document.getElementById('quote-author').innerText = `- ${data.author}`;
        });
}

// Search Quote by Author
function searchByAuthor(author) {
    fetch(`https://api.quotable.io/quotes?author=${author}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const quote = data.results[0];
                document.getElementById('quote-text').innerText = `"${quote.content}"`;
                document.getElementById('quote-author').innerText = `- ${quote.author}`;
            } else {
                document.getElementById('quote-text').innerText = "No quotes found for this author.";
                document.getElementById('quote-author').innerText = "";
            }
        });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', fetchRandomQuote);
document.getElementById('search-btn').addEventListener('click', function() {
    const author = document.getElementById('author-search').value;
    searchByAuthor(author);
});
