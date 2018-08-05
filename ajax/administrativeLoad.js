// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// and licensed owners of this product and it's content

// Check the document is ready
$(document).ready(function() {
	// Check for click
	$('#administrative-block').on('click', function() {
		// Check if the user is blocked or not
		if ($('#administrative-block').text() == 'Block') {
			// AJAX
			$(document).load(
				'ajax/inc/users.inc.block.php',
				{
					CurrentUser: $('#grid-content__loggedin').data('user'),
					Blocked: $('#info-username').children('p').text()
				},
				// Callback
				function(responseTxt, statusTxt, xhr) {
					// Response text check
					switch (responseTxt) {
						case 'true':
							// Change the attributes
							$('#administrative-block').text('Unblock');

							break;
						case 'blocked':
							// Change the attributes
							$('#administrative-block').text('Unblock');

							break;
					}
				}
			);
		}
		else {
			// AJAX
			$(document).load(
				'ajax/inc/users.inc.unblock.php',
				{
					CurrentUser: $('#grid-content__loggedin').data('user'),
					Blocked: $('#info-username').children('p').text()
				},
				// Callback
				function(responseTxt, statusTxt, xhr) {
					// Response text check
					switch (responseTxt) {
						case 'true':
							// Change the attributes
							$('#administrative-block').text('Block');

							break;
						case 'unblocked':
							// Change the attributes
							$('#administrative-block').text('Block');

							break;
					}
				}
			);
		}
	});

	// Check for click
	$('#administrative-friend').on('click', function() {
		// Check if the user is blocked or not
		if ($('#administrative-friend').text() == 'Add Friend') {
			// AJAX
			$(document).load(
				'ajax/inc/users.inc.add.friend.php',
				{
					CurrentUser: $('#grid-content__loggedin').data('user'),
					Friend: $('#info-username').children('p').text()
				},
				// Callback
				function(responseTxt, statusTxt, xhr) {
					// Response text check
					switch (responseTxt) {
						case 'true':
							// Change the attributes
							$('#administrative-friend').text('Remove Friend');
							$('#administrative-friend').css('color', '#000');

							break;
						case 'friends':
							// Change the attributes
							$('#administrative-friend').text('Remove Friend');
							$('#administrative-friend').css('color', '#000');

							break;
					}
				}
			);
		}
		else {
			// AJAX
			$(document).load(
				'ajax/inc/users.inc.remove.friend.php',
				{
					CurrentUser: $('#grid-content__loggedin').data('user'),
					Friend: $('#info-username').children('p').text()
				},
				// Callback
				function(responseTxt, statusTxt, xhr) {
					// Response text check
					switch (responseTxt) {
						case 'true':
							// Change the attributes
							$('#administrative-friend').text('Add Friend');
							$('#administrative-friend').css('color', '#40cf2d');

							break;
						case 'removed':
							// Change the attributes
							$('#administrative-friend').text('Add Friend');
							$('#administrative-friend').css('color', '#40cf2d');

							break;
					}
				}
			);
		}
	});

	// Check for click
	$('#administrative-report').on('click', function() {
		// Check if window exists
		/*
        !($"#user-warning-window") doesn't work here
        .length must be appended
        */
		if (!$('#user-warning-window').length) {
			// Declare and define variables
			var offsetPosition = [
				0,
				0
			];
			var mousePos, mouseDown;

			// Create the element
			let HTMLDivElement_Report_Window = document.createElement('div');

			// Set element attributes
			/*
            .attr() doesn't append attribute
            TypeError!
            */
			HTMLDivElement_Report_Window.setAttribute('id', 'user-warning-window');

			// Style the element
			HTMLDivElement_Report_Window.style.display = 'grid';
			HTMLDivElement_Report_Window.style.position = 'absolute';
			HTMLDivElement_Report_Window.style.gridTemplateColumns = '1fr';
			HTMLDivElement_Report_Window.style.gridTemplateRows = '20px 1fr 30px';
			HTMLDivElement_Report_Window.style.gridColumnStart = 1;
			HTMLDivElement_Report_Window.style.gridColumnEnd = 3;
			HTMLDivElement_Report_Window.style.justifySelf = 'center';
			HTMLDivElement_Report_Window.style.width = '50%';
			HTMLDivElement_Report_Window.style.height = '325px';
			HTMLDivElement_Report_Window.style.backgroundColor = '#333333';
			HTMLDivElement_Report_Window.style.borderLeft = '2px solid #00e01e';
			HTMLDivElement_Report_Window.style.borderBottom = '2px solid #00e01e';
			HTMLDivElement_Report_Window.style.borderRight = '2px solid #00e01e';

			// Append the child
			$('#content-profile').append(HTMLDivElement_Report_Window);

			// Create the element
			let HTMLDivElement_Report_Window_Titlebar = document.createElement('div');

			// Set element attributes
			HTMLDivElement_Report_Window_Titlebar.setAttribute('id', 'warning-window-titlebar');

			// Style the element
			HTMLDivElement_Report_Window_Titlebar.style.display = 'grid';
			HTMLDivElement_Report_Window_Titlebar.style.gridColumn = 'auto';
			HTMLDivElement_Report_Window_Titlebar.style.gridRow = 1;
			HTMLDivElement_Report_Window_Titlebar.style.gridTemplateColumns = '1fr 20px';
			HTMLDivElement_Report_Window_Titlebar.style.gridTemplateRows = '1fr';
			HTMLDivElement_Report_Window_Titlebar.style.backgroundColor = '#00e01e';

			// Append the child
			$('#user-warning-window').append(HTMLDivElement_Report_Window_Titlebar);

			// Add event listner
			$('#warning-window-titlebar').on('mousedown', function(event) {
				mouseDown = true;

				offsetPosition = [
					$('#user-warning-window').offset().left - event.clientX,
					$('#user-warning-window').offset().top - event.clientY
				];
			});

			// Add event listner
			$('#warning-window-titlebar').on('mouseup', function() {
				mouseDown = false;
			});

			// Add event listner
			$('#warning-window-titlebar').on('mousemove', function(event) {
				event.preventDefault();

				if (mouseDown) {
					mousePos = {
						x: event.clientX,
						y: event.clientY
					};

					$('#user-warning-window').css('left', mousePos.x + offsetPosition[0] + 'px');
					$('#user-warning-window').css('top', mousePos.y + offsetPosition[1] + 'px');
				}
			});

			// Add event listner
			$('#warning-window-titlebar').on('focusout', function() {
				mouseDown = false;
			});

			// Create the element
			let HTMLParagraphElement_Report_Window_Title = document.createElement('p');

			// Set the text context
			/*
            .text() doesn't work here
            TypeError!
            */
			HTMLParagraphElement_Report_Window_Title.textContent = 'Report User';

			// Style the element
			HTMLParagraphElement_Report_Window_Title.style.gridColumn = 1;
			HTMLParagraphElement_Report_Window_Title.style.gridRow = 'auto';
			HTMLParagraphElement_Report_Window_Title.style.justifySelf = 'start';
			HTMLParagraphElement_Report_Window_Title.style.alignSelf = 'center';
			HTMLParagraphElement_Report_Window_Title.style.color = 'green';
			HTMLParagraphElement_Report_Window_Title.style.fontFamily = 'Lato, sans-serif';
			HTMLParagraphElement_Report_Window_Title.style.fontSize = '0.8em';
			HTMLParagraphElement_Report_Window_Title.style.padding = '0px 0px 0px 5px';
			HTMLParagraphElement_Report_Window_Title.style.cursor = 'default';

			// Append the child
			$('#warning-window-titlebar').append(HTMLParagraphElement_Report_Window_Title);

			// Create the element
			let HTMLDivElement_Report_Window_Exit = document.createElement('div');

			// Set the attributes
			HTMLDivElement_Report_Window_Exit.setAttribute('id', 'titlebar-exit-container');

			// Style the element
			HTMLDivElement_Report_Window_Exit.style.display = 'grid';
			HTMLDivElement_Report_Window_Exit.style.gridTemplateColumns = '1fr';
			HTMLDivElement_Report_Window_Exit.style.gridTemplateRows = '1fr';
			HTMLDivElement_Report_Window_Exit.style.gridRow = 1;
			HTMLDivElement_Report_Window_Exit.style.gridColumn = 2;
			HTMLDivElement_Report_Window_Exit.style.backgroundColor = '#ff6363';

			// Append the child
			$('#warning-window-titlebar').append(HTMLDivElement_Report_Window_Exit);

			// Create the element
			let HTMLParagraphElement_Report_Window_Exit = document.createElement('p');

			// Set text context
			HTMLParagraphElement_Report_Window_Exit.textContent = 'x';

			// Set attributes
			HTMLParagraphElement_Report_Window_Exit.setAttribute('id', 'titlebar-exit');

			// Style the element
			HTMLParagraphElement_Report_Window_Exit.style.gridColumn = 'auto';
			HTMLParagraphElement_Report_Window_Exit.style.gridRow = 'auto';
			HTMLParagraphElement_Report_Window_Exit.style.justifySelf = 'center';
			HTMLParagraphElement_Report_Window_Exit.style.alignSelf = 'center';
			HTMLParagraphElement_Report_Window_Exit.style.fontFamily = 'Lato, sans-serif';
			HTMLParagraphElement_Report_Window_Exit.style.fontSize = '0.8em';
			HTMLParagraphElement_Report_Window_Exit.style.cursor = 'default';

			// Append the child
			$('#titlebar-exit-container').append(HTMLParagraphElement_Report_Window_Exit);

			// Add the event listner
			$('#titlebar-exit').on('click', function() {
				// Remove the window
				HTMLDivElement_Report_Window.remove();
			});

			// Create the element
			let HTMLDivElement_Report_Window_Form = document.createElement('div');

			// Set the element attributes
			HTMLDivElement_Report_Window_Form.setAttribute('id', 'warning-window-form');

			// Style the element
			HTMLDivElement_Report_Window_Form.style.display = 'grid';
			HTMLDivElement_Report_Window_Form.style.gridColumn = 'auto';
			HTMLDivElement_Report_Window_Form.style.gridRow = 2;
			HTMLDivElement_Report_Window_Form.style.gridTemplateColumns = '1fr';
			HTMLDivElement_Report_Window_Form.style.gridTemplateRows = '0.2fr 1fr';

			// Append the child
			$('#user-warning-window').append(HTMLDivElement_Report_Window_Form);

			// Create the element
			HTMLParagraphElement_Report_Window_Form = document.createElement('p');

			// Set the text content
			HTMLParagraphElement_Report_Window_Form.textContent = "Please input a brief description that describes the incident you've had with this user.";

			// Style the element
			HTMLParagraphElement_Report_Window_Form.style.gridColumn = 'auto';
			HTMLParagraphElement_Report_Window_Form.style.gridRow = 1;
			HTMLParagraphElement_Report_Window_Form.style.justifySelf = 'center';
			HTMLParagraphElement_Report_Window_Form.style.alignSelf = 'start';
			HTMLParagraphElement_Report_Window_Form.style.color = '#FFFFFF';
			HTMLParagraphElement_Report_Window_Form.style.fontFamily = 'Lato, sans-serif';
			HTMLParagraphElement_Report_Window_Form.style.fontSize = '0.9em';
			HTMLParagraphElement_Report_Window_Form.style.fontWeight = '300';
			HTMLParagraphElement_Report_Window_Form.style.padding = '10px 10px 10px 10px';

			// Append the element
			$('#warning-window-form').append(HTMLParagraphElement_Report_Window_Form);

			// Create the element
			HTMLTextAreaElement_Report_Window_Form = document.createElement('textarea');

			// Set the element attributes
			HTMLTextAreaElement_Report_Window_Form.setAttribute('placeholder', 'Report Description');
			HTMLTextAreaElement_Report_Window_Form.setAttribute('id', 'window-warning-description');

			// Style the element
			HTMLTextAreaElement_Report_Window_Form.style.gridColumn = 'auto';
			HTMLTextAreaElement_Report_Window_Form.style.gridRow = 2;
			HTMLTextAreaElement_Report_Window_Form.style.justifySelf = 'center';
			HTMLTextAreaElement_Report_Window_Form.style.alignSelf = 'end';
			HTMLTextAreaElement_Report_Window_Form.style.height = '40%';
			HTMLTextAreaElement_Report_Window_Form.style.width = '90%';
			HTMLTextAreaElement_Report_Window_Form.style.resize = 'none';
			HTMLTextAreaElement_Report_Window_Form.style.marginBottom = '40px';

			// Append element
			$('#warning-window-form').append(HTMLTextAreaElement_Report_Window_Form);

			// Create the element
			let HTMLDivElement_Report_Window_Footer = document.createElement('div');

			// Set element attributes
			HTMLDivElement_Report_Window_Footer.setAttribute('id', 'warning-window-footer');

			// Style the element
			HTMLDivElement_Report_Window_Footer.style.display = 'grid';
			HTMLDivElement_Report_Window_Footer.style.gridColumn = 'auto';
			HTMLDivElement_Report_Window_Footer.style.gridRow = 3;
			HTMLDivElement_Report_Window_Footer.style.gridTemplateColumns = '1fr auto';
			HTMLDivElement_Report_Window_Footer.style.gridTemplateRows = '1fr';
			HTMLDivElement_Report_Window_Footer.style.backgroundColor = '#383838';

			// Append the child
			$('#user-warning-window').append(HTMLDivElement_Report_Window_Footer);

			// Create the element
			let HTMLInputElement_Report_Window_Footer_Submit = document.createElement('input');

			// Set the element attributes
			HTMLInputElement_Report_Window_Footer_Submit.setAttribute('id', 'warning-window-submit');
			HTMLInputElement_Report_Window_Footer_Submit.setAttribute('type', 'button');
			HTMLInputElement_Report_Window_Footer_Submit.setAttribute('value', 'Submit');

			// Set text content
			HTMLInputElement_Report_Window_Footer_Submit.textContent = 'Submit';

			// Style the element
			HTMLInputElement_Report_Window_Footer_Submit.style.gridColumn = 2;
			HTMLInputElement_Report_Window_Footer_Submit.style.gridRow = 'auto';
			HTMLInputElement_Report_Window_Footer_Submit.style.justifySelf = 'center';
			HTMLInputElement_Report_Window_Footer_Submit.style.alignSelf = 'center';
			HTMLInputElement_Report_Window_Footer_Submit.style.height = '20px';
			HTMLInputElement_Report_Window_Footer_Submit.style.width = '80px';
			HTMLInputElement_Report_Window_Footer_Submit.style.color = '#FFFFFF';
			HTMLInputElement_Report_Window_Footer_Submit.style.backgroundColor = '#ff2828';
			HTMLInputElement_Report_Window_Footer_Submit.style.fontFamily = 'Lato, sans-serif';
			HTMLInputElement_Report_Window_Footer_Submit.style.fontSize = '0.8em';
			HTMLInputElement_Report_Window_Footer_Submit.style.fontWeight = '300';
			HTMLInputElement_Report_Window_Footer_Submit.style.margin = '2px 10px 2px 10px';
			HTMLInputElement_Report_Window_Footer_Submit.style.border = 'none';

			// Append the element
			$('#warning-window-footer').append(HTMLInputElement_Report_Window_Footer_Submit);

			// Add event listner
			$('#warning-window-submit').on('click', function() {
				$(document).load(
					'ajax/inc/administrative.inc.report.php',
					{
						CurrentUser: $('#grid-content__loggedin').data('user'),
						ReportedUser: $('#info-username').children('p').text(),
						Description: $('#window-warning-description').val()
					},
					// Callback
					function(responseTxt, statusTxt, xhr) {
						// Clear the text area
						$('#window-warning-description').val('');

						// Remove window
						HTMLDivElement_Report_Window.remove();
					}
				);
			});
		}
	});

	// Check for click
	$('#administrative-warn').on('click', function() {
		window.location.href = 'ban.php?User=' + $('#info-username').children('p').text() + '&Type=Warn';
	});

	// Check for click
	$('#administrative-ban').on('click', function() {
		window.location.href = 'ban.php?User=' + $('#info-username').children('p').text() + '&Type=Ban';
	});

	// Check for click
	$('#administrative-edit').on('click', function() {
		// Check for current value
		if ($('#administrative-edit').text() == 'Edit') {
			// Change the text content
			$('#administrative-edit').text('Cancel');

			// Create the element
			let HTMLDivElement_Profile_Container = document.createElement('div');

			HTMLDivElement_Profile_Container.setAttribute('id', 'profile-information-edit');

			HTMLDivElement_Profile_Container.style.display = 'grid';
			HTMLDivElement_Profile_Container.style.gridTemplateColumns = '1fr';
			HTMLDivElement_Profile_Container.style.gridTemplateRows = '30px 1fr';
			HTMLDivElement_Profile_Container.style.gridColumn = 2;
			HTMLDivElement_Profile_Container.style.gridRowStart = 2;
			HTMLDivElement_Profile_Container.style.gridRowEnd = 5;
			HTMLDivElement_Profile_Container.style.borderTop = '2px solid #efefef';
			HTMLDivElement_Profile_Container.style.borderRadius = '5px';

			// Append the element
			$('#content-profile').append(HTMLDivElement_Profile_Container);

			// Create the element
			let HTMLDivElement_Profile_Header = document.createElement('div');

			HTMLDivElement_Profile_Header.setAttribute('id', 'information-header-container');

			HTMLDivElement_Profile_Header.style.display = 'grid';
			HTMLDivElement_Profile_Header.style.gridTemplateColumns = 'auto auto 1fr';
			HTMLDivElement_Profile_Header.style.gridTemplateRows = '1fr';
			HTMLDivElement_Profile_Header.style.gridColumn = 'auto';
			HTMLDivElement_Profile_Header.style.gridRow = 1;
			HTMLDivElement_Profile_Header.style.backgroundColor = '#fcfcfc';

			// Append the element
			$('#profile-information-edit').append(HTMLDivElement_Profile_Header);

			// Create the element
			let HTMLDivElement_Profile_Header_Profile = document.createElement('div');

			HTMLDivElement_Profile_Header_Profile.setAttribute('id', 'header-profile');

			HTMLDivElement_Profile_Header_Profile.style.display = 'grid';
			HTMLDivElement_Profile_Header_Profile.style.gridColumn = 1;
			HTMLDivElement_Profile_Header_Profile.style.gridRow = 'auto';
			HTMLDivElement_Profile_Header_Profile.style.height = '100%';
			HTMLDivElement_Profile_Header_Profile.style.width = '100px';
			HTMLDivElement_Profile_Header_Profile.style.backgroundColor = '#18cf05';
			HTMLDivElement_Profile_Header_Profile.style.borderTop = '2px solid #efefef';
			HTMLDivElement_Profile_Header_Profile.style.borderLeft = '2px solid #efefef';

			// Append the element
			$('#information-header-container').append(HTMLDivElement_Profile_Header_Profile);

			// Create the element
			let HTMLParagraphElement_Profile_Header_Profile_Heading = document.createElement('p');

			HTMLParagraphElement_Profile_Header_Profile_Heading.textContent = 'Profile';

			HTMLParagraphElement_Profile_Header_Profile_Heading.style.justifySelf = 'center';
			HTMLParagraphElement_Profile_Header_Profile_Heading.style.alignSelf = 'center';
			HTMLParagraphElement_Profile_Header_Profile_Heading.style.color = '#FFFFFF';
			HTMLParagraphElement_Profile_Header_Profile_Heading.style.fontFamily = 'Lato, sans-serif';
			HTMLParagraphElement_Profile_Header_Profile_Heading.style.fontSize = '0.8em';
			HTMLParagraphElement_Profile_Header_Profile_Heading.style.fontWeight = 300;
			HTMLParagraphElement_Profile_Header_Profile_Heading.style.letterSpacing = '0.5px';
			HTMLParagraphElement_Profile_Header_Profile_Heading.style.cursor = 'pointer';

			/*
            	on, bind and click methods do not work when referencing a declaration of a DOMElement
            	TypeError!
            	*/
			// dd the event listner
			HTMLParagraphElement_Profile_Header_Profile_Heading.addEventListener(
				'click',
				function() {
					// Delete all children and sibling elements
					$('#information-container').empty();

					HTMLDivElement_Display_Container.style.gridTemplateColumns = '80px 250px 20px 80px 250px 1fr 150px';
					HTMLDivElement_Display_Container.style.gridTemplateRows = '100px 30px 20px 30px 20px 30px 20px 30px 20px 30px 20px 30px 20px auto';

					// Create the element
					let HTMLFormElement_Display_Profile = document.createElement('form');

					HTMLFormElement_Display_Profile.setAttribute('id', 'profile-form');
					HTMLFormElement_Display_Profile.setAttribute('method', 'POST');
					HTMLFormElement_Display_Profile.setAttribute('action', 'profileupdate.php');

					HTMLFormElement_Display_Profile.style.display = 'none';

					// Append the element
					$('#information-container').append(HTMLFormElement_Display_Profile);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Intro = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Intro.textContent = 'This is the Profile panel. From this panel you are able to change any information related to your specific profile such as associated Email address, Username, Password, Alias and much much more. It is important to note that any changes made when using this panel will require you to verify them via an automated email that will be sent to the accounts associated email address.';

					HTMLParagraphElement_Display_Profile_Intro.style.display = 'grid';
					HTMLParagraphElement_Display_Profile_Intro.style.gridColumnStart = 1;
					HTMLParagraphElement_Display_Profile_Intro.style.gridColumnEnd = 6;
					HTMLParagraphElement_Display_Profile_Intro.style.gridRow = 1;
					HTMLParagraphElement_Display_Profile_Intro.style.alignSelf = 'start';
					HTMLParagraphElement_Display_Profile_Intro.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Intro.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Intro.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Intro.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Intro.style.padding = '15px 10px 0px 10px';

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Intro);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Email = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Email.textContent = 'Email:';

					HTMLParagraphElement_Display_Profile_Email.style.gridColumn = 1;
					HTMLParagraphElement_Display_Profile_Email.style.gridRow = 2;
					HTMLParagraphElement_Display_Profile_Email.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Email.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Email.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Email.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Email.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Email.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Email.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Email.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Email.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Email.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Email.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Email.addEventListener('click', function() {
						if ($('#explaination-email').text() != "Alter your account's associated email address.") {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Email_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Email_Explaination.setAttribute('id', 'explaination-email');

							HTMLParagraphElement_Display_Profile_Email_Explaination.textContent = "Alter your account's associated email address.";

							HTMLParagraphElement_Display_Profile_Email_Explaination.style.gridColumnStart = 1;
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.gridColumnEnd = 3;
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.gridRow = 3;
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Email_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Email_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Email);

					// Create the element
					let HTMLInputElement_Display_Profile_Email = document.createElement('input');

					HTMLInputElement_Display_Profile_Email.setAttribute('id', 'profile-email');
					HTMLInputElement_Display_Profile_Email.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Email.setAttribute('type', 'email');
					HTMLInputElement_Display_Profile_Email.setAttribute('name', 'email');

					HTMLInputElement_Display_Profile_Email.style.gridColumn = 2;
					HTMLInputElement_Display_Profile_Email.style.gridRow = 2;
					HTMLInputElement_Display_Profile_Email.style.justifySelf = 'center';
					HTMLInputElement_Display_Profile_Email.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Email.style.height = '20px';
					HTMLInputElement_Display_Profile_Email.style.width = '90%';
					HTMLInputElement_Display_Profile_Email.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Email.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Email.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Email.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Email.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Email.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Email.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Email.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Email.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Email.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Email.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Email.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Email.style.border = 'none';
								HTMLInputElement_Display_Profile_Email.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Email.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Email.style.outline = 'none';
							HTMLInputElement_Display_Profile_Email.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Email);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Username = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Username.textContent = 'Username:';

					HTMLParagraphElement_Display_Profile_Username.style.gridColumn = 1;
					HTMLParagraphElement_Display_Profile_Username.style.gridRow = 4;
					HTMLParagraphElement_Display_Profile_Username.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Username.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Username.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Username.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Username.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Username.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Username.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Username.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Username.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Username.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Username.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Username.addEventListener('click', function() {
						if ($('#explaination-username').text() != "Alter your account's Username.") {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Username_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Username_Explaination.setAttribute('id', 'explaination-username');

							HTMLParagraphElement_Display_Profile_Username_Explaination.textContent = "Alter your account's Username.";

							HTMLParagraphElement_Display_Profile_Username_Explaination.style.gridColumnStart = 1;
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.gridColumnEnd = 3;
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.gridRow = 5;
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Username_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Username_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Username);

					// Create the element
					let HTMLInputElement_Display_Profile_Username = document.createElement('input');

					HTMLInputElement_Display_Profile_Username.setAttribute('id', 'profile-username');
					HTMLInputElement_Display_Profile_Username.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Username.setAttribute('name', 'username');

					HTMLInputElement_Display_Profile_Username.style.gridColumn = 2;
					HTMLInputElement_Display_Profile_Username.style.gridRow = 4;
					HTMLInputElement_Display_Profile_Username.style.justifySelf = 'center';
					HTMLInputElement_Display_Profile_Username.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Username.style.height = '20px';
					HTMLInputElement_Display_Profile_Username.style.width = '90%';
					HTMLInputElement_Display_Profile_Username.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Username.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Username.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Username.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Username.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Username.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Username.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Username.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Username.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Username.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Username.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Username.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Username.style.border = 'none';
								HTMLInputElement_Display_Profile_Username.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Username.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Username.style.outline = 'none';
							HTMLInputElement_Display_Profile_Username.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Username);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Password = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Password.textContent = 'Password:';

					HTMLParagraphElement_Display_Profile_Password.style.gridColumn = 1;
					HTMLParagraphElement_Display_Profile_Password.style.gridRow = 6;
					HTMLParagraphElement_Display_Profile_Password.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Password.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Password.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Password.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Password.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Password.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Password.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Password.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Password.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Password.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Password.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Password.addEventListener('click', function() {
						if ($('#explaination-password').text() != "Alter your account's Password.") {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Password_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Password_Explaination.setAttribute('id', 'explaination-password');

							HTMLParagraphElement_Display_Profile_Password_Explaination.textContent = "Alter your account's Password.";

							HTMLParagraphElement_Display_Profile_Password_Explaination.style.gridColumnStart = 1;
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.gridColumnEnd = 3;
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.gridRow = 7;
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Password_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Password_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Password);

					// Create the element
					let HTMLInputElement_Display_Profile_Password = document.createElement('input');

					HTMLInputElement_Display_Profile_Password.setAttribute('id', 'profile-password');
					HTMLInputElement_Display_Profile_Password.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Password.setAttribute('type', 'password');
					HTMLInputElement_Display_Profile_Password.setAttribute('name', 'password');

					HTMLInputElement_Display_Profile_Password.style.gridColumn = 2;
					HTMLInputElement_Display_Profile_Password.style.gridRow = 6;
					HTMLInputElement_Display_Profile_Password.style.justifySelf = 'center';
					HTMLInputElement_Display_Profile_Password.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Password.style.height = '20px';
					HTMLInputElement_Display_Profile_Password.style.width = '90%';
					HTMLInputElement_Display_Profile_Password.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Password.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Password.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Password.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Password.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Password.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Password.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Password.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Password.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Password.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Password.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Password.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Password.style.border = 'none';
								HTMLInputElement_Display_Profile_Password.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Password.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Password.style.outline = 'none';
							HTMLInputElement_Display_Profile_Password.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Password);

					// Create the element
					let HTMLDivElement_Display_Profile_Name_Container = document.createElement('div');

					HTMLDivElement_Display_Profile_Name_Container.setAttribute('id', 'information-name-container');

					HTMLDivElement_Display_Profile_Name_Container.style.display = 'grid';
					HTMLDivElement_Display_Profile_Name_Container.style.gridTemplateColumns = '60px auto 60px auto';
					HTMLDivElement_Display_Profile_Name_Container.style.gridTemplateRows = '30px 20px';
					HTMLDivElement_Display_Profile_Name_Container.style.gridColumnStart = 1;
					HTMLDivElement_Display_Profile_Name_Container.style.gridColumnEnd = 3;
					HTMLDivElement_Display_Profile_Name_Container.style.gridRowStart = 8;
					HTMLDivElement_Display_Profile_Name_Container.style.gridRowEnd = 9;

					// Append the element
					$('#information-container').append(HTMLDivElement_Display_Profile_Name_Container);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Name_First = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Name_First.textContent = 'First:';

					HTMLParagraphElement_Display_Profile_Name_First.style.gridColumn = 1;
					HTMLParagraphElement_Display_Profile_Name_First.style.gridRow = 1;
					HTMLParagraphElement_Display_Profile_Name_First.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Name_First.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Name_First.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Name_First.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Name_First.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Name_First.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Name_First.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Name_First.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Name_First.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Name_First.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Name_First.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Name_First.addEventListener('click', function() {
						if ($('#explaination-name-first').text() != "Alter your account's associated name." && $('#explaination-name-last').text() != "Alter your account's associated name.") {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Name_First_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Name_First_Explaination.setAttribute('id', 'explaination-name-first');

							HTMLParagraphElement_Display_Profile_Name_First_Explaination.textContent = "Alter your account's associated name.";

							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.gridColumnStart = 1;
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.gridColumnEnd = 4;
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.gridRow = 2;
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Name_First_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-name-container').append(HTMLParagraphElement_Display_Profile_Name_First_Explaination);
						}
					});

					// Append the element
					$('#information-name-container').append(HTMLParagraphElement_Display_Profile_Name_First);

					// Create the element
					let HTMLInputElement_Display_Profile_Name_First = document.createElement('input');

					HTMLInputElement_Display_Profile_Name_First.setAttribute('id', 'profile-name-first');
					HTMLInputElement_Display_Profile_Name_First.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Name_First.setAttribute('name', 'firstname');

					HTMLInputElement_Display_Profile_Name_First.style.gridColumn = 2;
					HTMLInputElement_Display_Profile_Name_First.style.gridRow = 1;
					HTMLInputElement_Display_Profile_Name_First.style.justifySelf = 'center';
					HTMLInputElement_Display_Profile_Name_First.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Name_First.style.height = '20px';
					HTMLInputElement_Display_Profile_Name_First.style.width = '90%';
					HTMLInputElement_Display_Profile_Name_First.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Name_First.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Name_First.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Name_First.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Name_First.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Name_First.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Name_First.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Name_First.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Name_First.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Name_First.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Name_First.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Name_First.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Name_First.style.border = 'none';
								HTMLInputElement_Display_Profile_Name_First.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Name_First.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Name_First.style.outline = 'none';
							HTMLInputElement_Display_Profile_Name_First.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-name-container').append(HTMLInputElement_Display_Profile_Name_First);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Name_Last = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Name_Last.textContent = 'Last:';

					HTMLParagraphElement_Display_Profile_Name_Last.style.gridColumn = 3;
					HTMLParagraphElement_Display_Profile_Name_Last.style.gridRow = 1;
					HTMLParagraphElement_Display_Profile_Name_Last.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Name_Last.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Name_Last.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Name_Last.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Name_Last.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Name_Last.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Name_Last.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Name_Last.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Name_Last.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Name_Last.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Name_Last.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Name_Last.addEventListener('click', function() {
						if ($('#explaination-name-first').text() != "Alter your account's associated name." && $('#explaination-name-last').text() != "Alter your account's associated name.") {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Name_Last_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.setAttribute('id', 'explaination-name-last');

							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.textContent = "Alter your account's associated name.";

							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.gridColumnStart = 1;
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.gridColumnEnd = 4;
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.gridRow = 2;
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Name_Last_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-name-container').append(HTMLParagraphElement_Display_Profile_Name_Last_Explaination);
						}
					});

					// Append the element
					$('#information-name-container').append(HTMLParagraphElement_Display_Profile_Name_Last);

					// Create the element
					let HTMLInputElement_Display_Profile_Name_Last = document.createElement('input');

					HTMLInputElement_Display_Profile_Name_Last.setAttribute('id', 'profile-name-last');
					HTMLInputElement_Display_Profile_Name_Last.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Name_Last.setAttribute('name', 'lastname');

					HTMLInputElement_Display_Profile_Name_Last.style.gridColumn = 4;
					HTMLInputElement_Display_Profile_Name_Last.style.gridRow = 1;
					HTMLInputElement_Display_Profile_Name_Last.style.justifySelf = 'center';
					HTMLInputElement_Display_Profile_Name_Last.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Name_Last.style.height = '20px';
					HTMLInputElement_Display_Profile_Name_Last.style.width = '90%';
					HTMLInputElement_Display_Profile_Name_Last.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Name_Last.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Name_Last.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Name_Last.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Name_Last.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Name_Last.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Name_Last.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Name_Last.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Name_Last.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Name_Last.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Name_Last.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Name_Last.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Name_Last.style.border = 'none';
								HTMLInputElement_Display_Profile_Name_Last.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Name_Last.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Name_Last.style.outline = 'none';
							HTMLInputElement_Display_Profile_Name_Last.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-name-container').append(HTMLInputElement_Display_Profile_Name_Last);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Alias = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Alias.textContent = 'Alias:';

					HTMLParagraphElement_Display_Profile_Alias.style.gridColumn = 1;
					HTMLParagraphElement_Display_Profile_Alias.style.gridRow = 10;
					HTMLParagraphElement_Display_Profile_Alias.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Alias.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Alias.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Alias.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Alias.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Alias.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Alias.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Alias.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Alias.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Alias.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Alias.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Alias.addEventListener('click', function() {
						if ($('#explaination-alias').text() != "Alter your account's Alias.") {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Alias_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Alias_Explaination.setAttribute('id', 'explaination-alias');

							HTMLParagraphElement_Display_Profile_Alias_Explaination.textContent = "Alter your account's Alias.";

							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.gridColumnStart = 1;
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.gridColumnEnd = 3;
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.gridRow = 11;
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Alias_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Alias_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Alias);

					// Create the element
					let HTMLInputElement_Display_Profile_Alias = document.createElement('input');

					HTMLInputElement_Display_Profile_Alias.setAttribute('id', 'profile-alias');
					HTMLInputElement_Display_Profile_Alias.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Alias.setAttribute('type', 'text');
					HTMLInputElement_Display_Profile_Alias.setAttribute('name', 'alias');

					HTMLInputElement_Display_Profile_Alias.style.gridColumn = 2;
					HTMLInputElement_Display_Profile_Alias.style.gridRow = 10;
					HTMLInputElement_Display_Profile_Alias.style.justifySelf = 'center';
					HTMLInputElement_Display_Profile_Alias.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Alias.style.height = '20px';
					HTMLInputElement_Display_Profile_Alias.style.width = '90%';
					HTMLInputElement_Display_Profile_Alias.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Alias.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Alias.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Alias.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Alias.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Alias.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Alias.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Alias.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Alias.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Alias.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Alias.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Alias.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Alias.style.border = 'none';
								HTMLInputElement_Display_Profile_Alias.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Alias.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Alias.style.outline = 'none';
							HTMLInputElement_Display_Profile_Alias.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Alias);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Gender = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Gender.textContent = 'Gender:';

					HTMLParagraphElement_Display_Profile_Gender.style.gridColumn = 1;
					HTMLParagraphElement_Display_Profile_Gender.style.gridRow = 12;
					HTMLParagraphElement_Display_Profile_Gender.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Gender.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Gender.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Gender.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Gender.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Gender.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Gender.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Gender.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Gender.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Gender.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Gender.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Gender.addEventListener('click', function() {
						if ($('#explaination-gender').text() != 'Alter your Gender.') {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Gender_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Gender_Explaination.setAttribute('id', 'explaination-gender');

							HTMLParagraphElement_Display_Profile_Gender_Explaination.textContent = 'Alter your Gender.';

							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.gridColumnStart = 1;
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.gridColumnEnd = 3;
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.gridRow = 13;
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Gender_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Gender_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Gender);

					// Create the element
					let HTMLSelectElement_Display_Profile_Gender = document.createElement('select');

					HTMLSelectElement_Display_Profile_Gender.setAttribute('id', 'profile-gender');
					HTMLSelectElement_Display_Profile_Gender.setAttribute('form', 'profile-form');
					HTMLSelectElement_Display_Profile_Gender.setAttribute('name', 'gender');

					HTMLSelectElement_Display_Profile_Gender.style.gridColumn = 2;
					HTMLSelectElement_Display_Profile_Gender.style.gridRow = 12;
					HTMLSelectElement_Display_Profile_Gender.style.justifySelf = 'center';
					HTMLSelectElement_Display_Profile_Gender.style.alignSelf = 'center';
					HTMLSelectElement_Display_Profile_Gender.style.height = '20px';
					HTMLSelectElement_Display_Profile_Gender.style.width = '90%';
					HTMLSelectElement_Display_Profile_Gender.style.backgroundColor = '#f3f3f3';
					HTMLSelectElement_Display_Profile_Gender.style.fontFamily = 'Lato, sans-serif';
					HTMLSelectElement_Display_Profile_Gender.style.border = 'none';
					$('#profile-gender').css('appearnace', 'menuarrow');
					$('#profile-gender').css('-moz-appearnace', 'menuarrow');
					$('#profile-gender').css('-webkit-appearnace', 'menuarrow');

					// Append the element
					$('#information-container').append(HTMLSelectElement_Display_Profile_Gender);

					// Add the event listner
					HTMLSelectElement_Display_Profile_Gender.addEventListener('click', function() {
						if ($('#profile-gender').text() != '') {
							HTMLSelectElement_Display_Profile_Gender.style.backgroundColor = 'transparent';
							HTMLSelectElement_Display_Profile_Gender.style.borderBottom = '1px solid #ffcb15';
						}
					});

					// Create the element
					let HTMLOptionElement_Display_Profile_Gender_Default = document.createElement('option');

					HTMLOptionElement_Display_Profile_Gender_Default.setAttribute('id', 'profile-gender-default');
					HTMLOptionElement_Display_Profile_Gender_Default.setAttribute('form', 'profile-form');
					HTMLOptionElement_Display_Profile_Gender_Default.setAttribute('value', '');
					HTMLOptionElement_Display_Profile_Gender_Default.setAttribute('hidden', 'true');
					HTMLOptionElement_Display_Profile_Gender_Default.setAttribute('default', 'true');

					HTMLOptionElement_Display_Profile_Gender_Default.textContent = '';

					// Append the element
					$('#profile-gender').append(HTMLOptionElement_Display_Profile_Gender_Default);

					// Create the element
					let HTMLOptionElement_Display_Profile_Gender_Male = document.createElement('option');

					HTMLOptionElement_Display_Profile_Gender_Male.setAttribute('id', 'profile-gender-male');
					HTMLOptionElement_Display_Profile_Gender_Male.setAttribute('form', 'profile-form');
					HTMLOptionElement_Display_Profile_Gender_Male.setAttribute('value', 'male');

					HTMLOptionElement_Display_Profile_Gender_Male.textContent = 'Male';

					// Append the element
					$('#profile-gender').append(HTMLOptionElement_Display_Profile_Gender_Male);

					// Create the element
					let HTMLOptionElement_Display_Profile_Gender_Female = document.createElement('option');

					HTMLOptionElement_Display_Profile_Gender_Female.setAttribute('id', 'profile-gender-female');
					HTMLOptionElement_Display_Profile_Gender_Female.setAttribute('form', 'profile-form');
					HTMLOptionElement_Display_Profile_Gender_Female.setAttribute('value', 'female');

					HTMLOptionElement_Display_Profile_Gender_Female.textContent = 'Female';

					// Append the element
					$('#profile-gender').append(HTMLOptionElement_Display_Profile_Gender_Female);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Age = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Age.textContent = 'Age:';

					HTMLParagraphElement_Display_Profile_Age.style.gridColumn = 4;
					HTMLParagraphElement_Display_Profile_Age.style.gridRow = 2;
					HTMLParagraphElement_Display_Profile_Age.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Age.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Age.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Age.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Age.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Age.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Age.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Age.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Age.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Age.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Age.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Age.addEventListener('click', function() {
						if ($('#explaination-age').text() != 'Set your age.') {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Age_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Age_Explaination.setAttribute('id', 'explaination-age');

							HTMLParagraphElement_Display_Profile_Age_Explaination.textContent = 'Set your age.';

							HTMLParagraphElement_Display_Profile_Age_Explaination.style.gridColumnStart = 4;
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.gridColumnEnd = 6;
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.gridRow = 3;
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Age_Explaination.style.padding = '0px 0px 0px 20px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Age_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Age);

					// Create the element
					let HTMLInputElement_Display_Profile_Age = document.createElement('input');

					HTMLInputElement_Display_Profile_Age.setAttribute('id', 'profile-age');
					HTMLInputElement_Display_Profile_Age.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Age.setAttribute('type', 'number');
					HTMLInputElement_Display_Profile_Age.setAttribute('name', 'age');

					HTMLInputElement_Display_Profile_Age.style.gridColumn = 5;
					HTMLInputElement_Display_Profile_Age.style.gridRow = 2;
					HTMLInputElement_Display_Profile_Age.style.justifySelf = 'start';
					HTMLInputElement_Display_Profile_Age.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Age.style.height = '20px';
					HTMLInputElement_Display_Profile_Age.style.width = '20%';
					HTMLInputElement_Display_Profile_Age.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Age.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Age.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Age.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Age.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Age.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Age.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Age.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Age.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Age.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Age.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Age.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Age.style.border = 'none';
								HTMLInputElement_Display_Profile_Age.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Age.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Age.style.outline = 'none';
							HTMLInputElement_Display_Profile_Age.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Age);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Occupation = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Occupation.textContent = 'Occupation:';

					HTMLParagraphElement_Display_Profile_Occupation.style.gridColumn = 4;
					HTMLParagraphElement_Display_Profile_Occupation.style.gridRow = 4;
					HTMLParagraphElement_Display_Profile_Occupation.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Occupation.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Occupation.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Occupation.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Occupation.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Occupation.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Occupation.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Occupation.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Occupation.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Occupation.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Occupation.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Occupation.addEventListener('click', function() {
						if ($('#explaination-occupation').text() != 'Set your Occupation.') {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Occupation_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Occupation_Explaination.setAttribute('id', 'explaination-occupation');

							HTMLParagraphElement_Display_Profile_Occupation_Explaination.textContent = 'Set your Occupation.';

							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.gridColumnStart = 4;
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.gridColumnEnd = 6;
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.gridRow = 5;
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Occupation_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Occupation_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Occupation);

					// Create the element
					let HTMLInputElement_Display_Profile_Occupation = document.createElement('input');

					HTMLInputElement_Display_Profile_Occupation.setAttribute('id', 'profile-occupation');
					HTMLInputElement_Display_Profile_Occupation.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Occupation.setAttribute('type', 'text');
					HTMLInputElement_Display_Profile_Occupation.setAttribute('name', 'occupation');

					HTMLInputElement_Display_Profile_Occupation.style.gridColumn = 5;
					HTMLInputElement_Display_Profile_Occupation.style.gridRow = 4;
					HTMLInputElement_Display_Profile_Occupation.style.justifySelf = 'start';
					HTMLInputElement_Display_Profile_Occupation.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Occupation.style.height = '20px';
					HTMLInputElement_Display_Profile_Occupation.style.width = '80%';
					HTMLInputElement_Display_Profile_Occupation.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Occupation.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Occupation.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Occupation.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Occupation.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Occupation.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Occupation.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Occupation.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Occupation.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Occupation.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Occupation.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Occupation.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Occupation.style.border = 'none';
								HTMLInputElement_Display_Profile_Occupation.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Occupation.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Occupation.style.outline = 'none';
							HTMLInputElement_Display_Profile_Occupation.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Occupation);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Company = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Company.textContent = 'Company:';

					HTMLParagraphElement_Display_Profile_Company.style.gridColumn = 4;
					HTMLParagraphElement_Display_Profile_Company.style.gridRow = 6;
					HTMLParagraphElement_Display_Profile_Company.style.justifySelf = 'center';
					HTMLParagraphElement_Display_Profile_Company.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Company.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Company.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Company.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Company.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Company.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Company.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Company.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Company.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Company.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Company.addEventListener('click', function() {
						if ($('#explaination-company').text() != 'Set you employer or the Company you work for.') {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Company_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Company_Explaination.setAttribute('id', 'explaination-company');

							HTMLParagraphElement_Display_Profile_Company_Explaination.textContent = 'Set you employer or the Company you work for.';

							HTMLParagraphElement_Display_Profile_Company_Explaination.style.gridColumnStart = 4;
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.gridColumnEnd = 6;
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.gridRow = 7;
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Company_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Company_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Company);

					// Create the element
					let HTMLInputElement_Display_Profile_Company = document.createElement('input');

					HTMLInputElement_Display_Profile_Company.setAttribute('id', 'profile-company');
					HTMLInputElement_Display_Profile_Company.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Company.setAttribute('type', 'text');
					HTMLInputElement_Display_Profile_Company.setAttribute('name', 'company');

					HTMLInputElement_Display_Profile_Company.style.gridColumn = 5;
					HTMLInputElement_Display_Profile_Company.style.gridRow = 6;
					HTMLInputElement_Display_Profile_Company.style.justifySelf = 'start';
					HTMLInputElement_Display_Profile_Company.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Company.style.height = '20px';
					HTMLInputElement_Display_Profile_Company.style.width = '80%';
					HTMLInputElement_Display_Profile_Company.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Company.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Company.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Company.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Company.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Company.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Company.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Company.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Company.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Company.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Company.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Company.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Company.style.border = 'none';
								HTMLInputElement_Display_Profile_Company.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Company.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Company.style.outline = 'none';
							HTMLInputElement_Display_Profile_Company.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Company);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Company_Website = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Company_Website.textContent = 'Company Website:';

					HTMLParagraphElement_Display_Profile_Company_Website.style.gridColumnStart = 4;
					HTMLParagraphElement_Display_Profile_Company_Website.style.gridColumnEnd = 6;
					HTMLParagraphElement_Display_Profile_Company_Website.style.gridRow = 8;
					HTMLParagraphElement_Display_Profile_Company_Website.style.justifySelf = 'start';
					HTMLParagraphElement_Display_Profile_Company_Website.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Company_Website.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Company_Website.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Company_Website.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Company_Website.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Company_Website.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Company_Website.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Company_Website.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Company_Website.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Company_Website.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Company_Website.addEventListener('click', function() {
						if ($('#explaination-company-website').text() != "Set your company's Website/Web Address.") {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Company_Website_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.setAttribute('id', 'explaination-company-website');

							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.textContent = "Set your company's Website/Web Address.";

							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.gridColumnStart = 4;
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.gridColumnEnd = 6;
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.gridRow = 9;
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Company_Website_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Company_Website_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Company_Website);

					// Create the element
					let HTMLInputElement_Display_Profile_Company_Website = document.createElement('input');

					HTMLInputElement_Display_Profile_Company_Website.setAttribute('id', 'profile-companywebsite');
					HTMLInputElement_Display_Profile_Company_Website.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Company_Website.setAttribute('type', 'text');
					HTMLInputElement_Display_Profile_Company_Website.setAttribute('name', 'companywebsite');

					HTMLInputElement_Display_Profile_Company_Website.style.gridColumn = 5;
					HTMLInputElement_Display_Profile_Company_Website.style.gridRow = 8;
					HTMLInputElement_Display_Profile_Company_Website.style.justifySelf = 'start';
					HTMLInputElement_Display_Profile_Company_Website.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Company_Website.style.height = '20px';
					HTMLInputElement_Display_Profile_Company_Website.style.width = '66%';
					HTMLInputElement_Display_Profile_Company_Website.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Company_Website.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Company_Website.style.border = 'none';
					HTMLInputElement_Display_Profile_Company_Website.style.marginLeft = '35px';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Company_Website.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Company_Website.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Company_Website.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Company_Website.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Company_Website.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Company_Website.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Company_Website.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Company_Website.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Company_Website.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Company_Website.style.border = 'none';
								HTMLInputElement_Display_Profile_Company_Website.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Company_Website.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Company_Website.style.outline = 'none';
							HTMLInputElement_Display_Profile_Company_Website.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Company_Website);

					// Create the element
					let HTMLParagraphElement_Display_Profile_Personal_Website = document.createElement('p');

					HTMLParagraphElement_Display_Profile_Personal_Website.textContent = 'Portfolio:';

					HTMLParagraphElement_Display_Profile_Personal_Website.style.gridColumn = 4;
					HTMLParagraphElement_Display_Profile_Personal_Website.style.gridRow = 10;
					HTMLParagraphElement_Display_Profile_Personal_Website.style.justifySelf = 'start';
					HTMLParagraphElement_Display_Profile_Personal_Website.style.alignSelf = 'center';
					HTMLParagraphElement_Display_Profile_Personal_Website.style.color = '#333';
					HTMLParagraphElement_Display_Profile_Personal_Website.style.fontFamily = 'Lato, sans-serif';
					HTMLParagraphElement_Display_Profile_Personal_Website.style.fontSize = '0.8em';
					HTMLParagraphElement_Display_Profile_Personal_Website.style.fontWeight = 300;
					HTMLParagraphElement_Display_Profile_Personal_Website.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Personal_Website.addEventListener('mouseover', function() {
						HTMLParagraphElement_Display_Profile_Personal_Website.style.textDecoration = 'underline';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Personal_Website.addEventListener('mouseout', function() {
						HTMLParagraphElement_Display_Profile_Personal_Website.style.textDecoration = 'none';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLParagraphElement_Display_Profile_Personal_Website.addEventListener('click', function() {
						if ($('#explaination-personal-website').text() != 'Set a link to your current personal Portfolio.') {
							// Create the element
							let HTMLParagraphElement_Display_Profile_Personal_Website_Explaination = document.createElement('p');

							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.setAttribute('id', 'explaination-personal-website');

							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.textContent = 'Set a link to your current personal Portfolio.';

							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.gridColumnStart = 4;
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.gridColumnEnd = 6;
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.gridRow = 11;
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.justifySelf = 'start';
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.alignSelf = 'start';
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.fontFamily = 'Lato, sans-serif';
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.fontSize = '0.8em';
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.fontWeight = 300;
							HTMLParagraphElement_Display_Profile_Personal_Website_Explaination.style.padding = '0px 0px 0px 15px';

							// Append the element
							$('#information-container').append(HTMLParagraphElement_Display_Profile_Personal_Website_Explaination);
						}
					});

					// Append the element
					$('#information-container').append(HTMLParagraphElement_Display_Profile_Personal_Website);

					// Create the element
					let HTMLInputElement_Display_Profile_Personal_Website = document.createElement('input');

					HTMLInputElement_Display_Profile_Personal_Website.setAttribute('id', 'profile-personalwebsite');
					HTMLInputElement_Display_Profile_Personal_Website.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Personal_Website.setAttribute('type', 'text');
					HTMLInputElement_Display_Profile_Personal_Website.setAttribute('name', 'personalwebsite');

					HTMLInputElement_Display_Profile_Personal_Website.style.gridColumn = 5;
					HTMLInputElement_Display_Profile_Personal_Website.style.gridRow = 10;
					HTMLInputElement_Display_Profile_Personal_Website.style.justifySelf = 'start';
					HTMLInputElement_Display_Profile_Personal_Website.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Personal_Website.style.height = '20px';
					HTMLInputElement_Display_Profile_Personal_Website.style.width = '80%';
					HTMLInputElement_Display_Profile_Personal_Website.style.backgroundColor = '#f3f3f3';
					HTMLInputElement_Display_Profile_Personal_Website.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Personal_Website.style.border = 'none';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Personal_Website.addEventListener(
						'click',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Personal_Website.style.backgroundColor = 'transparent';
							HTMLInputElement_Display_Profile_Personal_Website.style.borderTop = 'none';
							HTMLInputElement_Display_Profile_Personal_Website.style.borderRight = 'none';
							HTMLInputElement_Display_Profile_Personal_Website.style.borderBottom = '1px solid #ffcb15';
							HTMLInputElement_Display_Profile_Personal_Website.style.borderLeft = 'none';
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Personal_Website.addEventListener(
						'focusout',
						function() {
							// Check if there is a value
							if (HTMLInputElement_Display_Profile_Personal_Website.value == '') {
								// Style the element
								HTMLInputElement_Display_Profile_Personal_Website.style.backgroundColor = '#f3f3f3';
								HTMLInputElement_Display_Profile_Personal_Website.style.border = 'none';
								HTMLInputElement_Display_Profile_Personal_Website.style.paddingLeft = '5px';
							}
						},
						true
					);

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Personal_Website.addEventListener(
						'focus',
						function() {
							// Style the element
							HTMLInputElement_Display_Profile_Personal_Website.style.outline = 'none';
							HTMLInputElement_Display_Profile_Personal_Website.style.paddingLeft = '0px';
						},
						true
					);

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Personal_Website);

					// Create the element
					let HTMLInputElement_Display_Profile_Submit = document.createElement('input');

					HTMLInputElement_Display_Profile_Submit.setAttribute('id', 'profile-submit');
					HTMLInputElement_Display_Profile_Submit.setAttribute('form', 'profile-form');
					HTMLInputElement_Display_Profile_Submit.setAttribute('type', 'submit');
					HTMLInputElement_Display_Profile_Submit.setAttribute('placeholder', 'Update');

					HTMLInputElement_Display_Profile_Submit.style.gridColumnStart = 4;
					HTMLInputElement_Display_Profile_Submit.style.gridColumnEnd = 6;
					HTMLInputElement_Display_Profile_Submit.style.gridRow = 12;
					HTMLInputElement_Display_Profile_Submit.style.justifySelf = 'start';
					HTMLInputElement_Display_Profile_Submit.style.alignSelf = 'center';
					HTMLInputElement_Display_Profile_Submit.style.height = '20px';
					HTMLInputElement_Display_Profile_Submit.style.width = '60%';
					HTMLInputElement_Display_Profile_Submit.style.color = '#FFFFFF';
					HTMLInputElement_Display_Profile_Submit.style.backgroundColor = '#18cf05';
					HTMLInputElement_Display_Profile_Submit.style.fontFamily = 'Lato, sans-serif';
					HTMLInputElement_Display_Profile_Submit.style.fontSize = '0.8em';
					HTMLInputElement_Display_Profile_Submit.style.fontWeight = 300;
					HTMLInputElement_Display_Profile_Submit.style.border = 'none';
					HTMLInputElement_Display_Profile_Submit.style.marginRight = '50px';
					HTMLInputElement_Display_Profile_Submit.style.cursor = 'pointer';

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Submit.addEventListener('mouseover', function() {
						HTMLInputElement_Display_Profile_Submit.style.backgroundColor = '#13c201';
					});

					/*
                	on, bind and click methods do not work when referencing a declaration of a DOMElement
                	TypeError!
                	*/
					// Add the event listner
					HTMLInputElement_Display_Profile_Submit.addEventListener('mouseout', function() {
						HTMLInputElement_Display_Profile_Submit.style.backgroundColor = '#18cf05';
					});

					// Append the element
					$('#information-container').append(HTMLInputElement_Display_Profile_Submit);
				},
				true
			);

			// Append the element
			$('#header-profile').append(HTMLParagraphElement_Profile_Header_Profile_Heading);

			// Create the element
			let HTMLDivElement_Profile_Header_Privacy = document.createElement('div');

			HTMLDivElement_Profile_Header_Privacy.setAttribute('id', 'header-privacy');

			HTMLDivElement_Profile_Header_Privacy.style.display = 'grid';
			HTMLDivElement_Profile_Header_Privacy.style.gridColumn = 2;
			HTMLDivElement_Profile_Header_Privacy.style.gridRow = 'auto';
			HTMLDivElement_Profile_Header_Privacy.style.height = '100%';
			HTMLDivElement_Profile_Header_Privacy.style.width = '100px';
			HTMLDivElement_Profile_Header_Privacy.style.backgroundColor = '#12c500';
			HTMLDivElement_Profile_Header_Privacy.style.borderTop = '2px solid #efefef';

			// Append the element
			$('#information-header-container').append(HTMLDivElement_Profile_Header_Privacy);

			// Create the element
			let HTMLParagraphElement_Profile_Header_Privacy_Heading = document.createElement('p');

			HTMLParagraphElement_Profile_Header_Privacy_Heading.textContent = 'Privacy';

			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.justifySelf = 'center';
			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.alignSelf = 'center';
			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.color = '#FFFFFF';
			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.fontFamily = 'Lato, sans-serif';
			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.fontSize = '0.8em';
			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.fontWeight = 300;
			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.letterSpacing = '0.5px';
			HTMLParagraphElement_Profile_Header_Privacy_Heading.style.cursor = 'pointer';

			/*
            	on, bind and click methods do not work when referencing a declaration of a DOMElement
            	TypeError!
            	*/
			// dd the event listner
			HTMLParagraphElement_Profile_Header_Privacy_Heading.addEventListener(
				'click',
				function() {
					// Delete all children and sibling elements
					$('#information-container').empty();
				},
				true
			);

			// Append the element
			$('#header-privacy').append(HTMLParagraphElement_Profile_Header_Privacy_Heading);

			// Create the element
			var HTMLDivElement_Display_Container = document.createElement('div');

			HTMLDivElement_Display_Container.setAttribute('id', 'information-container');

			HTMLDivElement_Display_Container.style.display = 'grid';
			HTMLDivElement_Display_Container.style.gridColumn = 'auto';
			HTMLDivElement_Display_Container.style.gridRow = 2;
			HTMLDivElement_Display_Container.style.backgroundColor = '#fcfcfc';
			HTMLDivElement_Display_Container.style.borderLeft = '2px solid #efefef';

			// Append the element
			$('#profile-information-edit').append(HTMLDivElement_Display_Container);
		}
		else if ($('#administrative-edit').text() == 'Cancel') {
			// Change the text content
			$('#administrative-edit').text('Edit');

			// Remove the element
			$('#profile-information-edit').remove();
		}
	});
});
