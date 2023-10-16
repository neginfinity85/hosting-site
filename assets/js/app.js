$(function () {
	/* Fixed Header
	================================================= */
	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $('#nav');
	let navToggle = $('#navToggle');

	checkScroll(scrollPos, introH, headerH);

	$(window).on('scroll resize', function () {
		introH = intro.innerHeight();
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH, headerH);
	});

	function checkScroll(scrollPos, introH, headerH) {
		if (scrollPos > introH - headerH) {
			header.addClass('header--fixed');
		} else {
			header.removeClass('header--fixed');
		}
	}

	/* Smooth scroll
	===================================================== */
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		nav.removeClass('show');
		$('body').removeClass('no-scroll');

		$('html, body').animate(
			{
				scrollTop: elementOffset - 99,
			},
			700,
		);
	});

	/* Nav Toggle on mobile
	================================================== */

	navToggle.on('click', function (event) {
		event.preventDefault();

		nav.toggleClass('show');
		$('body').toggleClass('no-scroll');
	});

	$(window).on('resize', function () {
		nav.removeClass('show');
		$('body').removeClass('no-scroll');
	});

	/* Testimonials Slider https://kenwheeler.github.io/slick/?ref=blogduwebdesign.com */
	let introSlider = $('#introSlider');

	introSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	/* Testimonials Slider https://kenwheeler.github.io/slick/?ref=blogduwebdesign.com */
	let slider = $('#testimonialsSlider');

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
