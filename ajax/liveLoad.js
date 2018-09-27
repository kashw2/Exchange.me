// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// Check the document is ready
$(document).ready(function() {
	// Repeat the function
	setInterval(function() {
		// Make sure the user isnt currently using the field
		if ($('#navigational-search').val() == '') {
			// AJAX
			$('#content-rate-table').load('ajax/inc/live.inc.update.php', {}, function(responseText, statusText, xhr) {});
		}
	}, 5000);
});
