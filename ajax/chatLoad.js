// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// Check the document is ready
$(document).ready(function() {
	// Send Messages

	// Check for keypress
	$('#messaging-message').keypress(function(e) {
		// Keycode 13 was pressed (enter)
		if (e.which == '13' && $('#messaging-message').val() != '') {
			$('#chat-messages').load(
				'ajax/inc/chat.inc.insert.php',
				{
					Message: $('#messaging-message').val(),
					CurrentUser: $('#grid-content__loggedin').data('user')
				},
				// Callback
				function(responseTxt, statusTxt, xhr) {
					$('#messaging-message').val('');
				}
			);
		}
	});

	// Recieve Messages

	// Repeat function every second
	setInterval(function(e) {
		$('#chat-messages').load(
			'ajax/inc/chat.inc.load.php',
			{
				CurrentUser: $('#grid-content__loggedin').data('user')
			},
			// Callback
			function(responseTxt, statusTxt, xhr) {}
		);

		// e.preventDefault();
	}, 1000);
});
