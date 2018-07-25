<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// and licensed owners of this product and it's content

// Start outputbuffer
ob_start();

// Require database connection

require_once('mysql.php');

// Check FILE POST
if($_POST['submit']) {

    // Check if there is a posted file
    if(!empty($_FILES['image'])) {

        // Query
        $QUERY_SELECT_USERNAME = mysqli_query($conn, "
            
        SELECT
        exchangeme.accounts.username
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "';

        ");

        // Fetch Result
        $RESULT_SELECT_USERNAME = mysqli_fetch_array($QUERY_SELECT_USERNAME);

        // Define variables
        $DIRECTORY = "img/profiles/" . $RESULT_SELECT_USERNAME[0] . "/"; 
        $FILE = $_FILES['image'];

        // Create the directory
        mkdir($DIRECTORY);

        // Rename image file
        rename($_FILES['image']['tmp_name'], $DIRECTORY . "image.png");

        // Check that file is an image
        // if(getimagesize($_FILES['image']['tmp_name']) !== false) {

            if(
                strtolower(pathinfo($DIRECTORY . $FILE['name'], PATHINFO_EXTENSION)) == "jpg"
            ||  strtolower(pathinfo($DIRECTORY . $FILE['name'], PATHINFO_EXTENSION)) == "png"
            ||  strtolower(pathinfo($DIRECTORY . $FILE['name'], PATHINFO_EXTENSION)) == "jpeg"
                ) {

                    // Upload file
                    move_uploaded_file($_FILES['image']['tmp_name'], $DIRECTORY . $FILE['name']);

                    // Redirect back to profile
                    header('Location: profile.php?Profile=' . $RESULT_SELECT_USERNAME[0] . '&Status=Success');

            } else {

                // Redirect back to profile with error
                header('Location: profile.php?Profile=' . $RESULT_SELECT_USERNAME[0] . '&Status=Error');

            }

        // }

    } else {

        // Redirect back to profile with error
        header('Location: profile.php?Profile=' . $RESULT_SELECT_USERNAME[0] . '&Status=Error');

    }

}

?>
