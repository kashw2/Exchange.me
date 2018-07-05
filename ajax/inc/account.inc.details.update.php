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
    !empty($_POST['CurrentUsername'])
    && isset($_POST['CurrentUsername'])
) {

    // Declare and define the variables
    $ErrorCount = 0;

    // Check post value
    if(
        !empty($_POST['Email'])
        && isset($_POST['Email'])
    ) {

        // Check for valid email
        if(filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)) {

            // Query
            $QUERY_UPDATE_EMAIL = mysqli_query($conn, "

            UPDATE exchangeme.accounts
            SET exchangeme.accounts.email = '" . $_POST['Email'] . "'
            WHERE exchangeme.accounts.username = '" . $_POST['CurrentUsername'] . "'
            OR exchangeme.accounts.session = '" . session_id() . "';

            ");

            // Check query status
            if($QUERY_UPDATE_EMAIL == false) {

                // Increment the Error counter
                $ErrorCount++;

            }

        } else {

            // Invalid email

            // Increment the Error counter
            $ErrorCount++;

        }

    }

    // Check post value
    if(
        !empty($_POST['Username'])
        && isset($_POST['Username'])
    ) {

        // Query
        $QUERY_UPDATE_USERNAME = mysqli_query($conn, "

        UPDATE exchangeme.accounts
        SET exchangeme.accounts.username = '" . $_POST['Username'] . "'
        WHERE exchangeme.accounts.username = '" . $_POST['CurrentUsername'] . "'
        OR exchangeme.accounts.session = '" . session_id() . "';

        ");

        // Check query status
        if($QUERY_UPDATE_USERNAME == false) {

            // Increment the Error counter
            $ErrorCount++;

        } else {

            // // Script
            echo '

            <script>
            
                document.getElementById("grid-content__loggedin").setAttribute("data-user", "' . $_POST['Username'] . '");
                document.getElementById("account-intro-name").textContent = document.getElementById("grid-content__loggedin").getAttribute("data-user");

            </script>
            
            ';

        }

    }

    // Check post value
    if(
        !empty($_POST['Password'])
        && isset($_POST['Password'])
    ) {

        // Query
        $QUERY_UPDATE_PASSWORD = mysqli_query($conn, "
        
        UPDATE exchangeme.accounts
        SET exchangeme.accounts.password = '" . md5($_POST['Password']) . '' . mcrypt_create_iv(10, MCRYPT_DEV_URANDOM) . "'
        WHERE exchangeme.accounts.username = '" . $_POST['CurrentUsername'] . "'
        OR exchangeme.accounts.session = '" . session_id() . "';

        ");

        // Check query status
        if($QUERY_UPDATE_PASSWORD == false) {

            // Increment the Error counter
            $ErrorCount++;

        }
        
    }

    // Check post value
    if(
        !empty($_POST['Alias'])
        && isset($_POST['Alias'])
    ) {

        // Query
        $QUERY_UPDATE_ALIAS = mysqli_query($conn, "
        
        UPDATE exchangeme.accounts
        SET exchangeme.accounts.alias = '" . $_POST['Alias'] . "'
        WHERE exchangeme.accounts.username = '" . $_POST['CurrentUsername'] . "'
        OR exchangeme.accounts.session = '" . session_id() . "';

        ");

        // Check query status
        if($QUERY_UPDATE_ALIAS == false) {

            // Increment the Error counter
            $ErrorCount++;

        }
        
    }

    // Check error count
    if($ErrorCount != 0) {

        // Return
        echo "<p class='response error'>" . $ErrorCount . " Errors</p>"; 

    } else {

        echo "<p class='response success'>Successful</p>";

    }

} else {

    // Return error
    echo "Error";

}

?>