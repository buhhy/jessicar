$(function () {
	$("#linkPortfolio").click(function () {
		var scrollAmount = $(".portfolio").position().top - $("#pageHeader").outerHeight(false);
		$("html, body").animate({
			"scrollTop": scrollAmount
		}, 1000);
		return false;
	});

	$("#linkName").click(function () {
		var scrollAmount = $(".bio").position().top - $("#pageHeader").outerHeight(false);
		$("html, body").animate({
			"scrollTop": scrollAmount
		}, 1000);
		return false;
	});

	$("#linkResume").click(function () {
		var scrollAmount = $(".resume").position().top - $("#pageHeader").outerHeight(false);
		$("html, body").animate({
			"scrollTop": scrollAmount + 1
		}, 1000);
		return false;
	});

	$("#linkContact").click(function () {
		var scrollAmount = $(".contact").position().top - $("#pageHeader").outerHeight(false);
		$("html, body").animate({
			"scrollTop": scrollAmount + 1
		}, 1000);
		return false;
	});

});