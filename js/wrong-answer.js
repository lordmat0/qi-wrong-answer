$(function() {

    $('#btn-generate').click(function() {
        var wrongAnswerText = $('#ta-wrong-message').val();

        if (wrongAnswerText) {
            $('#form-enter-message').fadeOut(500, function() {
                $('#form-url').fadeIn(500, function() {      
                    var locArray = window.location.href.split('/');
                    var buildURL = '';

                    // -1 so we take off the index.html
                    for(var i = 0; i < locArray.length -1;i++){
                       buildURL += locArray[i] + '/';
                    }

                   $('#inp-wrong-message').val(buildURL + 'q.html?q=' + encodeURIComponent(wrongAnswerText));
                })
            });

        }

    });


    $('#btn-reset').click(function() {
        var $textarea = $('#ta-wrong-message').val('');
        $('#form-url').fadeOut(500, function() {
            $('#form-enter-message').fadeIn(500, function() {
                $textarea.focus();
            })
        });

    });

    $('#btn-test-link').click(function(){
       window.open($('#inp-wrong-message').val()); 
        
    });
});