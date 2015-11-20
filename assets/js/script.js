$(document).ready(function(){

    $('#top .splash').fitText(3);
});

function showVideo(){

    $('#top .splash').addClass('hidden');
    $('#top .video').removeClass('hidden');

    $('#top .video #ytplayer')[0].src += "&autoplay=1";

}
