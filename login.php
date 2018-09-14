<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// authorised and licensed owners of this product and it's content

// Start outputbuffer
ob_start();

// Start session
session_start();

// Require database connection

require_once('mysql.php');

// Sanity check
if(
    isset($_GET['login-username'])
&&  isset($_GET['login-password'])
&&  !empty($_GET['login-username'])
&&  !empty($_GET['login-password'])
    ) {

        // Query
        $QUERY_LOGIN_USER = mysqli_query($conn, '
        
        SELECT 
        exchangeme.accounts.username
        FROM exchangeme.accounts 
        WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_GET['login-username']) . '"
        OR exchangeme.accounts.email = "' . mysqli_real_escape_string($conn, $_GET['login-username']) . '"
        AND exchangeme.accounts.password LIKE "' . md5(mysqli_real_escape_string($conn, $_GET['login-password'])) . '%";
        
        ');

        // Fetch results
        $RESULT_LOGIN_USER = mysqli_fetch_array($QUERY_LOGIN_USER);

        // Check query status
        if($QUERY_LOGIN_USER == true) {

            if($RESULT_LOGIN_USER[0] == $_GET['login-username']) {

                // Set session variables
                $_SESSION['user']['username'] = $_GET['login-username'];

                // Set the cookie
                setcookie("loggedin", session_id(), time()+3600*24*365, '/');

                // Query
                $QUERY_UPDATE_SESSION_LOGIN = mysqli_query($conn, '
                
                UPDATE exchangeme.accounts
                SET exchangeme.accounts.lastlogin = CURRENT_TIME,
                exchangeme.accounts.ip = "' . $_SERVER['REMOTE_ADDR'] . '",
                exchangeme.accounts.session = "' . session_id() . '"
                WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_GET['login-username']) . '"
                OR exchangeme.accounts.email = "' . mysqli_real_escape_string($conn, $_GET['login-username']) . '"
                AND exchangeme.accounts.password = "' . mysqli_real_escape_string($conn, md5($_GET['login-password'])) . '";
                
                ');

                // Resend headers
                header("Location: index.php");

            } else {

                // Error

                // Resend headers
                header("Location: index.php");

            }

        } else {

            // Error

            // Resend headers
            header("Location: index.php");

        }

    } else {

        // Error

        // Resend headers
        header("Location: index.php");

    }

?>