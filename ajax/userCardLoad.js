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
        function(responseText, statusText, xhr) {

        }

    );

});