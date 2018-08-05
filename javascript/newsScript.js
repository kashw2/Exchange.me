// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// and licensed owners of this product and it's content

// Add the event listner
document.addEventListener(
	'DOMContentLoaded',
	function() {
		'use strict';

		// Search functionallity

		// Add the event listner
		document.getElementById('news-search').addEventListener(
			'change',
			function() {
				// Decalre and define variables
				var search = document.getElementById('news-search').value.toUpperCase();
				var newsContentContainer = document.getElementsByClassName('news-content-container');
				var newsAuthor = document.getElementsByClassName('news-author');
				var newsDate = document.getElementsByClassName('news-post-date');
				var newsId = undefined;
				var newsContent = document.getElementsByClassName('news-post-content');
				var news;

				// Make sure search has a value
				if (search != '') {
					// Loop through the posts
					for (var i = 0; i < newsContent.length; i++) {
						// Convert to uppercase this entry relative to the increment
						var news = newsContent[i].textContent.toUpperCase();
						var author = newsAuthor[i].textContent.toUpperCase();
						var date = newsDate[i].textContent.toUpperCase();

						// FIXME: author and date are both skipped in search

						// Check the posts for the search criteria
						if (news.indexOf(search) > 0 || author.indexOf(search) > 0 || date.indexOf(search) > 0) {
							// Change the style
							document.getElementById('news-post-' + i).style.display = 'grid';
						}
						else {
							// Change the style
							document.getElementById('news-post-' + i).style.display = 'none';
						}
					}
				}
				else {
					// Loop through the posts
					for (var i = 0; i < newsContent.length; i++) {
						// Convert to uppercase this entry relative to the increment
						var news = newsContent[i].textContent.toUpperCase();

						// Change the style
						document.getElementById('news-post-' + i).style.display = 'grid';
					}
				}
			},
			true
		);
	},
	true
);
