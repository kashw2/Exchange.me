<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Check to make sure POST isset and isnt empty
if(
    !empty($_POST['Message'])
&&  isset($_POST['Message'])
&&  !empty($_POST['CurrentUser'])
&&  isset($_POST['CurrentUser'])
    ) {

    // Query
    $QUERY_INSERT_MESSAGE = mysqli_query($conn, '

    INSERT INTO exchangeme.messages (
    exchangeme.messages.id,
    exchangeme.messages.userid,
    exchangeme.messages.date,
    exchangeme.messages.content
    )
    VALUES (
    DEFAULT,
        (
            SELECT
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_POST['CurrentUser']) . '"
        ),
    DEFAULT,
    "' . mysqli_real_escape_string($conn, $_POST['Message']) . '"
    );

    ');

}

?>