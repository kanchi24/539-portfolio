

(function() {

	var quotes = $(".quotes");
	var quoteIndex = -1;

	function showNextQuote() {
		++quoteIndex;
		quotes.eq(quoteIndex % quotes.length)
		.fadeIn(2000)
		.delay(2000)
		.fadeOut(2000, showNextQuote);
	}

	showNextQuote();

})();

var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 


$('.carousel img').each(function() {
	var $src = $(this).attr('src');
	var $color = $(this).attr('data-color');
	$(this).parent().css({
		'background-image' : 'url(' + $src + ')',
		'background-color' : $color
	});
	$(this).remove();
});

$(window).on('resize', function (){
	$wHeight = $(window).height();
	$item.height($wHeight);
});

$('.carousel').carousel({
	interval: 6000,
	pause: "false"
});



$(function(){
	$('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

	$(window).resize(function(){
		$('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
	});
});




