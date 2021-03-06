<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// authorised and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Check that there is a POST value
if(
    !empty($_POST['CurrentUser'])
&&  isset($_POST['CurrentUser'])
&&  !empty($_POST['ReportedUser'])
&&  isset($_POST['ReportedUser'])
&&  !empty($_POST['Description'])
&&  isset($_POST['Description'])
) {

    // Query
    mysqli_query($conn, '
    
    INSERT INTO exchangeme.reports (
        exchangeme.reports.id,
        exchangeme.reports.date,
        exchangeme.reports.complaintantid,
        exchangeme.reports.userid,
        exchangeme.reports.details
    ) VALUES (
        DEFAULT,
        DEFAULT,
        (
            SELECT 
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['CurrentUser']) . '"
        ),
        (
            SELECT 
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['ReportedUser']) . '"
        ),
        "' . mysqli_real_escape_string($conn, $_POST['Description']) . '"
        );
    
    ');

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