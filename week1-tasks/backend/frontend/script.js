$(document).ready(function() {
    // Get a random quote
    $('#getQuote').on('click', function() {
        $.ajax({
            url: 'http://localhost:3000/api/quotes/random', // API endpoint
            method: 'GET',
            success: function(data) {
                $('#quote').text(data.quote); // Display quote
                $('#author').text('- ' + data.author); // Display author
            },
            error: function() {
                alert('Error retrieving quote. Please try again.');
            }
        });
    });

    // Search for quotes by author
    $('#searchQuote').on('click', function() {
        const authorName = $('#authorName').val(); // Get the author name from input
        if (!authorName) {
            alert('Please enter an author name');
            return; // Exit if input is empty
        }

        $.ajax({
            url: `http://localhost:3000/api/quotes?author=${encodeURIComponent(authorName)}`, // API endpoint with query parameter
            method: 'GET',
            success: function(data) {
                if (data.length > 0) {
                    // Display the first matching quote
                    $('#quote').text(data[0].quote);
                    $('#author').text('- ' + data[0].author);
                } else {
                    $('#quote').text('No quotes found for this author.');
                    $('#author').text('');
                }
            },
            error: function() {
                alert('Error retrieving quotes. Please try again.');
            }
        });
    });
});



//
$('#getQuote').on('click', function() {
    $('#loading').show(); // Show loading
    $.ajax({
        url: 'http://localhost:3000/api/quotes/random',
        method: 'GET',
        success: function(data) {
            $('#loading').hide(); // Hide loading
            $('#quote').text(data.quote);
            $('#author').text('- ' + data.author);
        },
        error: function() {
            $('#loading').hide(); // Hide loading
            alert('Error retrieving quote. Please try again.');
        }
    });
});



//
let debounceTimeout;

$(document).ready(function() {
    $('#getQuote').on('click', function() {
        $.ajax({
            url: 'http://localhost:3000/api/quotes/random',
            method: 'GET',
            success: function(data) {
                $('#quote').text(data.quote);
                $('#author').text('- ' + data.author);
            },
            error: function() {
                alert('Error retrieving quote. Please try again.');
            }
        });
    });

    $('#searchInput').on('input', function() {
        clearTimeout(debounceTimeout); // Clear the previous timeout
        debounceTimeout = setTimeout(() => {
            const author = $(this).val(); // Get input value
            if (author) {
                $.ajax({
                    url: `http://localhost:3000/api/quotes?author=${author}`,
                    method: 'GET',
                    success: function(data) {
                        // Handle displaying search results
                        // For example, show results below the search box
                        $('#searchResults').empty(); // Clear previous results
                        if (data.length > 0) {
                            data.forEach(quote => {
                                $('#searchResults').append(`<div>${quote.quote} - ${quote.author}</div>`);
                            });
                        } else {
                            $('#searchResults').append('<div>No results found</div>');
                        }
                    },
                    error: function() {
                        alert('Error retrieving quotes. Please try again.');
                    }
                });
            } else {
                $('#searchResults').empty(); // Clear results if input is empty
            }
        }, 300); // Adjust the delay as needed
    });
});
