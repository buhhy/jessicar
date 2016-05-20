
var body = $("body, html");

$("#stickyProjectsLink").click(function(event){
  scrollProjects(event);
});

$("#splashProjectsLink").click(function(event){
  scrollProjects(event);
});

$("#contactDrawerLink").click(function(event){
  openContactContainer(event);
});

$("#projectsLink").click(function(event){
  body.stop().animate({
    scrollTop: 0
  }, '1000', 'swing');
  openContactContainer(event);
});

$("#stickyName").click(function(event){
  event.preventDefault();
  body.stop().animate({
    scrollTop: 0
  }, '1000', 'swing')
});

function scrollProjects(event) {
  event.preventDefault();
  body.stop().animate({
    scrollTop: $("#featuredProjects").offset().top-100
  }, '2000', 'swing')
}

function openContactContainer(event) {
  event.preventDefault();
  $("#splashContainer").toggleClass("slide");
  $("#contactOptions").toggleClass("flex");
  $("#contactContainer").toggleClass("show");
}

setUpStickyHeader(function () {
  return $("#splashProjectsLink").offset().top;
});
