var body = $("body, html");

$("#quickmatchChevron").click(function(event){
  event.preventDefault();
  body.stop().animate({
    scrollTop: $("section").first().offset().top
  }, '2000', 'swing')
});

$("#contactLink").click(function(event){
  event.preventDefault();
  body.stop().animate({
    scrollTop: $("#contactInfo").offset().top-100
  }, '2000', 'swing')
});

$("#scrollTop").click(function(event){
  event.preventDefault();
  body.stop().animate({
    scrollTop: 0
  }, '2000', 'swing')
});

$(function() {
	var previousScroll = 0;
	
	$(window).scroll(function(){
		var currentScroll = $(this).scrollTop();
		if (currentScroll == 0) {
			$("#scrollTop").addClass("disabled");
		} else if (currentScroll > previousScroll) {
			$("#stickyNavContainer").fadeOut();
			$("#scrollTop").removeClass("disabled");
		} else {
			$("#stickyNavContainer").fadeIn();
			$("#scrollTop").removeClass("disabled");
		}
		previousScroll = currentScroll;
	});
});