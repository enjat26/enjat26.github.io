(function ($) {
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();


	/* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */

	/*----------------------------------------------------*/
	/* Start Magnific Pop Up
	/*----------------------------------------------------*/
	if ($('.img-gal1').length > 0) {
		$('.img-gal1').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
	if ($('.img-gal2').length > 0) {
		$('.img-gal2').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
	if ($('.img-gal3').length > 0) {
		$('.img-gal3').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
	if ($('.img-gal4').length > 0) {
		$('.img-gal4').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}

	if ($('.img-gal5').length > 0) {
		$('.img-gal5').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}

	if ($('.img-gal6').length > 0) {
		$('.img-gal6').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
	/*----------------------------------------------------*/
	/*  End  Magnific Pop Up
	/*----------------------------------------------------*/

	/*----------------------------------------------------*/
	/*  Testimonials Slider
    /*----------------------------------------------------*/
	function testimonials_slider() {
		if ($('.testi_slider').length) {
			$('.testi_slider').owlCarousel({
				loop: true,
				margin: 30,
				items: 2,
				autoplay: true,
				smartSpeed: 2500,
				dots: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1
					},
					991: {
						items: 2
					}
				}
			});
		}
	}
	testimonials_slider();
})(jQuery);
