<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// authorised and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Check POST data
if(
    !empty($_POST['CurrentUser'])
&&  isset($_POST['CurrentUser'])
&&  !empty($_POST['Blocked'])
&&  isset($_POST['Blocked'])
) {

    // Query
    $QUERY_CHECK_RELATIONSHIP = mysqli_query($conn, '
    
    SELECT *
    FROM exchangeme.blocked
    WHERE exchangeme.blocked.userid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['CurrentUser']) . '"
        AND exchangeme.accounts.session = "' . mysqli_real_escape_string($conn, $_COOKIE['loggedin']) . '"
    )
    AND exchangeme.blocked.blockedid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['Blocked']) . '"
    );
    
    ');

    // Fetch Result
    $RESULT_CHECK_RELATIONSHIP = mysqli_fetch_array($QUERY_CHECK_RELATIONSHIP);

    // Check to make sure users arent already blocked
    if(mysqli_num_rows($QUERY_CHECK_RELATIONSHIP) == 0) {

        // Query
        $QUERY_BLOCK = mysqli_query($conn, '
        
        INSERT INTO exchangeme.blocked (
        exchangeme.blocked.userid,
        exchangeme.blocked.blockedid,
        exchangeme.blocked.datestart
        ) VALUES (
            (
                SELECT
                exchangeme.accounts.id
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['CurrentUser']) . '"
                AND exchangeme.accounts.session = "' . mysqli_real_escape_string($conn, $_COOKIE['loggedin']) . '"
            ),
            (
                SELECT
                exchangeme.accounts.id
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['Blocked']) . '"
            ),
        DEFAULT
        );

        ');

        // Check query
        if($QUERY_BLOCK == true) {

            // Return true
            echo "true";

        } else {

            // Return false
            echo "blocked";

        }

    } else {

        // Return false
        echo "blocked";

    }

}

    /*
    MySQL doesn't allow for UPDATE and INSERT queries to be run simultaneously
    Refer to: https://stackoverflow.com/questions/45494/mysql-error-1093-cant-specify-target-table-for-update-in-from-clause
    */

    // Query
    mysqli_query($conn, '
    
    UPDATE exchangeme.accounts
    SET exchangeme.accounts.lastlogin = CURRENT_TIMESTAMP
    WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['CurrentUser']) . '";
    
    ');

?>