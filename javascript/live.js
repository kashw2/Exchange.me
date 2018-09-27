// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// Add the event listner
document.addEventListener(
	'DOMContentLoaded',
	function() {
		'use strict';

		// Add the event listner
		document.getElementById('navigational-search').addEventListener(
			'change',
			function() {
				// Decalre and define variables
				let search = document.getElementById('navigational-search').value.toUpperCase();
				let coinName = document.getElementsByClassName('coin-symbol');
				let coin;

				// Make sure search has a value
				if (search != '') {
					// Loop through the posts
					for (let i = 1; i < coinName.length; i++) {
						// Convert to uppercase this entry relative to the increment
						coin = coinName[i].textContent.toUpperCase();

						// Check the posts for the search criteria
						if (coin.indexOf(search) > 0) {
							// Change the style
							document.getElementById('coin-row-' + i).style.display = 'initial';
						}
						else {
							// Change the style
							document.getElementById('coin-row-' + i).style.display = 'none';
						}
					}
				}
				else {
					// Loop through the posts
					for (let i = 1; i < coinName.length; i++) {
						// Convert to uppercase this entry relative to the increment
						coin = coinName[i].textContent.toUpperCase();

						// Change the style
						document.getElementById('coin-row-' + i).style.display = 'grid';
					}
				}
			},
			true
		);

		document.getElementById('navigational-search').addEventListener(
			'click',
			function() {
				if (document.getElementById('navigational-search').value == 'Crypto Search') {
					// Remove 'value' placeholder
					document.getElementById('navigational-search').value = '';
				}

				// Style the element
				document.getElementById('navigational-search').style.backgroundColor = 'transparent';
				document.getElementById('navigational-search').style.borderTop = 'none';
				document.getElementById('navigational-search').style.borderRight = 'none';
				document.getElementById('navigational-search').style.borderBottom = '1px solid #ffcb15';
				document.getElementById('navigational-search').style.borderLeft = 'none';
			},
			true
		);

		document.getElementById('navigational-search').addEventListener(
			'focusout',
			function() {
				if (document.getElementById('navigational-search').value == '') {
					// Style the element
					document.getElementById('navigational-search').style.backgroundColor = 'transparent';
					document.getElementById('navigational-search').style.borderTop = 'none';
					document.getElementById('navigational-search').style.borderRight = 'none';
					document.getElementById('navigational-search').style.borderBottom = '1px solid #000000';
					document.getElementById('navigational-search').style.borderLeft = 'none';
				}
			},
			true
		);
	},
	true
);
