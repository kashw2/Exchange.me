// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

'use strict';

// Add the event listner
document.addEventListener('DOMContentLoaded', function() {

    // Declare and define the variables
    var sliderOpened = false;

    // Function prototype
    var Sidebar_Init_Base_Layout = function(title, gridTemplateColumns, gridTemplateRows, firstColumn, lastColumn, execTime) {

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
            var header_heading = document.createElement("p");

            // Set the heading attributes
            header_heading.setAttribute("id", "slider-" + title);

            // Style the heading
            header_heading.style.justifySelf = "center";
            header_heading.style.alignSelf = "center";
            header_heading.style.fontFamily = "Lato, sans-serif";
            header_heading.style.paddingTop = "10px";

            // Set the heading text
            header_heading.textContent = title + " Settings";

            // Append the heading
            document.getElementById("chat-sidebar-slider").appendChild(header_heading);

            // Create the button contianer
            var container_button = document.createElement("div");

            // Set the container attributes
            container_button.setAttribute("id", "slider-close");
            
            // Style the container
            container_button.style.gridColumn = lastColumn;
            container_button.style.gridRow = 1;
            container_button.style.cursor = "pointer";

            // Append the container
            document.getElementById("chat-sidebar-slider").appendChild(container_button);

            // Create the close button
            var button_close = document.createElement("object");

            // Set the button attributes
            button_close.setAttribute("data", "img/materialdesign/ic_close_24px.svg");
            button_close.setAttribute("type", "image/svg+xml");

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
                document.getElementById("chat-sidebar-slider").removeChild(container_button);
                document.getElementById("chat-sidebar-slider").removeChild(button_close);

                // Set the variable to false
                sliderOpened = false;

            }, true);

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
            Sidebar_Init_Base_Layout("Account", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

            // Create the elements
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Init the base layout
                Sidebar_Init_Base_Layout("Account", "1fr 25px", "25px 1fr 200px", 1, 2, 1000);

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
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

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
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

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
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

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
    
            // Change the value of slider
            sliderOpened = true;
    
        } else if(sliderOpened == true) {

        // Close the slider
        document.getElementById("chat-sidebar-slider").style.width = "0px";

            // Set delay
            setTimeout(function() {

                // Open the slider
                document.getElementById("chat-sidebar-slider").style.width = "300px";

                // Change the value of slider
                sliderOpened = true;

            }, 1000);

        }

    }, true);

}, true);