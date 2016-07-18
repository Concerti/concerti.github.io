require.config({
	paths: {
		jquery: 'lib/jquery/jquery.min'
	}
});

require(['jquery'], function ($) {
	$(function () {
		$('.header__nav-toggle').click(function (event) {
			event.preventDefault();
			$('.header__nav').toggleClass('header__nav--show');
		});

		var header = $(".header");
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 50) {
				header.addClass('header--has-background');
			} else {
				header.removeClass('header--has-background');
			}
		});
	});
});