$(function () {
	// Fixed Header
	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();

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

	// Smooth scroll
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		// console.log(elementOffset);
		//nav.removeClass('show');

		$('html, body').animate(
			{
				scrollTop: elementOffset - 100,
			},
			700,
		);
	});
});
