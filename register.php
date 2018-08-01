<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered
// and licensed owners of this product and it's content

// Start outputbuffer
ob_start();

// Start session
session_start();

// Require database connection

require_once('mysql.php');

// Sanity check
if(
    isset($_GET['register-username'])
&&  isset($_GET['register-email'])
&&  isset($_GET['register-password'])
&&  isset($_GET['register-gender'])
    ) {

        // Create the salt
        $SALT = mcrypt_create_iv(10, MCRYPT_DEV_URANDOM);

        // Query
        $QUERY_REGISTER_USER = mysqli_query($conn, '
        
        INSERT INTO exchangeme.accounts (
        exchangeme.accounts.id,
        exchangeme.accounts.username,
        exchangeme.accounts.email,
        exchangeme.accounts.password,
        exchangeme.accounts.salt,
        exchangeme.accounts.gender,
        exchangeme.accounts.creationdate,
        exchangeme.accounts.lastlogin,
        exchangeme.accounts.ip,
        exchangeme.accounts.session,
        exchangeme.accounts.permissionid
        )
        VALUES (
        DEFAULT,
        "' . mysqli_real_escape_string($conn, $_GET['register-username']) . '",
        "' . mysqli_real_escape_string($conn, $_GET['register-email']) . '",
        "' . md5(mysqli_real_escape_string($conn, $_GET['register-password'])) . $SALT . '",
        "' . $SALT . '",
        "' . mysqli_real_escape_string($conn, $_GET['register-gender']) . '",
        DEFAULT,
        DEFAULT,
        "' . $_SERVER['REMOTE_ADDR'] . '",
        "' . mysqli_real_escape_string($conn, session_id()) . '",
        1
        );
        
        ');

        // Check query status
        if($QUERY_REGISTER_USER == true) {

            // Set session variables
            $_SESSION['user']['username'] = $_GET['register-username'];

            // Set the cookie
            setcookie("loggedin", session_id(), time()+3600*24*365, '/');

            // Resend Headers
            header("Location: index.php");

        } else {

            // Resend Headers
            header("Location: index.php");

        }

    }

?>