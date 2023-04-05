jQuery.noConflict();
jQuery(document).ready(function () {

	'use strict';





	jQuery(".header__burger").click(function () {
		jQuery(this).toggleClass('active');
		jQuery("body").toggleClass('scroll-lock');
		jQuery(".header__menu").slideToggle(300, function () {
			if (jQuery(this).css('display') === 'none') {
				jQuery(this).removeAttr('style');
			}
		})
	})



});






// $(document).ready(function () {
// 	$(".owl-carousel").owlCarousel({
let carousel1 = jQuery('.owl-carousel');
carousel1.owlCarousel({
	items: 3,
	autoplay: true,
	autoplaySpeed: 2000,
	autoplayTimeout: 6000,
	autoplayHoverPause: true,
	// smartSpeed: 1000,
	dotsSpeed: 1000,
	// количество точек соответствует количеству слайдов
	dotsEach: true,
	// средний слайд будет всегда по центру
	// center: true,
	loop: true,
	nav: false,
	navText: [''],
	dots: true,
	mouseDrag: true,
	margin: 20,
	stagePadding: 50,
	autoWidth: false,
	// responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			// dots: true,
			// nav: false,
			// mouseDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		479: {
			items: 1,
			// dots: true,
			// mouseDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		767: {
			items: 2,
			// dots: true,
			// mouseDrag: true,
			// autoplay: true,
			// smartSpeed: 1000
		},
		991: {
			items: 3,
			// dots: true,
			// mouseDrag: true,
			// autoplay: false,

		},
		1099: {
			items: 3,
			// dots: true,
			// mouseDrag: true
		}
	}
});


// 	});
// });











