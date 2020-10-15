
require([
	'jquery'
	], function($){
		`use strict`;

		$(".search-btn").click(function(){
				// alert("hii");
				$('.user-list').hide();
				$('.search-input').fadeToggle();
				event.stopPropagation();
				//$('body').fadeOut();
			});
		$(".show-userlist").click(function(){
				 //alert("hii");
				 $('.search-input').hide();
				 $('.minicart-wrapper').removeClass('active');
	  			 $('.minicart-wrapper > a.action').removeClass('active');				 
				 $('.minicart-wrapper > .ui-dialog').hide();
				$('.user-list').fadeToggle();
				event.stopPropagation();
				
			});


			$('body').click(function() {
	  			 $('.search-input').hide();
	  			 $('.minicart-wrapper').removeClass('active');
	  			 $('.minicart-wrapper > a.action').removeClass('active');				 
				 $('.minicart-wrapper > .ui-dialog').hide();
	  			 $('.user-list').hide();
			});

			 $('.accordeon-title').on('click', function(){
    $('.accordeon-title').removeClass('active');
    $(this).addClass('active');
    $('.accordeon-title').next().slideUp();
    $(this).next().slideDown();
   });

			 $('.featuredulli > li > a').on('click', function() {

    $('.tab-content').css('opacity','0');
  setTimeout(function(){
  $('.featuredulli').parent().parent().find('.sliderfeatured').slick('setPosition'); $('.tab-content').css('opacity','1'); }, 500);
  $('.tab-content').css({height:'auto'});
  var tabheight = $('.tab-content').height();
  $('.tab-content').css({height:tabheight});
});

			 var tabheight = $('.tab-content').height();

$('.tab-content').css({height:tabheight});

$(window).on('resize', function() {
  $('.tab-content').css({height:'auto'});
  var tabheight = $('.tab-content').height();
  $('.tab-content').css({height:tabheight});
});

if($('.scrolling').length) {
$(window).scroll(function(){
  var x = $(this).scrollTop();

  var y = $('.scrolling').offset().top;

  var z = $('.blogsection').offset().top;

  if(x > y &&  x < z){
            $('.background').addClass('fixedclass');
        }
        else{
            $('.background').removeClass('fixedclass');
        }
  });

}

 $('.luckydualslider').animate({opacity:'1'},500);

  $('.add').click(function () {
      $(this).prev().val(+$(this).prev().val() + 1);
  });
  $('.sub').click(function () {
      if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
  });
 
   $.fn.equalHeights = function() {
     var maxHeight = 0,
     $this = $(this);
     $this.each( function() {
       var height = $(this).innerHeight();
       if ( height > maxHeight ) { maxHeight = height; }
     });
     return $this.css('height', maxHeight);
   };
   // auto-initialize plugin
   $('[data-equal]').each(function(){
     var $this = $(this),
     target = $this.data('equal');
     $this.find(target).equalHeights();
   });
   if (window.innerWidth > 1365) {
   $('.luckydualslider .dualslidebox').equalHeights();
   $(window).resize(function() {
     $('.luckydualslider .dualslidebox').height('auto');
     $('.luckydualslider .dualslidebox').equalHeights();
   }); 
 }


   if($('.filter-product').length){
    var bottom = $('.filter-product').offset().top;
    var footer= $('.remove-sticky').offset().top;
    $(window).scroll(function(){    
        if($(this).scrollTop() > bottom &&  $(this).scrollTop() < footer){
            $('.sticky-filter').addClass('fixed-filter');
        }
        else{
            $('.sticky-filter').removeClass('fixed-filter');
        }

        

        
    });

  }




    
    
	});

require([
	'jquery',
	'slick'
	], function($){
		`use strict`;

		$('.imagesliderinner').slick({
  dots: false,
  infinite: true,
  arrows:true,
  prevArrow: '.dualleft',
  nextArrow: '.dualright',
  speed: 300,
  slidesToShow: 1,
  autoplay: false,
  asNavFor: '.contentsliderinner'
});
	$('.contentsliderinner').slick({
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: false,
  asNavFor: '.imagesliderinner'
});

	  $('.sliderfirst').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    prevArrow:'<div class="luckyprev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:'<div class="luckynext"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ]
  });

    $('.sliderfeatured').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    prevArrow: '<div class="featuredprev luckyprev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="featurednext luckynext"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ]
  });

     $('.socialimpact-silder').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    prevArrow:'<div class="luckyprev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow:'<div class="luckynext"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
   ]
  });

      $('.product-right-silder').slick({
    dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      arrows:false,
      cssEase: 'linear'
  });
   $('.slider-thumbnail').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.product-right-silder',
      dots: false,
    focusOnSelect: true,
    arrows:false
  });
/*left silder section start here */
  /*product right silder script  start here */
   $('.product-left-silder').slick({
    dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      arrows:false,
      cssEase: 'linear'
  });
   $('.slider-left-thumbnail').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.product-left-silder',
      dots: false,
    focusOnSelect: true,
    arrows:false
  });



	});

require([
	'jquery',
	'wow'
	], function($){
		`use strict`;

new WOW().init();

	});



		



