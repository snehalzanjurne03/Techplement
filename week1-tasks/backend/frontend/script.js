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

    
    $('#searchQuote').on('click', function() {
        const authorName = $('#authorName').val(); 
        if (!authorName) {
            alert('Please enter an author name');
            return; 
        }

        $.ajax({
            url: `http://localhost:3000/api/quotes?author=${encodeURIComponent(authorName)}`, 
            method: 'GET',
            success: function(data) {
                if (data.length > 0) {
                    
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
    $('#loading').show();
    $.ajax({
        url: 'http://localhost:3000/api/quotes/random',
        method: 'GET',
        success: function(data) {
            $('#loading').hide(); 
            $('#quote').text(data.quote);
            $('#author').text('- ' + data.author);
        },
        error: function() {
            $('#loading').hide(); 
            alert('Error retrieving quote. Please try again.');
        }
    });
});




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
        clearTimeout(debounceTimeout); 
        debounceTimeout = setTimeout(() => {
            const author = $(this).val();
            if (author) {
                $.ajax({
                    url: `http://localhost:3000/api/quotes?author=${author}`,
                    method: 'GET',
                    success: function(data) {
                        
                        $('#searchResults').empty(); 
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
                $('#searchResults').empty(); 
            }
        }, 300); 
    });
});
