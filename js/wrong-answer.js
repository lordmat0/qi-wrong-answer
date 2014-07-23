$(function() {

    $('#btn-generate').click(function() {
        var text = $('#ta-wrong-message').val();

        if (text) {
            $('#form-enter-message').fadeOut(500, function() {


                $('#form-url').fadeIn(500, function() {

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

});