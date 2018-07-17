<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Check POST data
if(
    !empty($_POST['Username'])
&&  isset($_POST['Username'])
&&  !empty($_POST['Friend'])
&&  isset($_POST['Friend'])
) {

    // Query
    $QUERY_CHECK_RELATIONSHIP = mysqli_query($conn, "
    
    SELECT *
    FROM exchangeme.friends
    WHERE exchangeme.friends.userid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = '" . strip_tags($_POST['Username']) . "'
        AND exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "'
    )
    AND exchangeme.friends.friendid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = '" . strip_tags($_POST['Friend']) . "'
    );
    
    ");

    // Fetch Results
    $RESULT_CHECK_RELATIONSHIP = mysqli_fetch_array($QUERY_CHECK_RELATIONSHIP);

    // Check to make sure users arent already friends
    if(mysqli_num_rows($QUERY_CHECK_RELATIONSHIP) > 0) {

        // Query
        $QUERY_REMOVE_FRIEND = mysqli_query($conn, "

        DELETE
        FROM exchangeme.friends
        WHERE exchangeme.friends.userid = (
            SELECT
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = '" . $_POST['Username'] . "'
        )
        AND exchangeme.friends.friendid = (
            SELECT
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = '" . $_POST['Friend'] . "'
        );

        ") or die(mysqli_error($conn));

        // Check query
        if($QUERY_REMOVE_FRIEND == true) {

            // Return true
            echo "true";

        } else {

            // Return false
            echo "false";

        }

    } else {

        // Return false
        echo "removed";

    }

}

?>