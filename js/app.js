$(function() {
    var text = getParameterByName('q');
    text = text.length ? text : '';

    if (text === '') {
        $('#message').text('Usage: The URL should have at the end ?q=your text');
    } else {
        $('#message').text(text.toUpperCase());

        startSound();
        startAnimation();
    }
});

function startSound() {
    // Play sound
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sound/klaxon.ogg');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()
    $.get();
    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);


}

function startAnimation() {
    var blink = function() {
        $('#message').hide();
        var i = setInterval(function() {
            $('#message').show();
            clearInterval(i);
        }, 500);
    }
    blink();
    setInterval(blink, 1000);
}


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location);
    if (results == null) {
        return "";
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }
}
