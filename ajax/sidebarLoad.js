// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// jQuery

// Check if document is ready
$(document).ready(function() {

    // Check for click
    $("#options-save").on("click", function() {

        // AJAX
        $("#options-response").load("ajax/inc/account.inc.details.update.php", {
            CurrentUsername: $("#grid-content__loggedin").data("user"),
            Email: $("#options-input-email").val(),
            Username: $("#options-input-username").val(),
            Password: $("#options-input-password").val(),
            Alias: $("#options-input-alias").val()
            },

            // Callback
            function(responseText, statusText, xhr) {

            }
    
        );

    });

});