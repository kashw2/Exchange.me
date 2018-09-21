// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// Add event listner
$(document).ready(function() {
	// Add event listner
	$('#information-submit').bind('click', function() {
		// AJAX
		$('#details-content').load(
			'ajax/inc/view.update.ban.php',
			{
				User: $('#information-user').text(),
				BanID: $('#information-banid').text(),
				EndDate: $('#information-enddate').val(),
				Details: $('#information-details').val(),
				Reason: $('#information-reason').val(),
				Admin: $('#grid-content__loggedin').data('user')
			},
			function(responseTxt, statusTxt, xhr) {
				// Delete element
				$('#content-edit-container').empty();
			}
		);
	});

	$('#actions-remove').bind('click', function() {
		// Check if it is a warning or ban
		if ($('#content-heading').text() == 'Details for Warning: ' + $('#content-heading').data('banid')) {
			$(document).load(
				'ajax/inc/view.delete.warning.php',
				{
					User: $('#content-user').text(),
					WarningID: $('#content-heading').data('banid')
				},
				function(responseTxt, statusTxt, xhr) {
					// Refresh
					window.location.reload();
				}
			);
		}
		else if ($('#content-heading').text() == 'Details for Ban: ' + $('#content-heading').data('banid')) {
			$(document).load(
				'ajax/inc/view.delete.ban.php',
				{
					User: $('#content-user').text(),
					BanID: $('#content-heading').data('banid')
				},
				function(responseTxt, statusTxt, xhr) {
					// Refresh
					window.location.reload();
				}
			);
		}
	});
});
