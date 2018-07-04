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
    !empty($_POST['Email'])
    && isset($_POST['Email'])
) {

    // Query
    $QUERY_UPDATE_EMAIL = mysqli_query($conn, "
    
    UPDATE exchangeme.accounts
    SET exchangeme.accounts.email = '" . $_POST['Email'] . "'
    WHERE exchangeme.accounts.username = '" . $_POST['Username'] . "';

    ");

    // Return the email
    echo $_POST['Email'];

}

?>