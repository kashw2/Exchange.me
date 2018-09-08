// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// and licensed owners of this product and it's content

// Add the event listner
document.addEventListener('DOMContentLoaded', function() {
	'use strict';

	// Loop the elements
	for (let i = 0; i < document.getElementsByClassName('warning-details').length; i++) {
		// Add the event listner
		document.getElementsByClassName('warning-details')[i].addEventListener(
			'click',
			function(e) {
				window.location.href = e.target.getAttribute('data-href');
			},
			false
		);
	}

	// Loop the elements
	for (let i = 0; i < document.getElementsByClassName('ban-view').length; i++) {
		// Add the event listner
		document.getElementsByClassName('ban-view')[i].addEventListener(
			'click',
			function(e) {
				window.location.href = e.target.getAttribute('data-href');
			},
			false
		);
	}
});
