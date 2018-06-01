var timeline = document.getElementById('timeline-pos');
var timelinePos = 0;

function getPosition(element) {
    var xPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        element = element.offsetParent;
    }

    return xPosition;
}

$(window).scroll(function() {
    timelinePos = getPosition(timeline);
    if ( $(window).scrollTop() > timelinePos ) {
        $('a.sf-back-to-top').fadeIn('slow');
    } else {
        $('a.sf-back-to-top').fadeOut('slow');
    }
});

$('a.sf-back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: timelinePos
    }, 700);
    return false;
});
