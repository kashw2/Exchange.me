<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Query
$QUERY_CHAT = mysqli_query($conn, "

SELECT
exchangeme.messages.sender,
exchangeme.messages.date,
exchangeme.messages.message
FROM exchangeme.messages
WHERE
exchangeme.messages.date > DATE_SUB(NOW(), INTERVAL 1 HOUR)
ORDER BY exchangeme.messages.date DESC;

");

// Fetch results
$RESULT_CHAT = mysqli_fetch_array($QUERY_CHAT);

do {

    // Check who the sender was
    if($RESULT_CHAT[0] == $_POST['Username']) {

        echo '
        
            <!-- Message Container -->
            <div class="message message-container__self">
        
        ';

    } else {

        echo '
        
            <!-- Message Container -->
            <div class="message message-container__user">
        
        ';

    }

    echo '

            <!-- User -->
            <p class="message message-user">' . $RESULT_CHAT[0] . '</p>

            <!-- Date Sent -->
            <p class="message message-date">' . $RESULT_CHAT[1][11] . '' . $RESULT_CHAT[1][12] . '' . $RESULT_CHAT[1][13] . '' . $RESULT_CHAT[1][14] . '' . $RESULT_CHAT[1][15] . '</p>

            <!-- Message -->
            <p class="message message-contents">' . $RESULT_CHAT[2] . '</p>

        </div>

    ';

        // // Check who the sender was
        // if($RESULT_CHAT[0] == $_POST['Username']) {

        //     echo '
    
        //         <!-- Message Delete Container -->
        //         <div class="message message-delete__self"></div>
            
        //     ';
    
        // } else {
    
        //     echo '
    
        //         <!-- Message Delete Container -->
        //         <div class="message message-delete__user"></div>
            
        //     ';
    
        // }

} while($RESULT_CHAT = mysqli_fetch_array($QUERY_CHAT));

?>