
var wow = new WOW({
	boxClass:     'wow',      // animated element css class (default is wow)
	animateClass: 'animated', // animation css class (default is animated)
	offset:       0,          // distance to the element when triggering the animation (default is 0)
	mobile:       true,       // trigger animations on mobile devices (default is true)
	live:         true,       // act on asynchronously loaded content (default is true)
	callback:     function(box) {
	// the callback is fired every time an animation is started
	// the argument that is passed in is the DOM node being animated
	},
	scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


jQuery(document).ready(function(){
	//scroll Top
		$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>60){
			$(".header").addClass('sticky');
		}else if($(".header").hasClass('sticky')){
			$(".header").removeClass('sticky');
		}
		if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});

	//Counter up
	$('.counter').counterUp({
	    delay: 10,
	    time: 3000
	});


	//carouFredSel-Slider
	"use strict";
	$('.my_work_carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		prev:'#prev',
		next:'#next',
		scroll:
			{
				items:1,
				duration:500,
				pauseOnHover:true,
			},
		auto:true,
		items:
			{
				visible:
					{
						min:1,
						max:1
					},
				height:"variable"
			},
	});
});

$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('.mobile-menu nav').toggleClass('active');
	});
});
