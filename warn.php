<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// and licensed owners of this product and it's content

// Start outputbuffer
ob_start();

// Start session
session_start();

// Require database connection

require_once('mysql.php');

// Query
$QUERY_USER = mysqli_query($conn, '

SELECT 
exchangeme.accounts.permissionid
FROM exchangeme.accounts
WHERE exchangeme.accounts.username = "' . $_SESSION['user']['username'] . '"

');

// Fetch Results
$RESULT_USER = mysqli_fetch_array($QUERY_USER);

// Check that this user can ban
if($RESULT_USER['permissionid'] >= 4) {

    // Sanity Check
    if(
    !empty($_POST['User'])
    &&  isset($_POST['User'])
    &&  !empty($_POST['Brief'])
    &&  isset($_POST['Brief'])
    ) {

        // Query
        $QUERY_ADD_WARNING = mysqli_query($conn, '
        
        INSERT INTO exchangeme.warnings (
            exchangeme.warnings.id,
            exchangeme.warnings.userid,
            exchangeme.warnings.date,
            exchangeme.warnings.admin,
            exchangeme.warnings.brief,
            exchangeme.warnings.ip
        ) VALUES (
            DEFAULT,
            (
                SELECT
                exchangeme.accounts.id
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.username = "' . $_POST['User'] . '"
            ),
            DEFAULT,
            "' . $_SESSION['user']['username'] . '",
            "' . $_POST['Brief'] . '",
            "' . $_SERVER['REMOTE_ADDR'] . '"
        );

        ') or die(mysqli_error($conn));

        // Fetch Results
        $RESULT_ADD_WARNING = mysqli_fetch_array($QUERY_ADD_WARNING);

        // Resubmit Headers
        header('Location: profile.php?Profile=' . $_POST['User'] . '');

    } else {

        // Check that user was posted
        if(
            !empty($_POST['User'])
        &&  isset($_POST['User'])
        ) {

            // Resubmit Headers
            header('Location: profile.php?Profile=' . $_POST['User'] . '');

        } else {

            // Resubmit Headers
            header('Location: index.php');

        }

    }

} else {

    // Resubmit Headers
    header('Location: index.php');

}

?>