function setUpStickyHeader(offsetThresholdFn) {
  var $navContainer = $("#stickyNavContainer");
  var hiddenClass = "hidden";
  offsetThresholdFn = offsetThresholdFn ||
      function() { return $(window).height() * 0.6; };

  $navContainer.css("opacity", 0.0);

  $(window).scroll(function () {
    if (window.scrollY >= offsetThresholdFn()) {
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
