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

    // Add the event listner to the document
    $(document).on("click", function(e) {

        // Alternative click method
        if(e.target.getAttribute("id") == "add-user") {

            // AJAX
            $(document).load("ajax/inc/users.inc.add.friend.php", 
            {
            CurrentUser: $("#grid-content__loggedin").data("user"),
            Friend: $("#add-user").data("user")
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $(".remove-user").attr("class", "table users-table add-user");
                        $(".add-user").attr("data", "img/materialdesign/ic_remove_24px.svg");
                        $("#add-user").attr("id", "remove-user");
                        $("#remove-user").attr("title", "Remove Friend");

                        break;
                        case "friends":

                        // Change the attributes
                        $(".add-user").attr("data", "img/materialdesign/ic_remove_24px.svg");
                        $("#add-user").attr("id", "remove-user");
                        $("#remove-user").attr("title", "Remove Friend");

                        break;
                    }

                }

            );

        } else if(e.target.getAttribute("id") == "remove-user") {

                // AJAX
                $(document).load("ajax/inc/users.inc.remove.friend.php", 
                {
                CurrentUser: $("#grid-content__loggedin").data("user"),
                Friend: $("#remove-user").data("user")
                },

                    // Callback
                    function(responseTxt, statusTxt, xhr) {

                        // Response text check
                        switch(responseTxt) {
                            case "true":

                            // Change the attributes
                            $(".remove-user").attr("class", "table users-table add-user");
                            $(".add-user").attr("data", "img/materialdesign/ic_add_24px.svg");
                            $("#remove-user").attr("id", "add-user");
                            $("#add-user").attr("title", "Add Friend");

                            break;
                            case "removed":

                            // Change the attributes
                            $(".remove-user").attr("data", "img/materialdesign/ic_add_24px.svg");
                            $("#remove-user").attr("id", "add-user");
                            $("#add-user").attr("title", "Add Friend");

                            break;
                        }

                    }

                );

        } else if(e.target.getAttribute("id") == "block-user") {

            // AJAX
            $(document).load("ajax/inc/users.inc.block.php", 
            {
            CurrentUser: $("#grid-content__loggedin").data("user"),
            Blocked: $("#block-user").data("user")
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $(".block-user").attr("class", "table users-table unblock-user");
                        $(".unblock-user").attr("data", "img/materialdesign/ic_supervisor_account_24px");
                        $("#block-user").attr("id", "unblock-user");
                        $("#unblock-user").attr("title", "Unblock User");

                        break;
                        case "blocked":

                        // Change the attributes
                        $(".block-user").attr("data", "img/materialdesign/ic_voice_over_off_24px.svg");
                        $("#unblock-user").attr("id", "block-user");
                        $("#block-user").attr("title", "Block User");

                        break;
                    }

                }

            );

        } else if(e.target.getAttribute("id") == "unblock-user") {

            // AJAX
            $(document).load("ajax/inc/users.inc.unblock.php", 
            {
            CurrentUser: $("#grid-content__loggedin").data("user"),
            Blocked: $("#unblock-user").data("user")
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $(".unblock-user").attr("class", "table users-table block-user");
                        $(".block-user").attr("data", "img/materialdesign/ic_voice_over_off_24px.svg");
                        $("#unblock-user").attr("id", "block-user");
                        $("#block-user").attr("title", "Block User");

                        break;
                        case "unblocked":

                        // Change the attributes
                        $(".unblock-user").attr("data", "img/materialdesign/ic_supervisor_account_24px");
                        $("#block-user").attr("id", "unblock-user");
                        $("#unblock-user").attr("title", "Unblock User");

                        break;
                    }

                }

            );

        }

    });

});