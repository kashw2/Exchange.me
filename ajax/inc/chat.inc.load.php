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
    isset($_POST['CurrentUser'])
&&  !empty($_POST['CurrentUser'])
) {

    // Query
    $QUERY_CHAT = mysqli_query($conn, '

    SELECT 
    exchangeme.accounts.username,
    exchangeme.messages.date,
    exchangeme.messages.content
    FROM exchangeme.messages
    INNER JOIN exchangeme.accounts ON exchangeme.messages.userid = exchangeme.accounts.id
    WHERE 
    exchangeme.messages.date > DATE_SUB(NOW(), INTERVAL 1 HOUR)
    ORDER BY exchangeme.messages.date DESC;

    ');

    // Fetch results
    $RESULT_CHAT = mysqli_fetch_array($QUERY_CHAT);

    do {

        // Check who the sender was
        if($RESULT_CHAT[0] == mysqli_real_escape_string($conn, $_POST['CurrentUser'])) {

            echo "
            
                <!-- Message Container -->
                <div class='message message-container__self'>
            
            ";

        } else {

            echo "
            
                <!-- Message Container -->
                <div class='message message-container__user'>
            
            ";

        }

        echo "

                <!-- User -->
                <p class='message message-user'>" . mysqli_real_escape_string($conn, $RESULT_CHAT[0]) . "</p>

                <!-- Date Sent -->
                <p class='message message-date'>" . mysqli_real_escape_string($conn, $RESULT_CHAT[1][11]) . "" . mysqli_real_escape_string($conn, $RESULT_CHAT[1][12]) . "" . mysqli_real_escape_string($conn, $RESULT_CHAT[1][13]) . "" . mysqli_real_escape_string($conn, $RESULT_CHAT[1][14]) . "" . mysqli_real_escape_string($conn, $RESULT_CHAT[1][15]) . "</p>

                <!-- Message -->
                <p class='message message-contents'>" . mysqli_real_escape_string($conn, $RESULT_CHAT[2]) . "</p>

            </div>

        ";

    } while($RESULT_CHAT = mysqli_fetch_array($QUERY_CHAT));

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