<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

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
if($RESULT_USER['permissionid'] >= 5) {

    // Sanity Check
    if(
    !empty($_POST['User'])
    &&  isset($_POST['User'])
    &&  !empty($_POST['Reason'])
    &&  isset($_POST['Reason'])
    &&  !empty($_POST['Duration'])
    &&  isset($_POST['Duration'])
    &&  !empty($_POST['Details'])
    &&  isset($_POST['Details'])
    ) {

        var_dump(date('Y-m-d H:i:s',strtotime($_POST['Duration'])));

        // Query
        $QUERY_ADD_BAN = mysqli_query($conn, '
        
        INSERT INTO exchangeme.bans (
            exchangeme.bans.id,
            exchangeme.bans.userid,
            exchangeme.bans.startdate,
            exchangeme.bans.enddate,
            exchangeme.bans.reasonid,
            exchangeme.bans.admin,
            exchangeme.bans.details,
            exchangeme.bans.ip
        ) VALUES (
            DEFAULT,
            (
                SELECT
                exchangeme.accounts.id
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.username = "' . $_POST['User'] . '"
            ),
            DEFAULT,
            "' . $_POST['Duration'] . '",
            (
                SELECT
                exchangeme.banreasons.id
                FROM exchangeme.banreasons
                WHERE exchangeme.banreasons.reason = "' . $_POST['Reason'] . '"
            ),
            "' . $_SESSION['user']['username'] . '",
            "' . $_POST['Details'] . '",
            (
                SELECT
                exchangeme.accounts.ip
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.username = "' . $_POST['User'] . '"
            )
        );
        
        ');

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