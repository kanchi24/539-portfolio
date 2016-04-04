

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
$item.addClass('full-screen');

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

(function() {
  /**
   * Video element
   * @type {HTMLElement}
   */
   var video = document.getElementById("my-video");

  /**
   * Check if video can play, and play it
   */
   video.addEventListener( "canplay", function() {
   	video.play();
   });
})();

$(function(){
	$('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

	$(window).resize(function(){
		$('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
	});
});

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
    	$("#cartoonVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
    	$("#cartoonVideo").attr('src', url);
    });
});


