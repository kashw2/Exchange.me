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

    // Check for click
    $("#controls-delete-account").on("click", function() {

        // AJAX
        $(document).load("ajax/inc/account.inc.delete.php", {
            CurrentUser: $("#grid-content__loggedin").data("user")
            },

            // Callback
            function(responseText, statusText, xhr) {

                // Check response text
                if(responseText == "true") {

                    // Redirect
                    window.location.href = "index.php";

                }

            }
    
        );

    });



    // By default just load all online users

    // AJAX
    $("#options-tablecontainer").load("ajax/inc/users.inc.online.php", {
        Type: "Online",
        CurrentUser: $("#grid-content__loggedin").data("user")
        },

        // Callback
        function(responseText, statusText, xhr) {

        }

    );

    // Repeat function every 5 minutes
    let var_default_user_interval =  setInterval(function() {

        // Check to make sure user isnt viewing a profile card
        if(!$(".profile-display")) {

            // AJAX
            $("#options-tablecontainer").load("ajax/inc/users.inc.online.php", {
                Type: "Online",
                CurrentUser: $("#grid-content__loggedin").data("user")
                },

                // Callback
                function(responseText, statusText, xhr) {

                }

            );

        }

    }, 500*1);

    $("#options-refresh").on("click", function() {

        // AJAX
        $("#options-tablecontainer").load("ajax/inc/users.inc.online.php", {
            Type: "Online",
            CurrentUser: $("#grid-content__loggedin").data("user")
            },

            // Callback
            function(responseText, statusText, xhr) {

            }

        );

    });

    // Altenative loads

    // Check for click
    $("#type-online").on("click", function() {

        // Clear interval
        clearInterval(var_default_user_interval);

        // AJAX
        $("#options-tablecontainer").load("ajax/inc/users.inc.online.php", {
            Type: "Online",
            CurrentUser: $("#grid-content__loggedin").data("user")
            },

            // Callback
            function(responseText, statusText, xhr) {

            }

        );

    });

    // Check for click
    $("#type-friends").on("click", function() {

        // Clear interval
        clearInterval(var_default_user_interval);

        // AJAX
        $("#options-tablecontainer").load("ajax/inc/users.inc.online.php", {
            Type: "Friends",
            CurrentUser: $("#grid-content__loggedin").data("user")
            },

            // Callback
            function(responseText, statusText, xhr) {

            }

        );

    });

    // Check that the element is ready
    $("#options-tablecontainer").on("load", function() {

        // Check for element click
        $("#options-refresh").on("click", function() {

        });

    });

});