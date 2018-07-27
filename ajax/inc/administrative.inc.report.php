<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Check that there is a POST value
if(
    !empty($_POST['Complaintant'])
&&  isset($_POST['Complaintant'])
&&  !empty($_POST['User'])
&&  isset($_POST['User'])
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
            WHERE exchangeme.accounts.username = "' . strip_tags($_POST['Complaintant']) . '"
        ),
        (
            SELECT 
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = "' . strip_tags($_POST['User']) . '"
        ),
        "' . $_POST['Description'] . '"
        );
    
    ') or die(mysqli_error($conn));

}

?>