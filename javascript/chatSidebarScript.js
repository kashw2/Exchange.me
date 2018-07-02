// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

'use strict';

// Add the event listner
document.addEventListener('DOMContentLoaded', function() {

    // Declare and define the variables
    var sliderOpened = false;
    var openedTab, tabTitle;

    // Function prototype

    var Sidebar_Destroy_Base_Layout = function(title) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        // Delete the elements
        document.getElementById("chat-sidebar-slider").removeChild(document.getElementById("slider-" + openedTab.toLowerCase()));
        document.getElementById("slider-close-container").removeChild(document.getElementById("slider-close"));
        document.getElementById("chat-sidebar-slider").removeChild(document.getElementById("slider-close-container"));

        // Set the variable to false
        sliderOpened = false;

        // Check what tab needs cleanup
        switch(openedTab) {
            case "Account":
            // Delete Account contents

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

    }

    var Sidebar_Init_Base_Layout = function(title, gridTemplateColumns, gridTemplateRows, firstColumn, lastColumn, execTime) {

        // Set global tab title
        tabTitle = title;

        // Check if execTime has a value
        if(
            execTime == NaN
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
            let header_heading = document.createElement("p");

            // Set the heading attributes
            header_heading.setAttribute("id", "slider-" + title.toLowerCase());

            // Style the heading
            header_heading.style.justifySelf = "center";
            header_heading.style.alignSelf = "center";
            header_heading.style.fontFamily = "Lato, sans-serif";
            header_heading.style.gridColumnStart = 1;
            header_heading.style.gridColumnEnd = 4;
            header_heading.style.gridRow = 1;

            // Set the heading text
            header_heading.textContent = title + " Settings";

            // Append the heading
            document.getElementById("chat-sidebar-slider").appendChild(header_heading);

            // Create the button contianer
            let container_button = document.createElement("div");

            // Set the container attributes
            container_button.setAttribute("id", "slider-close-container");
            
            // Style the container
            container_button.style.gridColumn = lastColumn;
            container_button.style.gridRow = 1;
            container_button.style.cursor = "pointer";

            // Append the container
            document.getElementById("chat-sidebar-slider").appendChild(container_button);

            // Create the close button
            let button_close = document.createElement("object");

            // Set the button attributes
            button_close.setAttribute("data", "img/materialdesign/ic_close_24px.svg");
            button_close.setAttribute("type", "image/svg+xml");
            button_close.setAttribute("id", "slider-close");

            // Style the button
            button_close.style.height = "100%";
            button_close.style.width = "100%";
            button_close.style.cursor = "pointer";

            // Append the button
            container_button.appendChild(button_close);

            // Add the event listner
            container_button.addEventListener("click", function() {

                // Close the slider
                document.getElementById("chat-sidebar-slider").style.width = "0px";

                // Delete the elements
                document.getElementById("chat-sidebar-slider").removeChild(header_heading);
                document.getElementById("slider-close-container").removeChild(button_close);
                document.getElementById("chat-sidebar-slider").removeChild(container_button);

                // Set the variable to false
                sliderOpened = false;

            }, true);

            // Check what tab needs cleanup
            switch(title) {
                case "Account":
                // Delete Account contents

                // Create the account pane

                // Create the intro
                let account_intro = document.createElement("p");

                // Set the intro attributes 
                account_intro.setAttribute("id", "slider-account-intro");
                
                // Set the textContext
                account_intro.textContent = "Welcome:";

                // Style the intro
                account_intro.style.gridColumnStart = 1;
                account_intro.style.gridColumnEnd = 3;
                account_intro.style.gridRow = 2;
                account_intro.style.justifySelf = "start";
                account_intro.style.alignSelf = "center";
                account_intro.style.paddingLeft = "10px";
                account_intro.style.fontFamily = "Lato, sans-serif";

                // Append the child
                document.getElementById("chat-sidebar-slider").appendChild(account_intro);

                // Create the intro name
                let account_name = document.createElement("p");

                // Set the intro name attributes 
                account_name.setAttribute("id", "account-intro-name");
                
                // Set the textContext
                account_name.textContent = document.getElementById("grid-content__loggedin").getAttribute("data-user");

                // Style the intro name
                account_name.style.gridColumnStart = 1;
                account_name.style.gridColumnEnd = 3;
                account_name.style.gridRow = 3;
                account_name.style.justifySelf = "start";
                account_name.style.alignSelf = "start";
                account_name.style.paddingLeft = "10px";
                account_name.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                account_name.addEventListener("mouseover", function() {

                    // Style the account name
                    account_name.style.textDecoration = "underline";

                }, true);

                // Add the event listner
                account_name.addEventListener("mouseout", function() {

                    // Style the account name
                    account_name.style.textDecoration = "none";

                }, true);

                // Append the child
                document.getElementById("chat-sidebar-slider").appendChild(account_name);

                // Create the Account Options panel
                let account_options_container = document.createElement("div");

                // Set the panel attributes
                account_options_container.setAttribute("id", "account-options-panel");

                // Set the panel style
                account_options_container.style.gridColumnStart = 1;
                account_options_container.style.gridColumnEnd = 3;
                account_options_container.style.gridRow = 4;
                account_options_container.style.display = "grid";
                account_options_container.style.gridTemplateColumns = "90px 1fr";
                account_options_container.style.gridTemplateRows = "30px 30px 30px 30px 30px";

                // Append the options panel
                document.getElementById("chat-sidebar-slider").appendChild(account_options_container);

                // Create the heading
                let email_heading = document.createElement("p");

                // Set the intro name attributes 
                email_heading.setAttribute("id", "options-email");

                // Set the textContext
                email_heading.textContent = "Email:";

                // Style the intro name
                email_heading.style.gridColumn = 1;
                email_heading.style.gridRow = 1;
                email_heading.style.justifySelf = "center";
                email_heading.style.alignSelf = "center";
                email_heading.style.paddingLeft = "10px";
                email_heading.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(email_heading);

                // Create the email section
                let input_change_email = document.createElement("input");

                // Set the input attributes
                input_change_email.setAttribute("id", "options-input-email");
                // input_change_email.setAttribute("type", "email");

                // Style the input
                input_change_email.style.gridColumn = 2;
                input_change_email.style.gridRow = 1;
                input_change_email.style.height = "20px";
                input_change_email.style.width = "90%";
                input_change_email.style.justifySelf = "center";
                input_change_email.style.alignSelf = "center";
                input_change_email.style.border = "none";
                input_change_email.style.backgroundColor = "#f3f3f3";
                input_change_email.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                input_change_email.addEventListener("click", function() {

                    // Style the element
                    input_change_email.style.borderTop = "none";
                    input_change_email.style.borderRight = "none";
                    input_change_email.style.borderBottom = "1px solid #000000";
                    input_change_email.style.borderLeft = "none";
                    input_change_email.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                input_change_email.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(input_change_email.value == "") {

                        // Style the element
                        input_change_email.style.border = "none";
                        input_change_email.style.backgroundColor = "#f3f3f3";
                        input_change_email.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                input_change_email.addEventListener("focus", function() {

                    // Style the element
                    input_change_email.style.outline = "none";
                    input_change_email.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(input_change_email);

                // Create the heading
                let username_heading = document.createElement("p");

                // Set the intro name attributes 
                username_heading.setAttribute("id", "options-username");

                // Set the textContext
                username_heading.textContent = "Username:";

                // Style the intro name
                username_heading.style.gridColumn = 1;
                username_heading.style.gridRow = 2;
                username_heading.style.justifySelf = "center";
                username_heading.style.alignSelf = "center";
                username_heading.style.paddingLeft = "10px";
                username_heading.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(username_heading);

                // Create the email section
                let input_change_username = document.createElement("input");

                // Set the input attributes
                input_change_username.setAttribute("id", "options-input-username");

                // Style the input
                input_change_username.style.gridColumn = 2;
                input_change_username.style.gridRow = 2;
                input_change_username.style.height = "20px";
                input_change_username.style.width = "90%";
                input_change_username.style.justifySelf = "center";
                input_change_username.style.alignSelf = "center";
                input_change_username.style.border = "none";
                input_change_username.style.backgroundColor = "#f3f3f3";
                input_change_username.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                input_change_username.addEventListener("click", function() {

                    // Style the element
                    input_change_username.style.borderTop = "none";
                    input_change_username.style.borderRight = "none";
                    input_change_username.style.borderBottom = "1px solid #000000";
                    input_change_username.style.borderLeft = "none";
                    input_change_username.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                input_change_username.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(input_change_username.value == "") {

                        // Style the element
                        input_change_username.style.border = "none";
                        input_change_username.style.backgroundColor = "#f3f3f3";
                        input_change_username.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                input_change_username.addEventListener("focus", function() {

                    // Style the element
                    input_change_username.style.outline = "none";
                    input_change_username.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(input_change_username);

                // Create the heading
                let password_heading = document.createElement("p");

                // Set the intro name attributes 
                password_heading.setAttribute("id", "options-password");

                // Set the textContext
                password_heading.textContent = "Password:";

                // Style the intro name
                password_heading.style.gridColumn = 1;
                password_heading.style.gridRow = 3;
                password_heading.style.justifySelf = "center";
                password_heading.style.alignSelf = "center";
                password_heading.style.paddingLeft = "10px";
                password_heading.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(password_heading);

                // Create the email section
                let input_change_password = document.createElement("input");

                // Set the input attributes
                input_change_password.setAttribute("id", "options-input-password");
                // input_change_password.setAttribute("type", "password");

                // Style the input
                input_change_password.style.gridColumn = 2;
                input_change_password.style.gridRow = 3;
                input_change_password.style.height = "20px";
                input_change_password.style.width = "90%";
                input_change_password.style.justifySelf = "center";
                input_change_password.style.alignSelf = "center";
                input_change_password.style.border = "none";
                input_change_password.style.backgroundColor = "#f3f3f3";
                input_change_password.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                input_change_password.addEventListener("click", function() {

                    // Style the element
                    input_change_password.style.borderTop = "none";
                    input_change_password.style.borderRight = "none";
                    input_change_password.style.borderBottom = "1px solid #000000";
                    input_change_password.style.borderLeft = "none";
                    input_change_password.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                input_change_password.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(input_change_password.value == "") {

                        // Style the element
                        input_change_password.style.border = "none";
                        input_change_password.style.backgroundColor = "#f3f3f3";
                        input_change_password.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                input_change_password.addEventListener("focus", function() {

                    // Style the element
                    input_change_password.style.outline = "none";
                    input_change_password.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(input_change_password);

                // Create the heading
                let alias_heading = document.createElement("p");

                // Set the intro name attributes 
                alias_heading.setAttribute("id", "options-alias");

                // Set the textContext
                alias_heading.textContent = "Alias:";

                // Style the intro name
                alias_heading.style.gridColumn = 1;
                alias_heading.style.gridRow = 4;
                alias_heading.style.justifySelf = "center";
                alias_heading.style.alignSelf = "center";
                alias_heading.style.paddingLeft = "10px";
                alias_heading.style.fontFamily = "Lato, sans-serif";

                // Append the heading
                document.getElementById("account-options-panel").appendChild(alias_heading);

                // Create the email section
                let input_change_alias = document.createElement("input");

                // Set the input attributes
                input_change_alias.setAttribute("id", "options-input-alias");

                // Style the input
                input_change_alias.style.gridColumn = 2;
                input_change_alias.style.gridRow = 4;
                input_change_alias.style.height = "20px";
                input_change_alias.style.width = "90%";
                input_change_alias.style.justifySelf = "center";
                input_change_alias.style.alignSelf = "center";
                input_change_alias.style.border = "none";
                input_change_alias.style.backgroundColor = "#f3f3f3";
                input_change_alias.style.fontFamily = "Lato, sans-serif";

                // Add the event listner
                input_change_alias.addEventListener("click", function() {

                    // Style the element
                    input_change_alias.style.borderTop = "none";
                    input_change_alias.style.borderRight = "none";
                    input_change_alias.style.borderBottom = "1px solid #000000";
                    input_change_alias.style.borderLeft = "none";
                    input_change_alias.style.backgroundColor = "transparent";

                }, true);

                // Add the event listner
                input_change_alias.addEventListener("focusout", function() {

                    // Check if there is a value
                    if(input_change_alias.value == "") {

                        // Style the element
                        input_change_alias.style.border = "none";
                        input_change_alias.style.backgroundColor = "#f3f3f3";
                        input_change_alias.style.paddingLeft = "5px";

                    }

                }, true);

                // Add the event listner
                input_change_alias.addEventListener("focus", function() {

                    // Style the element
                    input_change_alias.style.outline = "none";
                    input_change_alias.style.paddingLeft = "0px";

                }, true);

                // Append the input
                document.getElementById("account-options-panel").appendChild(input_change_alias);

                // TODO: Change for loop to incorporate a class for all input elemenets and utilise getElementsByClassName.

                // Create the Account Controls panel

                let account_controls_container = document.createElement("div");

                // Set the panel attributes
                account_controls_container.setAttribute("id", "account-controls-panel");

                // Set the panel style
                account_controls_container.style.gridColumnStart = 1;
                account_controls_container.style.gridColumnEnd = 3;
                account_controls_container.style.gridRow = 5;
                account_controls_container.style.display = "grid";
                account_controls_container.style.gridTemplateColumns = "1fr 1fr";
                account_controls_container.style.gridTemplateRows = "1fr 1fr 1fr";

                // Append the options panel
                document.getElementById("chat-sidebar-slider").appendChild(account_controls_container);

                // Create the options panel heading
                let controls_heading = document.createElement("h3");

                // Set the heading attributes
                controls_heading.setAttribute("id", "controls-heading");

                // Set the textContext
                controls_heading.textContent = "Danger Zone";

                // Style the heading
                controls_heading.style.gridColumnStart = 1;
                controls_heading.style.gridColumnEnd = 3;
                controls_heading.style.justifySelf = "start";
                controls_heading.style.alignSelf = "start";
                controls_heading.style.marginLeft = "10px";
                controls_heading.style.paddingTop = "5px";
                controls_heading.style.fontFamily = "Montserrat, sans-serif";
                controls_heading.style.color = "#de1414";
                controls_heading.style.letterSpacing = "-1px";
                controls_heading.style.transition = "all 500ms ease-in-out";

                // Add the event listner
                controls_heading.addEventListener("mouseover", function() {

                    controls_heading.style.color = "#fb1a1a";

                }, true);

                // Add the event listner
                controls_heading.addEventListener("mouseout", function() {

                    controls_heading.style.color = "#de1414";

                }, true);

                // Append the heading
                document.getElementById("account-controls-panel").appendChild(controls_heading);

                // Danger Zone buttons

                // Create delete account button
                let button_delete_account = document.createElement("button");

                // Set the button attribute
                button_delete_account.setAttribute("id", "controls-delete-account");

                // Set the textContext
                button_delete_account.textContent = "Delete Account";

                // Style the button
                button_delete_account.style.color = "#ffa500";
                button_delete_account.style.gridColumn = 1;
                button_delete_account.style.gridRow = 2;
                button_delete_account.style.width = "80%";
                button_delete_account.style.height = "35px";
                button_delete_account.style.justifySelf = "center";
                button_delete_account.style.alignSelf = "center";
                button_delete_account.style.backgroundColor = "#FFFFFF";
                button_delete_account.style.borderRadius = "5px";
                button_delete_account.style.border = "1px solid #efefef";
                button_delete_account.style.fontFamily = "Montserrat, sans-serif";
                button_delete_account.style.cursor = "pointer";
                button_delete_account.style.transition = "background-color 250ms ease";

                // Add the event listner
                button_delete_account.addEventListener("mouseover", function() {

                    button_delete_account.style.backgroundColor = "#FBFBFB";

                }, true);

                // Add the event listner
                button_delete_account.addEventListener("mouseout", function() {

                    button_delete_account.style.backgroundColor = "#FFFFFF";

                }, true);

                button_delete_account.addEventListener("focus", function() {

                    button_delete_account.style.outline = "none";

                }, true);

                // Append the button
                document.getElementById("account-controls-panel").appendChild(button_delete_account);

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
        if(sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Account", "1fr 25px", "25px 25px 30px 2fr 1fr", 1, 2, 1000);

            // Change the tab opened
            openedTab = "Account";
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Account");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Account", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

                // Change the tab opened
                openedTab = "Account";

                // Change the value of slider
                sliderOpened = true;

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
        if(sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Users", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

            // Change the tab opened
            openedTab = "Users";
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Users");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Users", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

                // Change the tab opened
                openedTab = "Users";

                // Change the value of slider
                sliderOpened = true;

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
        if(sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Friends", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

            // Change the tab opened
            openedTab = "Friends";
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Friends");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Friends", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

                // Change the tab opened
                openedTab = "Friends";

                // Change the value of slider
                sliderOpened = true;

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
        if(sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Blocked", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

            // Change the tab opened
            openedTab = "Blocked";
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Blocked");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Blocked", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

                // Change the tab opened
                openedTab = "Blocked";

                // Change the value of slider
                sliderOpened = true;

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
        if(sliderOpened == false) {

            // Expand the slider
            document.getElementById("chat-sidebar-slider").style.width = "300px";

            // Init the base layout
            Sidebar_Init_Base_Layout("Settings", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

            // Change the tab opened
            openedTab = "Settings";
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

        Sidebar_Destroy_Base_Layout("Settings");

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Settings", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

                // Change the tab opened
                openedTab = "Settings";

                // Change the value of slider
                sliderOpened = true;

            }, 1000);

        }

    }, true);

}, true);