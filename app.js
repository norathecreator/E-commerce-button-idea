/* Best with Chrome :/ */


$('.button-sivir').on('click', function(e) {
    $("#loader").attr("class", "loading");
    $("#loader-g").attr("class", "zindex");
    e.stopPropagation();
});

$(document).click(function() {
    $("#loader").attr("class", "");
    $("#loader-g").attr("class", "");
});

$('.button-singed').on('click', function(e) {
    $("#tick").attr("class", "stroke-tick");
    e.stopPropagation();
});

$(document).click(function() {
    $("#tick").attr("class", "");
});