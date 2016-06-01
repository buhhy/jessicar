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
    scrollTop: $(".footer-contact").offset().top
  }, '2000', 'swing')
});

$("#scrollTop").click(function(event){
  event.preventDefault();
  body.stop().animate({
    scrollTop: 0
  }, '2000', 'swing')
});

setUpProjectNav($("#stickyNavContainer"), $("#scrollTop"));
