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

?>
    <html>

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>Exchange.me - Detail View</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- JavaScript -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Stylesheets -->

        <link rel="stylesheet" type="text/css" media="screen" href="css/min/globals.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/min/view.min.css">

    </head>

    <body>

        <!-- Page Container -->
        <div id="grid-container">

            <!-- Header Container -->
            <div id="grid-header">

                <a href="index.php">
                    <object id="header-logo" data="img/logo.svg" type="image/svg+xml"></object>
                </a>

                <!-- Naviagation Pane -->
                <div id="header-nav">

                    <p class="text center white">
                        <a href="index.php">Home</a>
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#00FF22"></path>
                    </svg>

                <?php

                // Check login before displaying header

                // Session login

                // Query
                $QUERY_SESSION_LOGIN = mysqli_query($conn, '

                SELECT
                exchangeme.accounts.username,
                exchangeme.accounts.session
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.session = "' . mysqli_real_escape_string($conn, $_COOKIE['loggedin']) . '";

                ');

                // Fetch results
                $RESULT_SESSION_LOGIN = mysqli_fetch_array($QUERY_SESSION_LOGIN);

                if(
                    $_COOKIE['loggedin']
                &&  isset($_COOKIE['loggedin'])
                &&  $_COOKIE['loggedin'] == session_id()
                &&  $RESULT_SESSION_LOGIN[1] == $_COOKIE['loggedin']
                &&  isset($_SESSION['user']['username'])
                ) {
                                
                    echo "
                    
                        <p class='text center white'><a href='live.php'>Exchange Rates</a>
                        </p>

                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' fill='#00FF22'></path>
                            <path d='M0 0h24v24H0z' fill='none'></path>
                        </svg>

                            <p class='text center white'><a href='exchange.php'>Buy</a>
                            </p>

                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z' fill='#00FF22'></path>
                        </svg>

                            <p class='text center white'><a href='forums.php'>Forums</a>
                            </p>

                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M0 0h24v24H0z' fill='none'></path>
                            <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z' fill='#00FF22'></path>
                        </svg>

                            <p class='text center white'><a href='about.php'>About</a>
                            </p>

                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' fill='#00FF22'></path>
                        </svg>
                    
                    ";
                    
                }
                
                ?>

                </div>

            </div>

            <?php

            if(
                $_COOKIE['loggedin']
            &&  isset($_COOKIE['loggedin'])
            &&  $_COOKIE['loggedin'] == session_id()
            &&  $RESULT_SESSION_LOGIN[1] == $_COOKIE['loggedin']
            &&  isset($_SESSION['user']['username'])
            ) {

                // Query
                $QUERY_CHECK_USER = mysqli_query($conn, '
                
                SELECT 
                exchangeme.accounts.permissionid
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.username = "' . $_SESSION['user']['username'] . '";
                
                ');

                // Fetch Results
                $RESULT_CHECK_USER = mysqli_fetch_array($QUERY_CHECK_USER);

                // Make sure the user is set
                if($RESULT_CHECK_USER['permissionid'] > 4) {

                    echo "
                    
                        <!-- Content Container -->
                        <div id='grid-content__loggedin' data-user='" . $_SESSION['user']['username'] . "'>

                    ";

                    // Check the dicipline type
                    if($_GET['Type'] == 'Ban') {

                        // Query
                        $QUERY_BAN_DETAILS = mysqli_query($conn, '
                        
                        SELECT
                        exchangeme.accounts.username,
                        exchangeme.accounts.ip AS currentip,
                        exchangeme.banreasons.reason,
                        exchangeme.bans.details,
                        exchangeme.bans.enddate,
                        exchangeme.bans.ip
                        FROM exchangeme.bans
                        INNER JOIN exchangeme.banreasons ON exchangeme.banreasons.id = (
                            SELECT 
                            exchangeme.bans.reasonid
                            FROM
                            exchangeme.bans
                            WHERE exchangeme.bans.id = "' . $_GET['Id'] . '"
                        )
                        INNER JOIN exchangeme.accounts ON exchangeme.accounts.id = (
                            SELECT 
                            exchangeme.bans.userid
                            FROM exchangeme.bans
                            WHERE exchangeme.bans.id = "' . $_GET['Id'] . '"
                        );

                        ');
                        
                        // Fetch Results
                        $RESULT_BAN_DETAILS = mysqli_fetch_array($QUERY_BAN_DETAILS);

                        if(mysqli_num_rows($QUERY_BAN_DETAILS) > 0) {

                            echo "
                            
                                <h2 id='content-heading' data-banid='" . $_GET['Id'] . "'>Details for Ban: " . $_GET['Id'] . "</h2>

                                <div id='content-actions-container'>
                                
                                    <p id='actions-edit'>Edit</p>
                                    <p id='actions-remove'>Remove</p>

                                </div>

                                <h3 id='content-reason'>" . $RESULT_BAN_DETAILS['reason'] . "</h3>

                                <h3 id='content-user'>" . $RESULT_BAN_DETAILS['username'] . "</h3>

                                <div id='content-details-container'>
                                
                                    <p id='details-content'>" . $RESULT_BAN_DETAILS['details'] . "</p>

                                    <p id='details-enddate'>Expires: " . $RESULT_BAN_DETAILS['enddate'] . "</p>
                                    <p id='details-ban-ip'>IP on Ban: " . $RESULT_BAN_DETAILS['ip'] . "</p>
                                    <p id='details-curip'>IP on Record: " . $RESULT_BAN_DETAILS['currentip'] . "</p>

                                </div>

                                <script src='javascript/viewAction.js'></script>
                            
                            ";

                        } else {

                            // Redirect to referer
                            header('Location: index.php');

                        }

                    } else if($_GET['Type'] == 'Warn') {

                        /*
                        Note:
                        Warnings are not able to be edited
                        They can however be removed
                        */

                        // Query
                        $QUERY_WARNING_DETAILS = mysqli_query($conn, '

                        SELECT
                        exchangeme.accounts.username,
                        exchangeme.accounts.ip AS currentip,
                        exchangeme.warnings.brief,
                        exchangeme.warnings.date,
                        exchangeme.warnings.ip
                        FROM exchangeme.warnings
                        INNER JOIN exchangeme.accounts ON exchangeme.accounts.id = (
                            SELECT 
                            exchangeme.warnings.userid
                            FROM exchangeme.warnings
                            WHERE exchangeme.warnings.id = "' . $_GET['Id'] . '"
                        );

                        ');
                        
                        // Fetch Results
                        $RESULT_WARNING_DETAILS = mysqli_fetch_array($QUERY_WARNING_DETAILS);

                        if(mysqli_num_rows($QUERY_WARNING_DETAILS) > 0) {

                            echo "
                            
                                <h2 id='content-heading' data-banid='" . $_GET['Id'] . "'>Details for Warning: " . $_GET['Id'] . "</h2>

                                <div id='content-actions-container'>
                                
                                    <p id='actions-remove'>Remove</p>

                                </div>

                                <h3 id='content-reason'>" . $RESULT_WARNING_DETAILS ['date'] . "</h3>

                                <h3 id='content-user'>" . $RESULT_WARNING_DETAILS['username'] . "</h3>

                                <div id='content-details-container'>
                                
                                    <p id='details-content'>" . $RESULT_WARNING_DETAILS['brief'] . "</p>

                                    <p id='details-ban-ip'>IP on Ban: " . $RESULT_WARNING_DETAILS['ip'] . "</p>
                                    <p id='details-curip'>IP on Record: " . $RESULT_WARNING_DETAILS['currentip'] . "</p>

                                </div>

                                <script src='javascript/viewAction.js'></script>
                            
                            ";

                        } else {

                            // Redirect to referer
                            header('Location: index.php');

                        }

                    } else {

                        // Resubmit Headers
                        header('Location: index.php');

                    }

                    echo "
                    
                        </div>

                    ";

                } else {

                    // Redirect to referer
                    header('Location:' . $_SERVER['HTTP_REFERER']);

                }

            } else {

                // Resubmit headers
                header('Location: index.php');

            }

            ?>

            <script src='javascript/min/disciplinaryView.min.js'></script>

            <!-- Footer Container -->
            <div id="grid-footer">

                <a href="index.php">
                    <object id="footer-logo" data="img/logo.svg" type="image/svg+xml"></object>
                </a>

                <!-- Social Media Icon Container -->
                <div id="footer-social-container">

                <a id="icons-facebook" href="//www.facebook.com">
                    <object data="img/flaticon/facebook.svg" type="image/svg+xml"></object>
                </a>

                <a id="icons-twitter" href="//www.twitter.com">
                    <object data="img/flaticon/twitter.svg" type="image/svg+xml"></object>
                </a>

                <a id="icons-youtube" href="//www.youtube.com">
                    <object data="img/flaticon/youtube.svg" type="image/svg+xml"></object>
                </a>

            </div>

        </div>

    </body>

    </html>