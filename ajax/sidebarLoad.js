// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// jQuery

// Check if document is ready
$(document).ready(function() {

    // Event listner for object keypress
    $("#options-input-email").on("keypress", function(e) {

        // Check keypress
        if(e.which == "13") {

            // If enter

            // Check to make sure input has value
            if(
                $("#options-input-email").val() != ""
                && $("#options-input-email").val().indexOf("@") >= 0
            ) {

                $("#options-input-email").load("ajax/inc/account.inc.email.change.php", {
                    Email: $("#options-input-email").val(),
                    Username: $("#grid-content__loggedin").data("user")
                    },

                    // Callback
                    function(responseTxt, statusTxt, xhr) {

                        // Set the textContext
                        $("#options-input-email").val(responseTxt);

                        // Style the element
                        $("#options-input-email").css("background-color", "#f3f3f3");

                    }

                );

            }

        }

    });

    // Event listner for object click
    $("#sidebar-users").on("click", function() {

    });

    // Event listner for object click
    $("#sidebar-friends").on("click", function() {

    });

    // Event listner for object click
    $("#sidebar-blocked").on("click", function() {

    });

    // Event listner for object click
    $("#sidebar-settings").on("click", function() {

    });

});