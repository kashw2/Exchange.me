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
    && isset($_POST['CurrentUser'])
) {

    // Query
    $QUERY_DELETE_ACCOUNT = mysqli_query($conn, '
    
    DELETE
    FROM exchangeme.accounts
    WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['CurrentUser']) . '"
    AND exchangeme.accounts.session = "' . mysqli_real_escape_string($conn, $_COOKIE['loggedin']) . '"

    ');

    // Make sure the query is successful
    if($QUERY_DELETE_ACCOUNT == true) {

        // Reset Cookie
        setcookie("loggedin", "", time()-60*60, "/");

        // Return true
        echo "true";


    }

}

?>