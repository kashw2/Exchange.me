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

        // Check if the user is blocked or not
        if($("#administrative-friend").text() == "Add Friend") {

            // AJAX
            $(document).load("ajax/inc/users.inc.add.friend.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Friend: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-friend").text("Remove Friend");
                        $("#administrative-friend").css("color", "#000");

                        break;
                        case "friends":

                        // Change the attributes
                        $("#administrative-friend").text("Remove Friend");
                        $("#administrative-friend").css("color", "#000");

                        break;
                    }

                }

            );

        } else {

            // AJAX
            $(document).load("ajax/inc/users.inc.remove.friend.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Friend: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-friend").text("Add Friend");
                        $("#administrative-friend").css("color", "#40cf2d");

                        break;
                        case "removed":

                        // Change the attributes
                        $("#administrative-friend").text("Add Friend");
                        $("#administrative-friend").css("color", "#40cf2d");

                        break;
                    }

                }

            );

        }

    });

    // Check for click
    $("#administrative-report").on("click", function() {

    });

    // Check for click
    $("#administrative-warn").on("click", function() {

    });

    // Check for click
    $("#administrative-ban").on("click", function() {

        window.location.href = "ban.php?User=" + $("#info-username").children("p").text();

    });

    // Check for click
    $("#administrative-edit").on("click", function() {

        if($("#administrative-edit").text() == "Edit") {

            $("#administrative-edit").text("Cancel");

        } else if($("#administrative-edit").text() == "Cancel") {

            $("#administrative-edit").text("Edit");

        }

    });

});