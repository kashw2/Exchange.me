// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

'use strict';

// Add the event listner
document.addEventListener('DOMContentLoaded', function() {

    // Add event listner
    document.getElementById("messaging-message").addEventListener('keydown', function(e) {

        // Check keypress
        if(e.keyCode == "13" && !e.shiftKey && document.getElementById("messaging-message").value == "") {

            // Prevent default behaviour
            e.preventDefault();

        }

    }, false);

}, true);