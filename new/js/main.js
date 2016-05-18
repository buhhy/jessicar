
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

function setUpStickyHeader() {
  var $navContainer = $("#stickyNavContainer");
  var hiddenClass = "hidden";

  $navContainer.css("opacity", 0.0);

  $(window).scroll(function () {
    if (window.scrollY >= $("#splashProjectsLink").offset().top) {
      $navContainer.removeClass(hiddenClass).stop().animate({
        opacity: 1.0
      }, 200);
    } else {
      $navContainer.stop().animate({opacity: 0}, 200, function () {
        $navContainer.addClass(hiddenClass);
      });
    }
  });
}

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

setUpStickyHeader();
