var timeline = document.getElementById('timeline-pos');

$(window).scroll(function() {
    if ( $(window).scrollTop() > $(timeline).offset().top ) {
        $('a.sf-back-to-top').fadeIn('slow');
    } else {
        $('a.sf-back-to-top').fadeOut('slow');
    }
});

$('a.sf-back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: $(timeline).offset().top
    }, 700);
    return false;
});
