<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// and licensed owners of this product and it's content

// Start outputbuffer
ob_start();

// Require database connection

require_once('mysql.php');

// Check to make sure post fields are 
if(
    isset($_COOKIE['loggedin'])
&&  !empty($_COOKIE['loggedin'])
) {

    // Query
    $QUERY_CHECK_USER = mysqli_query($conn, '

    SELECT
    exchangeme.accounts.id,
    exchangeme.accounts.username
    FROM exchangeme.accounts
    WHERE exchangeme.accounts.session = "' . mysqli_real_escape_string($conn, $_COOKIE['loggedin']) . '";

    ');

    // Fetch Result
    $RESULT_CHECK_USER = mysqli_fetch_array($QUERY_CHECK_USER);

    switch($_POST) {
        case !empty($_POST['username']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.username = "' . $_POST['username'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        // Change img/profiles directory name
        rename('img/profiles/' . $RESULT_CHECK_USER['username'], 'img/profiles/' . $_POST['username']);

        break;
        case !empty($_POST['email']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.email = "' . $_POST['email'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['firstname']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.firstname = "' . $_POST['firstname'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['lastname']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.lastname = "' . $_POST['lastname'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['alias']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.alias = "' . $_POST['alias'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['gender']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.gender = "' . $_POST['gender'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['age']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.age = "' . $_POST['age'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['occupation']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.occupation = "' . $_POST['occupation'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['company']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.company = "' . $_POST['company'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['companywebsite']):

        // Query
        mysqli_query($conn, '

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.companywebsite = "' . $_POST['companywebsite'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['personalwebsite']):

        // Query
        mysqli_query($conn, '
        
        UPDATE exchangeme.accounts
        SET exchangeme.accounts.personalwebsite = "' . $_POST['personalwebsite'] . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
        case !empty($_POST['biography']):

        // Query
        mysqli_query($conn, '
        
        UPDATE exchangeme.accounts
        SET exchangeme.accounts.biography = "' . nl2br($_POST['biography']) . '"
        WHERE exchangeme.accounts.id = "' . $RESULT_CHECK_USER['id'] . '";

        ');

        break;
    }

    /*
    MySQL doesn't allow for UPDATE and INSERT queries to be run simultaneously
    Refer to: https://stackoverflow.com/questions/45494/mysql-error-1093-cant-specify-target-table-for-update-in-from-clause
    */

    // Query
    mysqli_query($conn, '

    UPDATE exchangeme.accounts
    SET exchangeme.accounts.lastlogin = CURRENT_TIMESTAMP
    WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $RESULT_CHECK_USER['username']) . '";

    ');

    // Check if username was changed
    if(
        isset($_POST['username'])
    &&  !empty($_POST['username'])
    ) {

        // Resubmit headers
        header('Location: profile.php?Profile=' . $_POST['username']);

    } else {

        // Resubmit headers
        header('Location: profile.php?Profile=' . $RESULT_CHECK_USER['username']);

    }

}

?>