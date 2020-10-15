$(document).ready(function() {

	$('.single-item').slick();

  ///$('.frequently-slider').slick();

	$('.projects').slick({
  		infinite: true,
  		slidesToShow: 6,
  		speed: 300,
  		autoplay: true,
  		slidesToScroll: 1
	});


});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#header").addClass("darkHeader");
    } else {
        $("#header").removeClass("darkHeader");
    }
});