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
				let search = document.getElementById('navigational-search');
				let searchCriteria = search.value.toUpperCase();
				let table = document.getElementById('content-rate-table');
				let tableData;
				let tableRow = table.getElementsByTagName('tr');

				for (let i = 0; i < tableRow.length; i++) {
					tableData = tableRow[i].getElementsByTagName('td')[0];

					if (tableData) {
						if (tableData.innerHTML.toUpperCase().indexOf(searchCriteria) > -1) {
							tableRow[i].style.display = '';
						}
						else {
							tableRow[i].style.display = 'none';
						}
					}
				}
			},
			true
		);

		document.getElementById('navigational-search').addEventListener(
			'click',
			function() {
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
