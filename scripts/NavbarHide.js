/* Script that hides/shows the navbar when scrolling down/up */

var lastScrollTop = 0;	// the am
var navbar = $('nav');	// navbar element in HTML
// Area at top of the page where the navbar shouldn't hide, even if user scrolls down. Semi-arbitrarily selected to be half of the height of the navbar itself.
var noHideArea = parseInt(navbar.css("height")) / 2;
navbar.addClass('hide');

$(window).scroll(function () {
	var scrollTop = $(this).scrollTop();

	setTimeout(function () {
		// if (scrollTop > lastScrollTop && scrollTop > noHideArea) {
		if (scrollTop > lastScrollTop) {
			navbar.addClass('hide');	// hides navbar
		} else {
			/* Fix for Chrome bug where backdrop-filter disappears during animation.
			 * Maybe unexpected results in performance, look into it.
			 */
			navbar.css("will-change", "contents");
			navbar.removeClass('hide');	// shows navbar
		}
		lastScrollTop = scrollTop;	
	}, 200);
});
