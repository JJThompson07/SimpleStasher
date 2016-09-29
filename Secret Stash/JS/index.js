$(document).ready(function(){

	$('.hide').hide();

	$('.trigger').click(function(){
		$('.hide').slideToggle();
	});
});

// center slide --------------------------------------------------------------------------

'use strict';

$(function() {

    //settings for slider
    var width = 225;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider2');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-top': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-top', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseclick', pauseSlider)
        .on('mouseclick', startSlider);

    startSlider();


});

// left slide -----------------------------------------------------------------------------

'use strict';

$(function() {

    //settings for slider
    var width = 225;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider1');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseclick', pauseSlider)
        .on('mouseclick', startSlider);

    startSlider();


});

// right slide -----------------------------------------------------------------------------

'use strict';

$(function() {

    //settings for slider
    var width = 225;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider3');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseclick', pauseSlider)
        .on('mouseclick', startSlider);

    startSlider();


});

// bottom slide ---------------------------------------------------------------------------

 $(function(){
    // set variable for the slideshow
    var slides = $('.flicks>li');
    var slideCount = 0;
    var totalSlides = slides.length;
    var slideCache = [];

    (function preloader(){
        // iffy - runs automatically when the page loads up and the jquery method fires 
        if(slideCount < totalSlides){
            // load Images
            slideCache[slideCount] = new Image();
            slideCache[slideCount].src = slides.eq(slideCount).find('img').attr('src');
            slideCache[slideCount].onload = function(){
                slideCount++;
                preloader();
            }

        } else {
            // run the slideshow
            slideCount = 0;
            SlideShow();
        }
    }());

    function SlideShow(){
        // code goes here
        slides.eq(slideCount).fadeIn(500).delay(2000).fadeOut(500, function(){
            slideCount < totalSlides - 1? slideCount ++ : slideCount = 0;
            SlideShow();
        });
    }
 });

 // media screen -----------------------------------------------------------------------

$(document).ready(function(){
    $('#media-choice').hide();

if ($(window).width() < 1150) {
    $('#media-choice').show();
    $('#choice').hide();
    $('.under').hide();
}
else {
    $('#media-choice').hide();
    $('#choice').show();
    $('.under').show();
};

});

 $(window).resize(function() {
  if ($(window).width() < 1150) {
    console.log('Less than 1150');
    $('#media-choice').show();
    $('#choice').hide();
    $('.under').hide();

  }
 else {
    console.log('More than 1150');
    $('#media-choice').hide();
    $('#choice').show();
    $('.under').show();

 };
});

