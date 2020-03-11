
$(document).ready(function() {
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var win = $(window).scrollTop();
		if (win >= pos.top) {
			s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});
});