
var body = $("body, html");

$("#stickyProjectsLink").click(function(event){
	scrollProjects(event);
})

$("#splashProjectsLink").click(function(event){
	scrollProjects(event);
})

$("#stickyName").click(function(event){
	event.preventDefault();
	body.stop().animate({
		scrollTop: 0
	}, '1000', 'swing')
})

$(window).scroll(function() {
	if (window.scrollY >= $("#splashProjectsLink").offset().top) {
		console.log("hello");
		$("#stickyNavContainer").show("slow");
	} else {
		$("#stickyNavContainer").hide("slow");
	}
})

function scrollProjects(event) {
	event.preventDefault();
	body.stop().animate({
		scrollTop: $("#featuredProjects").offset().top-100
	}, '1000', 'swing')
}