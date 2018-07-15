<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Check POST data
if(
    !empty($_POST['Type'])
&&  isset($_POST['Type'])
) {

    switch($_POST['Type']) {
        case "Online":

        // Query
        $QUERY_CHECK_ONLINE = mysqli_query($conn, "
        
        SELECT
        exchangeme.accounts.username,
        exchangeme.accounts.lastlogin
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.lastlogin > DATE_SUB(NOW(), INTERVAL 60 MINUTE)
        ORDER BY exchangeme.accounts.lastlogin DESC;
        
        ");

        // Fetch Results
        $RESULT_CHECK_ONLINE = mysqli_fetch_array($QUERY_CHECK_ONLINE);

        break;
        case "Friends":

        break;
        default:

        // Query
        $QUERY_CHECK_ONLINE = mysqli_query($conn, "
        
        SELECT
        exchangeme.accounts.username,
        exchangeme.accounts.lastlogin
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.lastlogin > DATE_SUB(NOW(), INTERVAL 60 MINUTE)
        ORDER BY exchangeme.accounts.lastlogin DESC;
        
        ");

        // Fetch Results
        $RESULT_CHECK_ONLINE = mysqli_fetch_array($QUERY_CHECK_ONLINE);

        break;
    }

    // Print online table
    echo "
    
        <table class='users-table'>

        ";

        // Print table rows and data
        do {

            // Create variables and perform time calculations and conversions

            // Seen Date
            $DATE_SEEN_STR = strtotime($RESULT_CHECK_ONLINE[1]);
            $DATE_SEEN_CREATE = date_create(date("Y/m/d H:i:s.ms", $DATE_SEEN_STR));

            // Login Date
            $DATE_LOGIN_CREATE = date_create();
            date_format($DATE_LOGIN_CREATE, "Y/m/d H:i:s.ms");

            // String Difference
            $DIFFERENCE_STR = intval(date_diff($DATE_LOGIN_CREATE, $DATE_SEEN_CREATE)->format('%i')) - 60;
            $DIFFERENCE = preg_replace("/[-]/", "", $DIFFERENCE_STR);

            echo "
            
                <tbody>
                    <tr class='table users-table'>
                        <td class='table users-table'>" . $RESULT_CHECK_ONLINE[0] . "</td>
                        <td class='table users-table'>" . $DIFFERENCE . " Minutes</td>
                    </tr>
                </tbody>
                
            ";

        } while($RESULT_CHECK_ONLINE = mysqli_fetch_array($QUERY_CHECK_ONLINE));

    echo "

        </table>

    ";

}

?>