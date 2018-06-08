// STATIC VARIABLES
var timeline = document.getElementById('timeline-pos');
var radio = document.getElementById('radio');
var gas = document.getElementById('mustard');
var engine = document.getElementById('engine');
var radar = document.getElementById('radar');
var nuke = document.getElementById('nuke');

var radioCard = document.getElementById('radioCard');
var gasCard = document.getElementById('mustardCard');
var engineCard = document.getElementById('engineCard');
var radarCard = document.getElementById('radarCard');
var nukeCard = document.getElementById('nukeCard');

// DYNAMIC VARIABLES
var currentCard = timeline;

// SCROLL EVENTS
$(window).scroll(function() {
  // console.log("it scrolls");
	if ($(window).scrollTop() > $(timeline).offset().top) {
		$('a.sf-back-to-top').fadeIn('slow');
    // console.log("HERE");
	} else {
		$('a.sf-back-to-top').fadeOut('slow');
	}
	if ($(window).scrollTop() >= $(radio).offset().top) {
		currentCard = radioCard;
		// console.log("here 1");
		if ($(window).scrollTop() >= $(gas).offset().top) {
			currentCard = gasCard;
			// console.log("here 2");
			if ($(window).scrollTop() >= $(engine).offset().top) {
				currentCard = engineCard;
				// console.log("here 3");
				if ($(window).scrollTop() >= $(radar).offset().top) {
					currentCard = radarCard;
					// console.log("here 4");
					if ($(window).scrollTop() >= $(nuke).offset().top) {
						currentCard = nukeCard;
						// console.log("here 5");
					}
				}
			}
		}
	}
});

$('a.sf-back-to-top').click(function() {
	$('html, body').animate(
		{
			scrollTop: ($(currentCard).offset().top) + 0.1,
		},
		700
	);
	return false;
});
