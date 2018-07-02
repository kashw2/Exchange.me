// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Add the event listner
document.addEventListener('DOMContentLoaded', function() {

    'use strict';

    // Add event listner
    document.getElementById("messaging-message").addEventListener('keydown', function(e) {

        // Prevent instant new line

        // Check keypress
        if(e.keyCode == "13" && !e.shiftKey && document.getElementById("messaging-message").value == "") {

            // Prevent default behaviour
            e.preventDefault();

        }

        // Display remaining characters
        var maxChars = 250;
        var currentLength = document.getElementById("messaging-message").value.length;
        var charsLeft = maxChars - currentLength;

        // Change the length displayed
        document.getElementById("chat-remaining").textContent = "Characters Left: " + charsLeft;

    }, false);

    // Display remaining characters

    // Add the event listner
    document.getElementById("messaging-message").addEventListener('change', function() {

        // Display remaining characters
        var maxChars = 250;
        var currentLength = document.getElementById("messaging-message").value.length;
        var charsLeft = maxChars - currentLength;

        // Change the length displayed
        document.getElementById("chat-remaining").textContent = "Characters Left: " + charsLeft;

    }, true);

}, true);