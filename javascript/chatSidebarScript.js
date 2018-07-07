// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Add the event listner
document.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Declare and define the variables
    var var_sliderOpened = false;
    var var_openedTab, var_tabTitle;

    // Function prototype

    var Sidebar_Destroy_Base_Layout = function(title) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        // Delete the elements
        document.getElementById("chat-sidebar-slider").removeChild(document.getElementById("slider-" + var_openedTab.toLowerCase()));
        document.getElementById("slider-close-container").removeChild(document.getElementById("slider-close"));
        document.getElementById("chat-sidebar-slider").removeChild(document.getElementById("slider-close-container"));

        // Set the variable to false
        var_sliderOpened = false;

        // Check what tab needs cleanup
        switch(var_openedTab) {
            case "Account":
            // Delete Account contents

            // Remove all parental elements from the accounts pane
            document.getElementById("slider-account-intro").remove();
            document.getElementById("account-intro-name").remove();
            document.getElementById("account-options-panel").remove();
            document.getElementById("account-controls-panel").remove();

            break;
            case "Users":
            // Delete Users contents

            break;
            case "Friends":
            // Delete Friends contents

            break;
            case "Blocked":
            // Delete Blocked contents

            break;
            case "Settings":
            // Delete Settings contents

            break;
        }

        // TODO: Make this switch statement arbitary and recursivly loop elements and remove them.

    };

    var Sidebar_Init_Base_Layout = function(title, gridTemplateColumns, gridTemplateRows, lastColumn, execTime) {

        // Set global tab title
        var_tabTitle = title;

        // Check if execTime has a value
        if(
            isNaN(execTime)
            || execTime == "0"
        ) {

            // If no param given set the param to 0
            execTime = 0;

        }

        // Wait execute time
        setTimeout(function() {

            // Create layout
            document.getElementById("chat-sidebar-slider").style.gridTemplateColumns = gridTemplateColumns;
            document.getElementById("chat-sidebar-slider").style.gridTemplateRows = gridTemplateRows;

            // Create the eleemnts

            // Create the heading
            let HTMLParagraphElement_Account_Settings = document.createElement("p");

            // Set the heading attributes
            HTMLParagraphElement_Account_Settings.setAttribute("id", "slider-" + title.toLowerCase());

            // Style the heading
            HTMLParagraphElement_Account_Settings.style.justifySelf = "center";
            HTMLParagraphElement_Account_Settings.style.alignSelf = "center";
            HTMLParagraphElement_Account_Settings.style.fontFamily = "Lato, sans-serif";
            HTMLParagraphElement_Account_Settings.style.gridColumnStart = 1;
            HTMLParagraphElement_Account_Settings.style.gridColumnEnd = 4;
            HTMLParagraphElement_Account_Settings.style.gridRow = 1;

            // Set the heading text
            HTMLParagraphElement_Account_Settings.textContent = title + " Settings";

            // Append the heading
            document.getElementById("chat-sidebar-slider").appendChild(HTMLParagraphElement_Account_Settings);

            // Create the button contianer
            let HTMLDivElement_Slider_Close = document.createElement("div");

            // Set the container attributes
            HTMLDivElement_Slider_Close.setAttribute("id", "slider-close-container");
            
            // Style the container
            HTMLDivElement_Slider_Close.style.gridColumn = lastColumn;
            HTMLDivElement_Slider_Close.style.gridRow = 1;
            HTMLDivElement_Slider_Close.style.cursor = "pointer";

            // Append the container
            document.getElementById("chat-sidebar-slider").appendChild(HTMLDivElement_Slider_Close);

            // Create the close button
            let HTMLObjectElement_Close = document.createElement("object");

            // Set the button attributes
            HTMLObjectElement_Close.setAttribute("data", "img/materialdesign/ic_close_24px.svg");
            HTMLObjectElement_Close.setAttribute("type", "image/svg+xml");
            HTMLObjectElement_Close.setAttribute("id", "slider-close");

            // Style the button
            HTMLObjectElement_Close.style.height = "100%";
            HTMLObjectElement_Close.style.width = "100%";
            HTMLObjectElement_Close.style.cursor = "pointer";

            // Append the button
            HTMLDivElement_Slider_Close.appendChild(HTMLObjectElement_Close);

            // Add the event listner
            HTMLDivElement_Slider_Close.addEventListener("click", function() {

                // Close the slider
                document.getElementById("chat-sidebar-slider").style.width = "0px";

                // Destroy the current layout
                Sidebar_Destroy_Base_Layout(var_tabTitle);

                // Set the variable to false
                var_sliderOpened = false;

            }, true);

            // Check what tab needs cleanup
            switch(title) {
                case "Account":
                // Delete Account contents

                // Create the account pane

                // Create the intro
                let HTMLParagraphElement_Account_Intro = document.createElement("p");

                // Set the intro attributes 
                HTMLParagraphElement_Account_Intro.setAttribute("id", "slider-account-intro");
                
                // Set the textContext
                HTMLParagraphElement_Account_Intro.textContent = "Welcome:";

                // Style the intro
                HTMLParagraphElement_Account_Intro.style.gridColumnStart = 1;
                HTMLParagraphElement_Account_Intro.style.gridColumnEnd = 3;
                HTMLParagraphElement_Account_Intro.style.gridRow = 2;
                HTMLParagraphElement_Account_Intro.style.justifySelf = "start";
                HTMLParagraphElement_Account_Intro.style.alignSelf = "center";
                HTMLParagraphElement_Account_Intro.style.paddingLeft = "10px";
                HTMLParagraphElement_Account_Intro.style.fontFamily = "Lato, sans-serif";

                // Append the child
                document.getElementById("chat-sidebar-slider").appendChild(HTMLParagraphElement_Account_Intro);

                // Create the intro name
                let HTMLParagraphElement_Account_Intro_Name = document.createElement("p");

                // Set the intro name attributes 
                HTMLParagraphElement_Account_Intro_Name.setAttribute("id", "account-intro-name");
                
                // Set the textContext
                HTMLParagraphElement_Account_Intro_Name.textContent = document.getElementById("grid-content__loggedin").getAttribute("data-user");

                // Style the intro name
                HTMLParagraphElement_Account_Intro_Name.style.gridColumnStart = 1;
                HTMLParagraphElement_Account_Intro_Name.style.gridColumnEnd = 3;
                HTMLParagraphElement_Account_Intro_Name.style.gridRow = 3;
                HTMLParagraphElement_Account_Intro_Name.style.justifySelf = "start";
                HTMLParagraphElement_Account_Intro_Name.style.alignSelf = "start";
                HTMLParagraphElement_Account_Intro_Name.style.paddingLeft = "10px";
                HTMLParagraphElement_Account_Intro_Name.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                HTMLParagraphElement_Account_Intro_Name.addEventListener("mouseover", function() {

                    // Style the account name
                    HTMLParagraphElement_Account_Intro_Name.style.textDecoration = "underline";

                }, true);

                // Add the event listner
                HTMLParagraphElement_Account_Intro_Name.addEventListener("mouseout", function() {

                    // Style the account name
                    HTMLParagraphElement_Account_Intro_Name.style.textDecoration = "none";

                }, true);

                // Append the child
                document.getElementById("chat-sidebar-slider").appendChild(HTMLParagraphElement_Account_Intro_Name);

                // Create the Account Options panel
                let HTMLDivElement_Account_Options_Panel = document.createElement("div");

                // Set the panel attributes
                HTMLDivElement_Account_Options_Panel.setAttribute("id", "account-options-panel");

                // Set the panel style
                HTMLDivElement_Account_Options_Panel.style.gridColumnStart = 1;
                HTMLDivElement_Account_Options_Panel.style.gridColumnEnd = 3;
                HTMLDivElement_Account_Options_Panel.style.gridRow = 4;
                HTMLDivElement_Account_Options_Panel.style.display = "grid";
                HTMLDivElement_Account_Options_Panel.style.gridTemplateColumns = "95px 1fr";
                HTMLDivElement_Account_Options_Panel.style.gridTemplateRows = "30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 1fr 30px";

                // Append the options panel
                document.getElementById("chat-sidebar-slider").appendChild(HTMLDivElement_Account_Options_Panel);

                // Create the heading
                let HTMLParagraphElement_Account_Email = document.createElement("p");

                // Set the intro name attributes 
                HTMLParagraphElement_Account_Email.setAttribute("id", "options-email");

                // Set the textContext
                HTMLParagraphElement_Account_Email.textContent = "Email:";

                // Style the intro name
                HTMLParagraphElement_Account_Email.style.gridColumn = 1;
                HTMLParagraphElement_Account_Email.style.gridRow = 1;
                HTMLParagraphElement_Account_Email.style.justifySelf = "center";
                HTMLParagraphElement_Account_Email.style.alignSelf = "center";
                HTMLParagraphElement_Account_Email.style.paddingLeft = "10px";
                HTMLParagraphElement_Account_Email.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(HTMLParagraphElement_Account_Email);

                // Create the email section
                let HTMLInputElement_Account_Email = document.createElement("input");

                // Set the input attributes
                HTMLInputElement_Account_Email.setAttribute("id", "options-input-email");
                // HTMLInputElement_Account_Email.setAttribute("type", "email");

                // Style the input
                HTMLInputElement_Account_Email.style.gridColumn = 2;
                HTMLInputElement_Account_Email.style.gridRow = 1;
                HTMLInputElement_Account_Email.style.height = "20px";
                HTMLInputElement_Account_Email.style.width = "90%";
                HTMLInputElement_Account_Email.style.justifySelf = "center";
                HTMLInputElement_Account_Email.style.alignSelf = "center";
                HTMLInputElement_Account_Email.style.border = "none";
                HTMLInputElement_Account_Email.style.backgroundColor = "#f3f3f3";
                HTMLInputElement_Account_Email.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                HTMLInputElement_Account_Email.addEventListener("click", function() {

                    // Style the element
                    HTMLInputElement_Account_Email.style.borderTop = "none";
                    HTMLInputElement_Account_Email.style.borderRight = "none";
                    HTMLInputElement_Account_Email.style.borderBottom = "1px solid #000000";
                    HTMLInputElement_Account_Email.style.borderLeft = "none";
                    HTMLInputElement_Account_Email.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Email.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(HTMLInputElement_Account_Email.value == "") {

                        // Style the element
                        HTMLInputElement_Account_Email.style.border = "none";
                        HTMLInputElement_Account_Email.style.backgroundColor = "#f3f3f3";
                        HTMLInputElement_Account_Email.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Email.addEventListener("focus", function() {

                    // Style the element
                    HTMLInputElement_Account_Email.style.outline = "none";
                    HTMLInputElement_Account_Email.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(HTMLInputElement_Account_Email);

                // Create the heading
                let HTMLParagraphElement_Account_Username = document.createElement("p");

                // Set the intro name attributes 
                HTMLParagraphElement_Account_Username.setAttribute("id", "options-username");

                // Set the textContext
                HTMLParagraphElement_Account_Username.textContent = "Username:";

                // Style the intro name
                HTMLParagraphElement_Account_Username.style.gridColumn = 1;
                HTMLParagraphElement_Account_Username.style.gridRow = 2;
                HTMLParagraphElement_Account_Username.style.justifySelf = "center";
                HTMLParagraphElement_Account_Username.style.alignSelf = "center";
                HTMLParagraphElement_Account_Username.style.paddingLeft = "10px";
                HTMLParagraphElement_Account_Username.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(HTMLParagraphElement_Account_Username);

                // Create the email section
                let HTMLInputElement_Account_Username = document.createElement("input");

                // Set the input attributes
                HTMLInputElement_Account_Username.setAttribute("id", "options-input-username");

                // Style the input
                HTMLInputElement_Account_Username.style.gridColumn = 2;
                HTMLInputElement_Account_Username.style.gridRow = 2;
                HTMLInputElement_Account_Username.style.height = "20px";
                HTMLInputElement_Account_Username.style.width = "90%";
                HTMLInputElement_Account_Username.style.justifySelf = "center";
                HTMLInputElement_Account_Username.style.alignSelf = "center";
                HTMLInputElement_Account_Username.style.border = "none";
                HTMLInputElement_Account_Username.style.backgroundColor = "#f3f3f3";
                HTMLInputElement_Account_Username.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                HTMLInputElement_Account_Username.addEventListener("click", function() {

                    // Style the element
                    HTMLInputElement_Account_Username.style.borderTop = "none";
                    HTMLInputElement_Account_Username.style.borderRight = "none";
                    HTMLInputElement_Account_Username.style.borderBottom = "1px solid #000000";
                    HTMLInputElement_Account_Username.style.borderLeft = "none";
                    HTMLInputElement_Account_Username.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Username.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(HTMLInputElement_Account_Username.value == "") {

                        // Style the element
                        HTMLInputElement_Account_Username.style.border = "none";
                        HTMLInputElement_Account_Username.style.backgroundColor = "#f3f3f3";
                        HTMLInputElement_Account_Username.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Username.addEventListener("focus", function() {

                    // Style the element
                    HTMLInputElement_Account_Username.style.outline = "none";
                    HTMLInputElement_Account_Username.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(HTMLInputElement_Account_Username);

                // Create the heading
                let HTMLParagraphElement_Account_Password = document.createElement("p");

                // Set the intro name attributes 
                HTMLParagraphElement_Account_Password.setAttribute("id", "options-password");

                // Set the textContext
                HTMLParagraphElement_Account_Password.textContent = "Password:";

                // Style the intro name
                HTMLParagraphElement_Account_Password.style.gridColumn = 1;
                HTMLParagraphElement_Account_Password.style.gridRow = 3;
                HTMLParagraphElement_Account_Password.style.justifySelf = "center";
                HTMLParagraphElement_Account_Password.style.alignSelf = "center";
                HTMLParagraphElement_Account_Password.style.paddingLeft = "10px";
                HTMLParagraphElement_Account_Password.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(HTMLParagraphElement_Account_Password);

                // Create the email section
                let HTMLInputElement_Account_Password = document.createElement("input");

                // Set the input attributes
                HTMLInputElement_Account_Password.setAttribute("id", "options-input-password");
                // HTMLInputElement_Account_Password.setAttribute("type", "password");

                // Style the input
                HTMLInputElement_Account_Password.style.gridColumn = 2;
                HTMLInputElement_Account_Password.style.gridRow = 3;
                HTMLInputElement_Account_Password.style.height = "20px";
                HTMLInputElement_Account_Password.style.width = "90%";
                HTMLInputElement_Account_Password.style.justifySelf = "center";
                HTMLInputElement_Account_Password.style.alignSelf = "center";
                HTMLInputElement_Account_Password.style.border = "none";
                HTMLInputElement_Account_Password.style.backgroundColor = "#f3f3f3";
                HTMLInputElement_Account_Password.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                HTMLInputElement_Account_Password.addEventListener("click", function() {

                    // Style the element
                    HTMLInputElement_Account_Password.style.borderTop = "none";
                    HTMLInputElement_Account_Password.style.borderRight = "none";
                    HTMLInputElement_Account_Password.style.borderBottom = "1px solid #000000";
                    HTMLInputElement_Account_Password.style.borderLeft = "none";
                    HTMLInputElement_Account_Password.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Password.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(HTMLInputElement_Account_Password.value == "") {

                        // Style the element
                        HTMLInputElement_Account_Password.style.border = "none";
                        HTMLInputElement_Account_Password.style.backgroundColor = "#f3f3f3";
                        HTMLInputElement_Account_Password.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Password.addEventListener("focus", function() {

                    // Style the element
                    HTMLInputElement_Account_Password.style.outline = "none";
                    HTMLInputElement_Account_Password.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(HTMLInputElement_Account_Password);

                // Create the heading
                let HTMLParagraphElement_Account_Alias = document.createElement("p");

                // Set the intro name attributes 
                HTMLParagraphElement_Account_Alias.setAttribute("id", "options-alias");

                // Set the textContext
                HTMLParagraphElement_Account_Alias.textContent = "Alias:";

                // Style the intro name
                HTMLParagraphElement_Account_Alias.style.gridColumn = 1;
                HTMLParagraphElement_Account_Alias.style.gridRow = 4;
                HTMLParagraphElement_Account_Alias.style.justifySelf = "center";
                HTMLParagraphElement_Account_Alias.style.alignSelf = "center";
                HTMLParagraphElement_Account_Alias.style.paddingLeft = "10px";
                HTMLParagraphElement_Account_Alias.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(HTMLParagraphElement_Account_Alias);

                // Create the email section
                let HTMLInputElement_Account_Alias = document.createElement("input");

                // Set the input attributes
                HTMLInputElement_Account_Alias.setAttribute("id", "options-input-alias");

                // Style the input
                HTMLInputElement_Account_Alias.style.gridColumn = 2;
                HTMLInputElement_Account_Alias.style.gridRow = 4;
                HTMLInputElement_Account_Alias.style.height = "20px";
                HTMLInputElement_Account_Alias.style.width = "90%";
                HTMLInputElement_Account_Alias.style.justifySelf = "center";
                HTMLInputElement_Account_Alias.style.alignSelf = "center";
                HTMLInputElement_Account_Alias.style.border = "none";
                HTMLInputElement_Account_Alias.style.backgroundColor = "#f3f3f3";
                HTMLInputElement_Account_Alias.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                HTMLInputElement_Account_Alias.addEventListener("click", function() {

                    // Style the element
                    HTMLInputElement_Account_Alias.style.borderTop = "none";
                    HTMLInputElement_Account_Alias.style.borderRight = "none";
                    HTMLInputElement_Account_Alias.style.borderBottom = "1px solid #000000";
                    HTMLInputElement_Account_Alias.style.borderLeft = "none";
                    HTMLInputElement_Account_Alias.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Alias.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(HTMLInputElement_Account_Alias.value == "") {

                        // Style the element
                        HTMLInputElement_Account_Alias.style.border = "none";
                        HTMLInputElement_Account_Alias.style.backgroundColor = "#f3f3f3";
                        HTMLInputElement_Account_Alias.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                HTMLInputElement_Account_Alias.addEventListener("focus", function() {

                    // Style the element
                    HTMLInputElement_Account_Alias.style.outline = "none";
                    HTMLInputElement_Account_Alias.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(HTMLInputElement_Account_Alias);

                // TODO: Change for loop to incorporate a class for all input elemenets and utilise getElementsByClassName.

                // Create the save button
                let HTMLButtonElement_Account_Save = document.createElement("button");

                // Set the button textContext
                HTMLButtonElement_Account_Save.textContent = "Save";

                // Set the button attributes
                HTMLButtonElement_Account_Save.setAttribute("id", "options-save");

                // Style the button
                HTMLButtonElement_Account_Save.style.gridColumn = 2;
                HTMLButtonElement_Account_Save.style.gridRow = 12;
                HTMLButtonElement_Account_Save.style.justifySelf = "end";
                HTMLButtonElement_Account_Save.style.alignSelf = "center";
                HTMLButtonElement_Account_Save.style.color = "#FFFFFF";
                HTMLButtonElement_Account_Save.style.backgroundColor = "#00cc00";
                HTMLButtonElement_Account_Save.style.border = "1px solid #10ff10";
                HTMLButtonElement_Account_Save.style.borderRadius = "5px";
                HTMLButtonElement_Account_Save.style.height = "30px";
                HTMLButtonElement_Account_Save.style.width = "45%";
                HTMLButtonElement_Account_Save.style.margin = "0px 10px 20px 0px";
                HTMLButtonElement_Account_Save.style.fontFamily = "Lato, sans-serift";
                HTMLButtonElement_Account_Save.style.cursor = "pointer";
                HTMLButtonElement_Account_Save.style.transition = "background-color 250ms ease";

                // Add the event listner
                HTMLButtonElement_Account_Save.addEventListener("mouseover", function() {

                    // Style the button
                    HTMLButtonElement_Account_Save.style.backgroundColor = "#02bf02";

                }, true);

                // Add the event listner
                HTMLButtonElement_Account_Save.addEventListener("mouseout", function() {
                
                    // Style the button
                    HTMLButtonElement_Account_Save.style.backgroundColor = "#00cc00";

                }, true);

                // Add the event listner
                HTMLButtonElement_Account_Save.addEventListener("focus", function() {
                
                    // Style the button
                    HTMLButtonElement_Account_Save.style.outline = "none";

                }, true);

                // Append the child
                document.getElementById("account-options-panel").appendChild(HTMLButtonElement_Account_Save);

                // Create the response heading
                let HTMLParagraphElement_Account_Response = document.createElement("p");

                // Set the textContext
                HTMLParagraphElement_Account_Response.textContent = "Response: ";

                // Set the heading attributes
                HTMLParagraphElement_Account_Response.setAttribute("id", "options-response");

                // Style the heading
                HTMLParagraphElement_Account_Response.style.gridColumn = 1;
                HTMLParagraphElement_Account_Response.style.gridRow = 12;
                HTMLParagraphElement_Account_Response.style.justifySelf = "start";
                HTMLParagraphElement_Account_Response.style.alignSelf = "center";
                HTMLParagraphElement_Account_Response.style.color = "#000000";
                HTMLParagraphElement_Account_Response.style.fontFamily = "Lato, sans-serif";
                HTMLParagraphElement_Account_Response.style.fontSize = "0.8em";
                HTMLParagraphElement_Account_Response.style.padding = "0px 0px 15px 10px";

                // Append the child
                document.getElementById("account-options-panel").appendChild(HTMLParagraphElement_Account_Response);

                // Create the Account Controls panel

                let HTMLDivElement_Account_Controls_Panel = document.createElement("div");

                // Set the panel attributes
                HTMLDivElement_Account_Controls_Panel.setAttribute("id", "account-controls-panel");

                // Set the panel style
                HTMLDivElement_Account_Controls_Panel.style.gridColumnStart = 1;
                HTMLDivElement_Account_Controls_Panel.style.gridColumnEnd = 3;
                HTMLDivElement_Account_Controls_Panel.style.gridRow = 5;
                HTMLDivElement_Account_Controls_Panel.style.display = "grid";
                HTMLDivElement_Account_Controls_Panel.style.gridTemplateColumns = "1fr 1fr";
                HTMLDivElement_Account_Controls_Panel.style.gridTemplateRows = "1fr 1fr 1fr";

                // Append the options panel
                document.getElementById("chat-sidebar-slider").appendChild(HTMLDivElement_Account_Controls_Panel);

                // Create the options panel heading
                let HTMLHeadingElement_Account_DangerZone = document.createElement("h3");

                // Set the heading attributes
                HTMLHeadingElement_Account_DangerZone.setAttribute("id", "controls-heading");

                // Set the textContext
                HTMLHeadingElement_Account_DangerZone.textContent = "Danger Zone";

                // Style the heading
                HTMLHeadingElement_Account_DangerZone.style.gridColumnStart = 1;
                HTMLHeadingElement_Account_DangerZone.style.gridColumnEnd = 3;
                HTMLHeadingElement_Account_DangerZone.style.justifySelf = "start";
                HTMLHeadingElement_Account_DangerZone.style.alignSelf = "start";
                HTMLHeadingElement_Account_DangerZone.style.marginLeft = "10px";
                HTMLHeadingElement_Account_DangerZone.style.paddingTop = "5px";
                HTMLHeadingElement_Account_DangerZone.style.fontFamily = "Montserrat, sans-serif";
                HTMLHeadingElement_Account_DangerZone.style.color = "#de1414";
                HTMLHeadingElement_Account_DangerZone.style.letterSpacing = "-1px";
                HTMLHeadingElement_Account_DangerZone.style.transition = "all 500ms ease-in-out";

                // Add the event listner
                HTMLHeadingElement_Account_DangerZone.addEventListener("mouseover", function() {

                    HTMLHeadingElement_Account_DangerZone.style.color = "#fb1a1a";

                }, true);

                // Add the event listner
                HTMLHeadingElement_Account_DangerZone.addEventListener("mouseout", function() {

                    HTMLHeadingElement_Account_DangerZone.style.color = "#de1414";

                }, true);

                // Append the heading
                document.getElementById("account-controls-panel").appendChild(HTMLHeadingElement_Account_DangerZone);

                // Danger Zone buttons

                // Create delete account button
                let HTMLButtonElement_Account_DeleteAccount = document.createElement("button");

                // Set the button attribute
                HTMLButtonElement_Account_DeleteAccount.setAttribute("id", "controls-delete-account");

                // Set the textContext
                HTMLButtonElement_Account_DeleteAccount.textContent = "Delete Account";

                // Style the button
                HTMLButtonElement_Account_DeleteAccount.style.color = "#ffa500";
                HTMLButtonElement_Account_DeleteAccount.style.gridColumn = 1;
                HTMLButtonElement_Account_DeleteAccount.style.gridRow = 2;
                HTMLButtonElement_Account_DeleteAccount.style.width = "80%";
                HTMLButtonElement_Account_DeleteAccount.style.height = "35px";
                HTMLButtonElement_Account_DeleteAccount.style.justifySelf = "center";
                HTMLButtonElement_Account_DeleteAccount.style.alignSelf = "center";
                HTMLButtonElement_Account_DeleteAccount.style.backgroundColor = "#FFFFFF";
                HTMLButtonElement_Account_DeleteAccount.style.borderRadius = "5px";
                HTMLButtonElement_Account_DeleteAccount.style.border = "1px solid #efefef";
                HTMLButtonElement_Account_DeleteAccount.style.fontFamily = "Montserrat, sans-serif";
                HTMLButtonElement_Account_DeleteAccount.style.cursor = "pointer";
                HTMLButtonElement_Account_DeleteAccount.style.transition = "background-color 250ms ease";

                // Add the event listner
                HTMLButtonElement_Account_DeleteAccount.addEventListener("mouseover", function() {

                    HTMLButtonElement_Account_DeleteAccount.style.backgroundColor = "#FBFBFB";

                }, true);

                // Add the event listner
                HTMLButtonElement_Account_DeleteAccount.addEventListener("mouseout", function() {

                    HTMLButtonElement_Account_DeleteAccount.style.backgroundColor = "#FFFFFF";

                }, true);

                HTMLButtonElement_Account_DeleteAccount.addEventListener("focus", function() {

                    HTMLButtonElement_Account_DeleteAccount.style.outline = "none";

                }, true);

                // Append the button
                document.getElementById("account-controls-panel").appendChild(HTMLButtonElement_Account_DeleteAccount);

                break;
                case "Users":
                // Delete Users contents

                break;
                case "Friends":
                // Delete Friends contents

                break;
                case "Blocked":
                // Delete Blocked contents

                break;
                case "Settings":
                // Delete Settings contents

                break;
            }

        }, execTime);

        // AJAX Timeout
        setTimeout(function() {

            // Implement the AJAX Script
            let HTMLScriptElement_AJAX = document.createElement("script");
        
            // Set the attributes
            HTMLScriptElement_AJAX.setAttribute("src", "ajax/min/sidebarLoad.min.js");
        
            // Append the element
            document.getElementById("account-controls-panel").appendChild(HTMLScriptElement_AJAX);
        
        }, execTime);

    };

    // Add the event listner
    document.getElementById("sidebar-account").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#0bb700";
        document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

        // Create sidebar element containers

        // Check is the slider is opened
        if(var_sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Account", "1fr 25px", "25px 25px 30px 2fr 1fr", 2, 1000);

            // Change the tab opened
            var_openedTab = "Account";
    
            // Change the value of slider
            var_sliderOpened = true;
    
        } else if(var_sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Account");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Account", "1fr 25px", "25px 25px 30px 2fr 1fr", 2, 1000);

                // Change the tab opened
                var_openedTab = "Account";

                // Change the value of slider
                var_sliderOpened = true;

            }, 1000);

        }

    }, true);

    // Add the event listner
    document.getElementById("sidebar-users").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#0bb700";
        document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

        // Check is the slider is opened
        if(var_sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Users", "1fr 25px", "25px 1fr 200px", 2, 1000);

            // Change the tab opened
            var_openedTab = "Users";
    
            // Change the value of slider
            var_sliderOpened = true;
    
        } else if(var_sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Users");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Users", "1fr 25px", "25px 1fr 200px", 2, 1000);

                // Change the tab opened
                var_openedTab = "Users";

                // Change the value of slider
                var_sliderOpened = true;

            }, 1000);

        }

    }, true);

    // Add the event listner
    document.getElementById("sidebar-friends").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-friends").style.backgroundColor = "#0bb700";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

        // Create sidebar element containers

        // Check is the slider is opened
        if(var_sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Friends", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

            // Change the tab opened
            var_openedTab = "Friends";
    
            // Change the value of slider
            var_sliderOpened = true;
    
        } else if(var_sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Friends");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Friends", "1fr 25px", "25px 1fr 200px", 2, 1000);

                // Change the tab opened
                var_openedTab = "Friends";

                // Change the value of slider
                var_sliderOpened = true;

            }, 1000);

        }

    }, true);

    // Add the event listner
    document.getElementById("sidebar-blocked").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#0bb700";
        document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

        // Create sidebar element containers

        // Check is the slider is opened
        if(var_sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Blocked", "1fr 25px", "25px 1fr 200px", 2, 1000);

            // Change the tab opened
            var_openedTab = "Blocked";
    
            // Change the value of slider
            var_sliderOpened = true;
    
        } else if(var_sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Blocked");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Blocked", "1fr 25px", "25px 1fr 200px", 2, 1000);

                // Change the tab opened
                var_openedTab = "Blocked";

                // Change the value of slider
                var_sliderOpened = true;

            }, 1000);

        }

    }, true);

    // Add the event listner
    document.getElementById("sidebar-settings").addEventListener('click', function() { 

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-settings").style.backgroundColor = "#0bb700";

        // Create sidebar element containers

        // Check is the slider is opened
        if(var_sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Settings", "1fr 25px", "25px 1fr 200px", 2, 1000);

            // Change the tab opened
            var_openedTab = "Settings";
    
            // Change the value of slider
            var_sliderOpened = true;
    
        } else if(var_sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Settings");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Settings", "1fr 25px", "25px 1fr 200px", 2, 1000);

                // Change the tab opened
                var_openedTab = "Settings";

                // Change the value of slider
                var_sliderOpened = true;

            }, 1000);

        }

    }, true);

}, true);