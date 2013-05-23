$(function() {
	var $topNavList = $("#topNavList");
	var $leftNavList = $("#leftNavList");

	var setUpLeftNav = function() {
		var $leftNavIndicator = $("#leftNavIndicator");
		var $leftNavPointer = $("#leftNavPointer");

		var $lis = $leftNavList.children("li");

		$lis.each(function() {
			var $el = $(this).children("a");

			$el.bind({
				mouseover: function(_e) {
					$leftNavPointer.animate({
						"top": $el.position().top
					}, 100);
				},
				click: function(_e) {
					$leftNavIndicator.fadeTo(150, 0, function() {
						$leftNavIndicator.css("top", $el.position().top);
						$leftNavIndicator.fadeTo(150, 1, function() {
						});
					})
				}
			});
		});
	};

	var setUpTopNav = function() {
		var $topNavIndicator = $("#topNavIndicator");

		var $lis = $topNavList.children("li");

		var setIndicatorPos = function(_$el) {
			$topNavIndicator.animate({
				"left": _$el.position().left + _$el.width()/2
			}, 250);
		};

		$lis.each(function() {
			var $el = $(this).children("a");

			$el.bind({
				mouseover: function(_e) {
					setIndicatorPos($el);
				}
			});
		});
		setIndicatorPos($($lis[0]).children("a"));
	};

	setUpLeftNav();
	setUpTopNav();
});