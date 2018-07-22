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

?>
    <html>

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>Exchange.me - Profile</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- JavaScript -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Stylesheets -->

        <link rel="stylesheet" type="text/css" media="screen" href="css/min/globals.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/min/profile.min.css">

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

                    <p class="text center white"><a href="index.php">Home</a>
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#00FF22"></path>
                </svg>

                <?php
                
                // Check login before displaying header
                
                // Hoisted Variables

                // Session login

                // Query
                $QUERY_SESSION_LOGIN = mysqli_query($conn, "

                SELECT
                exchangeme.accounts.username,
                exchangeme.accounts.session
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "';

                ");

                // Fetch results
                $RESULTS_SESSION_LOGIN = mysqli_fetch_array($QUERY_SESSION_LOGIN);

                $ITERATOR_NEWS_CONTENT = 0;

                if(
                    $_COOKIE['loggedin']
                    &&  isset($_COOKIE['loggedin'])
                    &&  $_COOKIE['loggedin'] == session_id()
                    &&  $RESULTS_SESSION_LOGIN[1] == $_COOKIE['loggedin']
                    &&  isset($_SESSION['user']['username'])
                    ) {
                                
                    echo '
                    
                        <p class="text center white"><a href="live.php">Exchange Rates</a>
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="#00FF22"></path>
                            <path d="M0 0h24v24H0z" fill="none"></path>
                        </svg>

                            <p class="text center white"><a href="exchange.php">Buy</a>
                            </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" fill="#00FF22"></path>
                        </svg>

                            <p class="text center white"><a href="forums.php">Forums</a>
                            </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" fill="#00FF22"></path>
                        </svg>

                            <p class="text center white"><a href="about.php">About</a>
                            </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#00FF22"></path>
                        </svg>
                    
                    ';
                    
                }
                
                ?>

                </div>

            </div>

            <?php
        
            // Home page setup
            
            // Login Display

            if(
                $_COOKIE['loggedin']
            &&  isset($_COOKIE['loggedin'])
            &&  $_COOKIE['loggedin'] == session_id()
            &&  $RESULTS_SESSION_LOGIN[1] == $_COOKIE['loggedin']
            &&  isset($_SESSION['user']['username'])
            ) {

                $QUERY_UPDATE_SESSION = mysqli_query($conn, "
                
                UPDATE exchangeme.accounts 
                SET exchangeme.accounts.lastlogin = CURRENT_TIME,
                exchangeme.accounts.ip = '" . $_SERVER['REMOTE_ADDR'] . "',
                exchangeme.accounts.session = '" . session_id() . "'
                WHERE exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "';

                ");

                // Set session variables
                $_SESSION['user']['username'] = $RESULTS_SESSION_LOGIN[0];

                echo '
                
                <!-- Content Container -->
                <div id="grid-content__loggedin" data-user="' . $_SESSION['user']['username'] . '">

                    <!-- Profile Content Container -->
                    <div id="content-profile">

                ';

                if(
                    file_exists("img/profiles/" . $_SESSION['user']['username'] . "/image.png")
                ||  file_exists("img/profiles/" . $_SESSION['user']['username'] . "/image.jpg")
                ||  file_exists("img/profiles/" . $_SESSION['user']['username'] . "/image.jpeg")
                    ) {

                        $PROFILE_PICTURE = glob("img/profiles/" . $_SESSION['user']['username'] . "/image.*");

                        echo "
                        
                            <!-- Profile Picture -->
                            <div id='profile-image__set'>

                                <img src='" . $PROFILE_PICTURE[0] . "'>
                            
                            </div>
                        
                        ";

                    } else {

                        echo "
                        
                            <!-- Profile Picture -->
                            <div id='profile-image__unset'>
                            
                                <img src='img/__unset-profile-image.png'>

                            </div>
                        
                        ";

                    }

                    echo "

                        <!-- Image Upload Form -->
                        <form id='profile-image-upload' method='POST' action='dpupload.php' enctype='multipart/form-data'>

                            <!-- Image File -->
                            <input id='image-select' type='file' name='image' form='profile-image-upload' title='Select a file to upload'>

                            <!-- Submit -->
                            <input id='image-submit' type='submit' form='profile-image-upload' name='submit' value='Upload'>
                            
                            <!-- Label -->
                            <span id='image-upload-label'>Browse</span>

                    ";

                    // Check for status response
                    if(
                        isset($_GET['Status'])
                    ||  !empty($_GET['Status'])
                        ) {

                            // Status responses
                            switch($_GET['Status']) {
                                case "Success":
        
                                echo "
                                
                                    <!-- Status Display -->
                                    <p id='profile-upload-status' class='response success'>Success</p>
        
                                ";
        
                                break;
                                case "Error":
        
                                echo "
                                
                                    <!-- Status Display -->
                                    <p id='profile-upload-status' class='response error'>Error</p>
        
                                ";
        
                                break;
                            }

                        } else {

                            echo "
                                
                                <!-- Status Display -->
                                <p id='profile-upload-status'></p>

                            ";

                        }

                        // Query
                        $QUERY_SELECT_PROFILE_INFO = mysqli_query($conn,"
                        
                        SELECT
                        exchangeme.accounts.username,
                        exchangeme.accounts.email,
                        exchangeme.accounts.firstname,
                        exchangeme.accounts.lastname,                                                                                                                                                                                                                                                                                                                                                                                                               
                        exchangeme.accounts.alias,
                        exchangeme.accounts.gender,
                        exchangeme.accounts.age,
                        exchangeme.accounts.occupation,
                        exchangeme.accounts.company,
                        exchangeme.accounts.companywebsite,
                        exchangeme.accounts.website,
                        exchangeme.accounts.creationdate,
                        exchangeme.accounts.lastlogin,
                        exchangeme.accounts.awards,
                        exchangeme.accounts.permissionid
                        FROM exchangeme.accounts
                        WHERE exchangeme.accounts.username = '" . strip_tags($_GET['Profile']) . "';
                        
                        ");

                        // Fetch Result
                        $RESULT_SELECT_PROFILE_INFO = mysqli_fetch_array($QUERY_SELECT_PROFILE_INFO);

                        // Query
                        $QUERY_CHECK_PERMISSIONS = mysqli_query($conn, "
                        
                        SELECT
                        exchangeme.permissions.name
                        FROM exchangeme.permissions
                        WHERE exchangeme.permissions.id = '" . $RESULT_SELECT_PROFILE_INFO['permissionid'] . "';
                        
                        ");

                        // Fetch Result
                        $RESULT_CHECK_PERMISSIONS = mysqli_fetch_array($QUERY_CHECK_PERMISSIONS);

                echo "

                    </form>

                    <!-- Profile Information Container -->
                    <div id='profile-info-container'>

                        <a id='info-username' href='profile.php?Profile=" . $RESULT_SELECT_PROFILE_INFO['username'] . "'>
                        
                            <p>" . $RESULT_SELECT_PROFILE_INFO['username'] . "</p>

                        </a>

                        <p id='info-alias'>(" . $RESULT_SELECT_PROFILE_INFO['alias'] . ")</p>

                        <!-- Permission Information Container -->
                        <div id='info-permission-container'>

                            <p id='permission-name' class='" . $RESULT_CHECK_PERMISSIONS['name'] . "'>" . $RESULT_CHECK_PERMISSIONS['name'] . ".</p>

                            <!-- Permission Since Container -->
                            <div id='permission-since-container'>

                                <p id='permission-time-pre'>Since</p>

                ";

                $CREATION_DATE = date_create($RESULT_SELECT_PROFILE_INFO['creationdate']);

                echo "

                                <p id='permission-time'>" . $CREATION_DATE->format("d F Y") . "</p>

                            </div>

                ";

                // Query
                $QUERY_CHECK_ADMINISTRATIVE_PERMISSIONS = mysqli_query($conn, "
                
                SELECT
                exchangeme.accounts.username,
                exchangeme.accounts.permissionid
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.username = '" . $RESULT_SELECT_PROFILE_INFO['username'] . "';
                
                ");

                // Fetch Result
                $RESULT_CHECK_ADMINISTRATIVE_PERMISSIONS = mysqli_fetch_array($QUERY_CHECK_ADMINISTRATIVE_PERMISSIONS);

                if($RESULT_CHECK_ADMINISTRATIVE_PERMISSIONS['username'] = $_SESSION['user']['username']) {

                    echo "
                    
                        <div id='permission-administrative-container'>

                    ";

                    switch($RESULT_CHECK_ADMINISTRATIVE_PERMISSIONS['permissionid']) {
                        case 1:
                        // Guest

                        echo "
                        
                            <p id='administrative-block'>Block</p>

                        ";

                        break;
                        case 2:
                        // Registered

                        echo "
                        
                            <p id='administrative-block'>Block</p>
                            <p id='administrative-report'>Report</p>

                        ";

                        break;
                        case 3:
                        // Member

                        echo "
                        
                        <p id='administrative-block'>Block</p>
                        <p id='administrative-friend'>Add Friend</p>
                        <p id='administrative-report'>Report</p>

                        ";

                        break;
                        case 4:
                        // Moderator

                        echo "
                        
                            <p id='administrative-block'>Block</p>
                            <p id='administrative-friend'>Add Friend</p>
                            <p id='administrative-report'>Report</p>
                            <p id='administrative-warn'>Warn</p>

                        ";

                        break;
                        case 5:
                        // Administrator

                        echo "

                            <p id='administrative-block'>Block</p>
                            <p id='administrative-friend'>Add Friend</p>
                            <p id='administrative-report'>Report</p>
                            <p id='administrative-warn'>Warn</p>
                            <p id='administrative-ban'>Ban</p>
                        
                        ";

                        break;
                        case 6:
                        // Site Administrator

                        echo "

                            <p id='administrative-block'>Block</p>
                            <p id='administrative-friend'>Add Friend</p>
                            <p id='administrative-report'>Report</p>
                            <p id='administrative-warn'>Warn</p>
                            <p id='administrative-ban'>Ban</p>
                        
                        ";

                        break;
                        default:
                        // Default

                        echo "
                        
                            <p id='administrative-block'>Block</p>

                        ";

                        break;
                    }

                    echo "
                        
                        </div>

                    ";

                }

                echo "

                        </div>
                            
                        <p id='info-occupation'>" . $RESULT_SELECT_PROFILE_INFO['occupation'] . "</p>

                ";

                if(
                    isset($RESULT_SELECT_PROFILE_INFO['companywebsite'])
                &&  !empty($RESULT_SELECT_PROFILE_INFO['companywebsite'])
                ) {

                    echo "
                    
                        <a id='info-company' href='//" . $RESULT_SELECT_PROFILE_INFO['companywebsite'] . "'>
                        
                            <p>" . $RESULT_SELECT_PROFILE_INFO['company'] . "</p>

                        </a>

                    ";

                } else {

                    echo "
                    
                        <p id='info-company'>" . $RESULT_SELECT_PROFILE_INFO['company'] . "</p>
                    
                    ";

                }
                        
                echo "
                
                        </div>
                
                    </div>

                </div>

                ";

            } else {

                // Redirect
                header('Location: index.php');

            }
            
            ?>

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
