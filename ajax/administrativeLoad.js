// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Check the document is ready
$(document).ready(function() {

    // Check for click
    $("#administrative-block").on("click", function() {

        // Check if the user is blocked or not
        if($("#administrative-block").text() == "Block") {

            // AJAX
            $(document).load("ajax/inc/users.inc.block.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Blocked: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-block").text("Unblock");


                        break;
                        case "blocked":

                        // Change the attributes
                        $("#administrative-block").text("Unblock");

                        break;
                    }

                }

            );

        } else {

            // AJAX
            $(document).load("ajax/inc/users.inc.unblock.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Blocked: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-block").text("Block");

                        break;
                        case "unblocked":

                        // Change the attributes
                        $("#administrative-block").text("Block");

                        break;
                    }

                }

            );

        }

    });

    // Check for click
    $("#administrative-friend").on("click", function() {

    });

    // Check for click
    $("#administrative-report").on("click", function() {

    });

    // Check for click
    $("#administrative-warn").on("click", function() {

    });

    // Check for click
    $("#administrative-ban").on("click", function() {

    });

});