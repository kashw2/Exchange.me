// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Check the document is ready
$(document).ready(function() {

    // AJAX
    $(".profile-display").load("ajax/inc/users.inc.profile.php", 
    {
    CurrentUser: $("#grid-content__loggedin").data("user"),
    User: $(".profile-display").data("profile")
    },
        
        // Callback
        function(responseTxt, statusTxt, xhr) {

        }

    );

    // AJAX
    $("#add-user").on("click", function(e) {

        $(document).load("ajax/inc/users.inc.add.friend.php", 
        {
        Username: $("#grid-content__loggedin").data("user"),
        Friend: $("#add-user").data("user")
        },

            // Callback
            function(responseTxt, statusTxt, xhr) {

                // Response text check
                switch(responseTxt) {
                    case "true":

                    // Change the attributes
                    $(".add-user").attr("data", "img/materialdesign/ic_remove_24px.svg");
                    $(".add-user").attr("id", "remove-user");

                    break;
                    case "friends":

                    // Change the attributes
                    $(".add-user").attr("data", "img/materialdesign/ic_remove_24px.svg");
                    $(".add-user").attr("id", "remove-user");

                    break;
                }

            }

        );

    });

    // Add the event listner to the document
    $(document).on("click", function(e) {

        // Alternative click method
        if(e.target.getAttribute("id") == "remove-user") {

            // AJAX
            $(document).load("ajax/inc/users.inc.remove.friend.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Friend: $("#remove-user").data("user")
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $(".remove-user").attr("data", "img/materialdesign/ic_add_24px.svg");
                        $(".remove-user").attr("id", "add-user");

                        break;
                        case "friends":

                        // Change the attributes
                        $(".remove-user").attr("data", "img/materialdesign/ic_add_24px.svg");
                        $(".remove-user").attr("id", "add-user");

                        break;
                    }

                }

            );

        }

    })

});