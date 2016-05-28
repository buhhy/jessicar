function setUpProjectNav($navContainer, $scrollTopBtn) {
  $(function() {
    var previousScroll = 0;
    
    $(window).scroll(function(){
      var currentScroll = $(this).scrollTop();
      if (currentScroll == 0) {
        $scrollTopBtn.addClass("disabled");
      } else if (currentScroll > previousScroll) {
        $navContainer.stop().fadeOut();
        $scrollTopBtn.removeClass("disabled");
      } else {
        $navContainer.stop().fadeIn();
        $scrollTopBtn.removeClass("disabled");
      }
      previousScroll = currentScroll;
    });
  });
}
