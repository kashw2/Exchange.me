// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// Add the event listner
document.addEventListener(
	'DOMContentLoaded',
	function() {
		'use strict';

		// Move Header Headings Grid Location

		// Make sure there are children
		if (document.getElementById('header-nav').hasChildNodes()) {
			// Declare and define the variable
			var headerChildren = document.getElementById('header-nav').childNodes;

			// Alter the style of the elements

			headerChildren[1].style.position = 'relative';
			headerChildren[1].style.left = '395px';

			headerChildren[3].style.position = 'relative';
			headerChildren[3].style.left = '400px';
		}

		if (document.getElementById('login-form')) {
			document.getElementById('login-form').style.display = 'grid';

			// Add the event listner
			document.getElementById('login-option-change').addEventListener(
				'click',
				function() {
					document.getElementById('login-form').style.display = 'none';
					document.getElementById('register-form').style.display = 'grid';
				},
				false
			);
		}

		// Change Form Type

		// Add the event listner
		document.getElementById('register-option-change').addEventListener(
			'click',
			function() {
				document.getElementById('login-form').style.display = 'grid';
				document.getElementById('register-form').style.display = 'none';
			},
			false
		);
	},
	false
);
