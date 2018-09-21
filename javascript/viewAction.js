// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// Add event listner
document.addEventListener(
	'DOMContentLoaded',
	function() {
		// Declare and define the variables
		var EditMode = false;

		if (document.getElementById('actions-edit')) {
			// Add event listner
			document.getElementById('actions-edit').addEventListener(
				'click',
				function() {
					// Save the current content
					var currentContent = document.getElementById('details-content').innerHTML;

					// Check to make sure the edit area doesn't already exist
					if (!document.getElementById('content-edit-container')) {
						// Create the edit area

						// Create the element
						let HTMLDivElement_Edit_Container = document.createElement('div');

						// Set the element attributes
						HTMLDivElement_Edit_Container.setAttribute('id', 'content-edit-container');

						// Style the element
						HTMLDivElement_Edit_Container.style.display = 'grid';
						HTMLDivElement_Edit_Container.style.gridColumnStart = 1;
						HTMLDivElement_Edit_Container.style.gridColumnEnd = 3;
						HTMLDivElement_Edit_Container.style.gridRow = 5;
						HTMLDivElement_Edit_Container.style.gridTemplateColumns = '150px 1fr';
						HTMLDivElement_Edit_Container.style.gridTemplateRows = '30px 1fr';
						HTMLDivElement_Edit_Container.style.borderTop = '1px solid #000000';

						// Append the child
						document.getElementById('grid-content__loggedin').appendChild(HTMLDivElement_Edit_Container);

						// Create the element
						let HTMLHeadingElement_Edit_Heading = document.createElement('h2');

						// Set the text content
						HTMLHeadingElement_Edit_Heading.textContent = 'Edit';

						// Style the element
						HTMLHeadingElement_Edit_Heading.style.gridColumn = 1;
						HTMLHeadingElement_Edit_Heading.style.gridRow = 1;
						HTMLHeadingElement_Edit_Heading.style.justifySelf = 'start';
						HTMLHeadingElement_Edit_Heading.style.alignSelf = 'center';
						HTMLHeadingElement_Edit_Heading.style.color = '#000000';
						HTMLHeadingElement_Edit_Heading.style.fontFamily = 'Lato, sans-serif';
						HTMLHeadingElement_Edit_Heading.style.fontWeight = 500;
						HTMLHeadingElement_Edit_Heading.style.paddingLeft = '10px';

						// Append the child
						document.getElementById('content-edit-container').appendChild(HTMLHeadingElement_Edit_Heading);

						// Create the element
						let HTMLDivElement_Edit_Information_Container = document.createElement('div');

						// Set the element attributes
						HTMLDivElement_Edit_Information_Container.setAttribute('id', 'edit-information-container');

						// Style the element
						HTMLDivElement_Edit_Information_Container.style.display = 'grid';
						HTMLDivElement_Edit_Information_Container.style.gridColumn = 2;
						HTMLDivElement_Edit_Information_Container.style.gridRow = 2;
						HTMLDivElement_Edit_Information_Container.style.gridTemplateColumns = 'auto auto 1fr';
						HTMLDivElement_Edit_Information_Container.style.gridTemplateRows = '25px 25px 25px 170px 25px 25px 25px';

						// Append the child
						document.getElementById('content-edit-container').appendChild(HTMLDivElement_Edit_Information_Container);

						// Create the element
						let HTMLParagraphElement_Edit_Information_User = document.createElement('p');

						// Set the text content
						HTMLParagraphElement_Edit_Information_User.textContent = 'User:';

						// Style the element
						HTMLParagraphElement_Edit_Information_User.style.gridColumn = 1;
						HTMLParagraphElement_Edit_Information_User.style.gridRow = 1;
						HTMLParagraphElement_Edit_Information_User.style.justifySelf = 'center';
						HTMLParagraphElement_Edit_Information_User.style.alignSelf = 'center';
						HTMLParagraphElement_Edit_Information_User.style.fontFamily = 'Lato, sans-serif';
						HTMLParagraphElement_Edit_Information_User.style.fontWeight = 500;
						HTMLParagraphElement_Edit_Information_User.style.fontSize = '1em';
						HTMLParagraphElement_Edit_Information_User.style.paddingRight = '5px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLParagraphElement_Edit_Information_User);

						// Create the element
						let HTMLParagraphElement_Edit_Information_Username = document.createElement('p');

						// Set the text content
						HTMLParagraphElement_Edit_Information_Username.textContent = document.getElementById('content-user').innerHTML;

						// Set the element attributes
						HTMLParagraphElement_Edit_Information_Username.setAttribute('id', 'information-user');

						// Style the element
						HTMLParagraphElement_Edit_Information_Username.style.gridColumn = 2;
						HTMLParagraphElement_Edit_Information_Username.style.gridRow = 1;
						HTMLParagraphElement_Edit_Information_Username.style.justifySelf = 'start';
						HTMLParagraphElement_Edit_Information_Username.style.alignSelf = 'center';
						HTMLParagraphElement_Edit_Information_Username.style.fontFamily = 'Lato, sans-serif';
						HTMLParagraphElement_Edit_Information_Username.style.fontWeight = 500;
						HTMLParagraphElement_Edit_Information_Username.style.fontSize = '1em';
						HTMLParagraphElement_Edit_Information_Username.style.padding = '0px 2.5px 0px 2.5px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLParagraphElement_Edit_Information_Username);

						// Create the element
						let HTMLParagraphElement_Edit_Information_Ban = document.createElement('p');

						// Set the text content
						HTMLParagraphElement_Edit_Information_Ban.textContent = 'Ban ID:';

						// Style the element
						HTMLParagraphElement_Edit_Information_Ban.style.gridColumn = 1;
						HTMLParagraphElement_Edit_Information_Ban.style.gridRow = 2;
						HTMLParagraphElement_Edit_Information_Ban.style.justifySelf = 'center';
						HTMLParagraphElement_Edit_Information_Ban.style.alignSelf = 'center';
						HTMLParagraphElement_Edit_Information_Ban.style.fontFamily = 'Lato, sans-serif';
						HTMLParagraphElement_Edit_Information_Ban.style.fontWeight = 500;
						HTMLParagraphElement_Edit_Information_Ban.style.fontSize = '1em';
						HTMLParagraphElement_Edit_Information_Ban.style.paddingRight = '5px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLParagraphElement_Edit_Information_Ban);

						// Create the element
						let HTMLParagraphElement_Edit_Information_BanID = document.createElement('p');

						// Set the text content
						HTMLParagraphElement_Edit_Information_BanID.textContent = document.getElementById('content-heading').getAttribute('data-banid');

						// Set the element attributes
						HTMLParagraphElement_Edit_Information_BanID.setAttribute('id', 'information-banid');

						// Style the element
						HTMLParagraphElement_Edit_Information_BanID.style.gridColumn = 2;
						HTMLParagraphElement_Edit_Information_BanID.style.gridRow = 2;
						HTMLParagraphElement_Edit_Information_BanID.style.justifySelf = 'start';
						HTMLParagraphElement_Edit_Information_BanID.style.alignSelf = 'center';
						HTMLParagraphElement_Edit_Information_BanID.style.fontFamily = 'Lato, sans-serif';
						HTMLParagraphElement_Edit_Information_BanID.style.fontWeight = 500;
						HTMLParagraphElement_Edit_Information_BanID.style.fontSize = '1em';
						HTMLParagraphElement_Edit_Information_BanID.style.padding = '0px 2.5px 0px 2.5px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLParagraphElement_Edit_Information_BanID);

						// Create the element
						let HTMLParagraphElement_Edit_Information_EndDate = document.createElement('p');

						// Set the text content
						HTMLParagraphElement_Edit_Information_EndDate.textContent = 'End Date:';

						// Style the element
						HTMLParagraphElement_Edit_Information_EndDate.style.gridColumn = 1;
						HTMLParagraphElement_Edit_Information_EndDate.style.gridRow = 3;
						HTMLParagraphElement_Edit_Information_EndDate.style.justifySelf = 'center';
						HTMLParagraphElement_Edit_Information_EndDate.style.alignSelf = 'center';
						HTMLParagraphElement_Edit_Information_EndDate.style.fontFamily = 'Lato, sans-serif';
						HTMLParagraphElement_Edit_Information_EndDate.style.fontWeight = 500;
						HTMLParagraphElement_Edit_Information_EndDate.style.fontSize = '1em';
						HTMLParagraphElement_Edit_Information_EndDate.style.padding = '0px 2.5px 0px 2.5px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLParagraphElement_Edit_Information_EndDate);

						// Create the element
						let HTMLInputElement_Edit_Information_EndDate = document.createElement('input');

						// Set the text content
						HTMLInputElement_Edit_Information_EndDate.textContent = document.getElementById('content-heading').getAttribute('data-banid');

						// Set the element attributes
						HTMLInputElement_Edit_Information_EndDate.setAttribute('id', 'information-enddate');
						HTMLInputElement_Edit_Information_EndDate.setAttribute('type', 'date');

						// Style the element
						HTMLInputElement_Edit_Information_EndDate.style.gridColumn = 2;
						HTMLInputElement_Edit_Information_EndDate.style.gridRow = 3;
						HTMLInputElement_Edit_Information_EndDate.style.justifySelf = 'start';
						HTMLInputElement_Edit_Information_EndDate.style.alignSelf = 'center';
						HTMLInputElement_Edit_Information_EndDate.style.fontFamily = 'Lato, sans-serif';
						HTMLInputElement_Edit_Information_EndDate.style.fontWeight = 300;
						HTMLInputElement_Edit_Information_EndDate.style.fontSize = '0.8em';
						HTMLInputElement_Edit_Information_EndDate.style.borderTop = 'none';
						HTMLInputElement_Edit_Information_EndDate.style.borderRight = 'none';
						HTMLInputElement_Edit_Information_EndDate.style.borderBottom = '1px solid #000000';
						HTMLInputElement_Edit_Information_EndDate.style.borderLeft = 'none';
						HTMLInputElement_Edit_Information_EndDate.style.marginLeft = '10px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLInputElement_Edit_Information_EndDate);

						// Create the element
						let HTMLParagraphElement_Edit_Information_Details = document.createElement('p');

						// Set the text content
						HTMLParagraphElement_Edit_Information_Details.textContent = 'Details:';

						// Style the element
						HTMLParagraphElement_Edit_Information_Details.style.gridColumn = 1;
						HTMLParagraphElement_Edit_Information_Details.style.gridRow = 4;
						HTMLParagraphElement_Edit_Information_Details.style.justifySelf = 'center';
						HTMLParagraphElement_Edit_Information_Details.style.alignSelf = 'start';
						HTMLParagraphElement_Edit_Information_Details.style.fontFamily = 'Lato, sans-serif';
						HTMLParagraphElement_Edit_Information_Details.style.fontWeight = 500;
						HTMLParagraphElement_Edit_Information_Details.style.fontSize = '1em';
						HTMLParagraphElement_Edit_Information_Details.style.padding = '5px 2.5px 0px 2.5px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLParagraphElement_Edit_Information_Details);

						// Create the element
						let HTMLInputElement_Edit_Information_Details = document.createElement('textarea');

						// Set the text content
						HTMLInputElement_Edit_Information_Details.textContent = document.getElementById('details-content').innerText;

						// Set the element attributes
						HTMLInputElement_Edit_Information_Details.setAttribute('id', 'information-details');

						// Style the element
						HTMLInputElement_Edit_Information_Details.style.gridColumn = 2;
						HTMLInputElement_Edit_Information_Details.style.gridRow = 4;
						HTMLInputElement_Edit_Information_Details.style.justifySelf = 'start';
						HTMLInputElement_Edit_Information_Details.style.alignSelf = 'start';
						HTMLInputElement_Edit_Information_Details.style.height = '150px';
						HTMLInputElement_Edit_Information_Details.style.width = '350%';
						HTMLInputElement_Edit_Information_Details.style.fontFamily = 'Lato, sans-serif';
						HTMLInputElement_Edit_Information_Details.style.fontWeight = 300;
						HTMLInputElement_Edit_Information_Details.style.fontSize = '0.8em';
						HTMLInputElement_Edit_Information_Details.style.borderTop = 'none';
						HTMLInputElement_Edit_Information_Details.style.borderRight = 'none';
						HTMLInputElement_Edit_Information_Details.style.borderBottom = '1px solid #000000';
						HTMLInputElement_Edit_Information_Details.style.borderLeft = 'none';
						HTMLInputElement_Edit_Information_Details.style.padding = '5px 2.5px 0px 2.5px';
						HTMLInputElement_Edit_Information_Details.style.resize = 'none';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLInputElement_Edit_Information_Details);

						// Create the element
						let HTMLParagraphElement_Edit_Information_EditReason = document.createElement('p');

						// Set the text content
						HTMLParagraphElement_Edit_Information_EditReason.textContent = 'Reason for Edit:';

						// Style the element
						HTMLParagraphElement_Edit_Information_EditReason.style.gridColumn = 1;
						HTMLParagraphElement_Edit_Information_EditReason.style.gridRow = 5;
						HTMLParagraphElement_Edit_Information_EditReason.style.justifySelf = 'center';
						HTMLParagraphElement_Edit_Information_EditReason.style.alignSelf = 'start';
						HTMLParagraphElement_Edit_Information_EditReason.style.fontFamily = 'Lato, sans-serif';
						HTMLParagraphElement_Edit_Information_EditReason.style.fontWeight = 500;
						HTMLParagraphElement_Edit_Information_EditReason.style.fontSize = '1em';
						HTMLParagraphElement_Edit_Information_EditReason.style.padding = '5px 2.5px 0px 2.5px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLParagraphElement_Edit_Information_EditReason);

						// Create the element
						let HTMLInputElement_Edit_Information_Reason = document.createElement('input');

						// Set the text content
						HTMLInputElement_Edit_Information_Reason.textContent = document.getElementById('content-heading').getAttribute('data-banid');

						// Set the element attributes
						HTMLInputElement_Edit_Information_Reason.setAttribute('id', 'information-reason');
						HTMLInputElement_Edit_Information_Reason.setAttribute('type', 'text');

						// Style the element
						HTMLInputElement_Edit_Information_Reason.style.gridColumn = 2;
						HTMLInputElement_Edit_Information_Reason.style.gridRow = 5;
						HTMLInputElement_Edit_Information_Reason.style.justifySelf = 'start';
						HTMLInputElement_Edit_Information_Reason.style.alignSelf = 'center';
						HTMLInputElement_Edit_Information_Reason.style.height = 'auto';
						HTMLInputElement_Edit_Information_Reason.style.width = '175%';
						HTMLInputElement_Edit_Information_Reason.style.fontFamily = 'Lato, sans-serif';
						HTMLInputElement_Edit_Information_Reason.style.fontWeight = 300;
						HTMLInputElement_Edit_Information_Reason.style.fontSize = '0.8em';
						HTMLInputElement_Edit_Information_Reason.style.borderTop = 'none';
						HTMLInputElement_Edit_Information_Reason.style.borderRight = 'none';
						HTMLInputElement_Edit_Information_Reason.style.borderBottom = '1px solid #000000';
						HTMLInputElement_Edit_Information_Reason.style.borderLeft = 'none';
						HTMLInputElement_Edit_Information_Reason.style.marginLeft = '10px';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLInputElement_Edit_Information_Reason);

						// Create the element
						let HTMLInputElement_Edit_Information_Submit = document.createElement('input');

						// Set the element attributes
						HTMLInputElement_Edit_Information_Submit.setAttribute('id', 'information-submit');
						HTMLInputElement_Edit_Information_Submit.setAttribute('type', 'button');
						HTMLInputElement_Edit_Information_Submit.setAttribute('value', 'Edit');

						// Style the element
						HTMLInputElement_Edit_Information_Submit.style.position = 'relative';
						HTMLInputElement_Edit_Information_Submit.style.bottom = '25px';
						HTMLInputElement_Edit_Information_Submit.style.left = '325px';
						HTMLInputElement_Edit_Information_Submit.style.gridColumn = 2;
						HTMLInputElement_Edit_Information_Submit.style.gridRow = 6;
						HTMLInputElement_Edit_Information_Submit.style.justifySelf = 'start';
						HTMLInputElement_Edit_Information_Submit.style.alignSelf = 'end';
						HTMLInputElement_Edit_Information_Submit.style.height = '100%';
						HTMLInputElement_Edit_Information_Submit.style.width = '75%';
						HTMLInputElement_Edit_Information_Submit.style.backgroundColor = '#FF0000';
						HTMLInputElement_Edit_Information_Submit.style.color = '#FFFFFF';
						HTMLInputElement_Edit_Information_Submit.style.fontFamily = 'Lato, sans-serif';
						HTMLInputElement_Edit_Information_Submit.style.fontWeight = 300;
						HTMLInputElement_Edit_Information_Submit.style.fontSize = '0.8em';
						HTMLInputElement_Edit_Information_Submit.style.border = 'none';
						HTMLInputElement_Edit_Information_Submit.style.borderRadius = '7px';
						HTMLInputElement_Edit_Information_Submit.style.outline = 'none';

						// Append the child
						document.getElementById('edit-information-container').appendChild(HTMLInputElement_Edit_Information_Submit);
					}

					switch (document.getElementById('actions-edit').textContent) {
						case 'Edit':
							// Change the variable value
							EditMode = true;

							// Alter the text content
							document.getElementById('actions-edit').textContent = 'Cancel';

							break;
						case 'Cancel':
							// Change the variable value
							EditMode = false;

							// Remove the element
							document.getElementById('content-edit-container').remove();

							// Alter the text content
							document.getElementById('actions-edit').textContent = 'Edit';

							break;
					}
				},
				true
			);
		}
		// Create the element
		let HTMLScriptElement_AJAX = document.createElement('script');

		// Set the element attributes
		HTMLScriptElement_AJAX.setAttribute('src', 'ajax/min/viewLoad.min.js');

		// Append the child
		document.getElementById('grid-content__loggedin').appendChild(HTMLScriptElement_AJAX);
	},
	true
);
