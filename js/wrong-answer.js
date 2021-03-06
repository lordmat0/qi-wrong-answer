$(function() {

    $('#btn-generate').click(function() {
        var text = $('#ta-wrong-message').val();
        if (text) {
            text = text.replace(' ','%20')
            var baseURL = location.href.substring(0, location.href.lastIndexOf("/") + 1);
            var page = 'q.html?q=' + text;
            $('#q-url').val(baseURL + page);


            $('#form-enter-message').fadeOut(500, function() {
                $('#form-url').fadeIn(500);
            });
        }
    });

    $('#btn-reset').click(function() {
        var $textarea = $('#ta-wrong-message').val('');
        $('#form-url').fadeOut(500, function() {
            $('#form-enter-message').fadeIn(500, function() {
                $textarea.focus();
            });
        });
    });

    $('#btn-test').click(function() {
        window.open($('#q-url').val(), '_blank');
    });
});