$(document).ready(function () {
	$window = $(window);
	$('section[data-type="background"]').each(function () {
		var $bgobj = $(this); // assigning the object
		debugger
		$window.scroll(function () {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% ' + yPos + 'px';
			$bgobj.css({
				backgroundPosition: coords
			});

		});
	});

});
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");
