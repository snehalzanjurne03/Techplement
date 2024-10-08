$(document).ready(function() {
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
});
