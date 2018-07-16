// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Check the document is ready
$(document).ready(function() {

    // AJAX
    $(".profile-display").load("ajax/inc/users.inc.profile.php", 
    {
    User: $(".profile-display").data("profile")
    },
        
        // Callback
        function(responseTxt, statusTxt, xhr) {

        }

    );

    // AJAX
    $(document).on("click", function(e) {

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

                    // Change the icon
                    $(".add-user").attr("data", "img/materialdesign/ic_remove_24px.svg");

                    break;
                    case "friends":

                    // Change the icon
                    $(".add-user").attr("data", "img/materialdesign/ic_remove_24px.svg");

                    break;
                }

            }

        );

    });

});