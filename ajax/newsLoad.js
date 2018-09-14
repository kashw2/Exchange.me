// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// jQuery

// Check if document is ready
$(document).ready(function() {
	// Iterate through this function every 25 seconds
	setInterval(function() {
		// Load data
		$('#news-content').load(
			'ajax/inc/news.inc.reload.php',
			{},
			// Callback
			function(responseTxt, statusTxt, xhr) {}
		);
	}, 60000);
});
