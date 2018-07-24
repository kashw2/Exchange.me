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
&&  !empty($_POST['Blocked'])
&&  isset($_POST['Blocked'])
) {

    // Query
    $QUERY_CHECK_RELATIONSHIP = mysqli_query($conn, "
    
    SELECT *
    FROM exchangeme.blocked
    WHERE exchangeme.blocked.userid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = '" . strip_tags($_POST['Username']) . "'
        AND exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "'
    )
    AND exchangeme.blocked.blockedid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = '" . strip_tags($_POST['Blocked']) . "'
    );
    
    ");

    // Fetch Results
    $RESULT_CHECK_RELATIONSHIP = mysqli_fetch_array($QUERY_CHECK_RELATIONSHIP);

    // Check to make sure users arent already unblocked
    if(mysqli_num_rows($QUERY_CHECK_RELATIONSHIP) > 0) {

        // Query
        $QUERY_REMOVE_FRIEND = mysqli_query($conn, "

        DELETE
        FROM exchangeme.blocked
        WHERE exchangeme.blocked.userid = (
            SELECT
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = '" . $_POST['Username'] . "'
        )
        AND exchangeme.blocked.blockedid = (
            SELECT
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = '" . $_POST['Blocked'] . "'
        );

        ") or die(mysqli_error($conn));

        // Check query
        if($QUERY_REMOVE_FRIEND == true) {

            // Return true
            echo "true";

        } else {

            // Return false
            echo "unblocked";

        }

    } else {

        // Return false
        echo "unblocked";

    }

}

?>