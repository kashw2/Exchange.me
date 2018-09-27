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

        <title>Exchange.me - <?php echo $_GET['Type']; ?></title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- JavaScript -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Stylesheets -->

        <link rel="stylesheet" type="text/css" media="screen" href="css/min/globals.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/min/disciplinary.min.css">

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

                            <!--<p class='text center white'><a href='exchange.php'>Buy</a>
                            </p>

                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z' fill='#00FF22'></path>
                        </svg>

                            <p class='text center white'><a href='forums.php'>Forums</a>
                            </p>

                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                            <path d='M0 0h24v24H0z' fill='none'></path>
                            <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z' fill='#00FF22'></path>
                        </svg>-->

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

                if($RESULT_CHECK_USER['permissionid'] >= 4) {

                    // Make sure the user is set
                    if(
                        isset($_GET['User'])
                    &&  !empty($_GET['User'])
                    ) {

                        echo "
                        
                            <!-- Content Container -->
                            <div id='grid-content__loggedin' data-user='" . $_SESSION['user']['username'] . "'>

                                <!-- Page Options -->
                                <div id='content-page-options'>

                                <!-- Profile Redirect -->
                                <a id='page-redirect-profile' href='profile.php?Profile=" . $_GET['User'] . "'>Back to Profile</a>

                        ";

                        switch($_GET['Type']) {
                            case 'Ban':

                                echo "
                                
                                    <!-- Warning Redirect -->
                                    <a id='page-redirect-warning' href='disciplinary.php?User=" . $_GET['User'] . "&Type=Warn'>Warn</a>
                                
                                ";

                            break;
                            case 'Warn':

                                echo "
                                
                                    <!-- Warning Redirect -->
                                    <a id='page-redirect-ban' href='disciplinary.php?User=" . $_GET['User'] . "&Type=Ban'>Ban</a>
                                
                                ";

                            break;
                        }

                        echo "

                                </div>

                        ";

                        switch($_GET['Type']) {
                            case 'Ban':

                                if($RESULT_CHECK_USER['permissionid'] >= 5) {

                                    // Query
                                    $QUERY_USER_BANS = mysqli_query($conn, '
                                    
                                    SELECT
                                    exchangeme.bans.id AS banid,
                                    exchangeme.bans.startdate,
                                    exchangeme.bans.enddate,
                                    exchangeme.bans.admin,
                                    exchangeme.bans.details,
                                    exchangeme.bans.ip,
                                    exchangeme.banreasons.reason
                                    FROM exchangeme.bans
                                    INNER JOIN exchangeme.banreasons ON exchangeme.bans.reasonid = exchangeme.banreasons.id
                                    WHERE exchangeme.bans.userid = (
                                        SELECT
                                        exchangeme.accounts.id
                                        FROM exchangeme.accounts
                                        WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_GET['User']) . '"
                                    );

                                    ');

                                    // Fetch Results
                                    $RESULT_USER_BANS = mysqli_fetch_array($QUERY_USER_BANS);

                                    echo "

                                        <!-- Ban Container -->
                                        <div id='content-ban-container'>

                                            <!-- Ban Content Container -->
                                            <div id='ban-content-container'>
                                            
                                                <div id='content-banning-information'>
                                                
                                                    <p id='banning-information'>You can use this panel to ban a user for a period of time. Please note that actions are tracked and that abuse of this system will have your administration privledges revoked.</p>

                                                </div>

                                                <div id='content-action-container'>

                                                    <form id='ban-form' method='POST' action='ban.php'></form>

                                                    <div id='action-basic-container'>
                                                    
                                                        <p id='basic-user'>User:</p>
                                                        <p id='basic-reason'>Reason:</p>
                                                        <p id='basic-start'>Start:</p>
                                                        <p id='basic-duration'>Duration:</p>
                                                        <p id='basic-admin'>Admin:</p>
                                                        <p id='basic-details'>Details:</p>

                                                        <input id='basic-username' type='text'readonly value='" . $_GET['User'] .  "' name='User' form='ban-form'></input>

                                                        <select id='basic-reasons' name='Reason' form='ban-form'>
                                                        <option default hidden></option>
                                                        
                                        ";

                                        // Query
                                        $QUERY_BAN_REASONS = mysqli_query($conn, '
                                        
                                        SELECT
                                        exchangeme.banreasons.reason
                                        FROM exchangeme.banreasons;
                                        
                                        ');

                                        // Fetch Results
                                        $RESULT_BAN_REASONS = mysqli_fetch_array($QUERY_BAN_REASONS);

                                        do {

                                            echo "

                                            <option>" . $RESULT_BAN_REASONS['reason'] . "</option>

                                            ";

                                        } while($RESULT_BAN_REASONS = mysqli_fetch_array($QUERY_BAN_REASONS));

                                        echo "

                                                        </select>

                                                        <p id='basic-date'>" . date("d/m/y") . " (Now)</p>

                                                        <input id='basic-duration-select' type='date' name='Duration' form='ban-form'>

                                                        <p id='basic-admin-name'>" . $_SESSION['user']['username'] . "</p>

                                                        <textarea id='basic-details-area' name='Details' form='ban-form'></textarea>

                                                        <input id='basic-ban-submit' type='submit' value='Ban' form='ban-form'>

                                                    </div>

                                                </div>

                                            </div>

                                            <h1 id='bans-heading'>Ban History</h1>

                                            <div id='bans-table-container'>

                                                <table id='user-bans'>
                                                    <thead>
                                                        <tr>
                                                            <!--<th>ID</th>
                                                            <th>User</th>
                                                            <th>Reason</th>
                                                            <th>Admin</th>
                                                            <th>Start Date</th>
                                                            <th>End Date</th>
                                                            <th>IP Address</th>
                                                            <th></th>-->
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                    ";

                                    do {

                                        // Check that there are entries
                                        if(mysqli_num_rows($QUERY_USER_BANS) > 0) {

                                            $DATE_START = date_create($RESULT_USER_BANS['startdate']);
                                            $DATE_END = date_create($RESULT_USER_BANS['enddate']);
                                            
                                            echo "
                                            
                                                <tr>
                                                    <th>" . $RESULT_USER_BANS['banid'] . "</th>
                                                    <th>" . $_GET['User'] . "</th>
                                                    <th>" . $RESULT_USER_BANS['reason'] . "</th>
                                                    <th>" . $RESULT_USER_BANS['admin'] . "</th>
                                                    <th>" . $DATE_START->format("d/m/Y") . "</th>
                                                    <th>" . $DATE_END->format("d/m/Y") . "</th>
                                                    <th>" . $RESULT_USER_BANS['ip'] . "</th>
                                                    <th class='ban-view' data-href='view.php?Type=" . $_GET['Type'] . "&Id=" . $RESULT_USER_BANS['banid'] . "'>View</th>
                                                </tr>

                                            ";

                                        }

                                    } while($RESULT_USER_BANS = mysqli_fetch_array($QUERY_USER_BANS));

                                    echo "
                                                
                                                    </tbody>
                                                </table>

                                            </div>
                                        
                                        </div>

                                    ";

                                }

                            break;
                            case 'Warn':

                                if($RESULT_CHECK_USER['permissionid'] >= 4) {

                                    // Query
                                    $QUERY_USER_WARNINGS = mysqli_query($conn, '
                                    
                                    SELECT 
                                    exchangeme.warnings.id AS warningid,
                                    exchangeme.warnings.date,
                                    exchangeme.warnings.admin,
                                    exchangeme.warnings.brief,
                                    exchangeme.warnings.ip
                                    FROM 
                                    exchangeme.warnings
                                    WHERE exchangeme.warnings.userid = (
                                        SELECT exchangeme.accounts.id
                                        FROM exchangeme.accounts
                                        WHERE exchangeme.accounts.username = "' . mysqli_real_escape_string($conn, $_GET['User']) . '"
                                    );

                                    ');

                                    // Fetch Results
                                    $RESULT_USER_WARNINGS = mysqli_fetch_array($QUERY_USER_WARNINGS);

                                    echo "

                                        <!-- Warning Container -->
                                        <div id='content-warning-container'>

                                            <h1 id='warning-heading'>Warning History</h1>

                                            <div id='warning-content-container'>
                                            
                                                <div id='content-warning-information'>
                                                
                                                    <p id='warning-information'>You can use this panel to warn users about their actions on the forums, it should be used as a discouragement to further offences and not a form of punishment. However all is up to the administrators discretion.<br>Note that the Brief is both what will show on a users profile and what the user will be notified of.</p>

                                                </div>

                                                <div id='content-action-container'>

                                                    <form id='warning-form' method='POST' action='warn.php'></form>

                                                    <div id='action-basic-container'>

                                                        <p id='basic-user'>User:</p>
                                                        <p id='basic-date'>Date:</p>
                                                        <p id='basic-admin'>Admin:</p>
                                                        <p id='basic-brief'>Brief:</p>

                                                        <input id='basic-username' type='text'readonly value='" . $_GET['User'] .  "' name='User' form='warning-form'></input>

                                                        <p id='basic-datenow'>" . date("d/m/y") . " (Now)</p>

                                                        <p id='basic-admin-name' type='text' name='Admin' form='warning-form'>" . $_SESSION['user']['username'] . "</p>

                                                        <textarea id='basic-brief-area' name='Brief' form='warning-form'></textarea>

                                                        <input id='basic-warning-submit' type='submit' value='Warn' form='warning-form'>

                                                    </div>

                                                </div>

                                            </div>

                                            <table id='user-warnings'>
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Date</th>
                                                        <th>User</th>
                                                        <th>Admin</th>
                                                        <th>IP Address</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                    ";

                                    do {

                                        // Check that there are entries
                                        if(mysqli_num_rows($QUERY_USER_WARNINGS) > 0) {

                                            $DATE = date_create($RESULT_USER_WARNINGS['date']);

                                            echo "
                                            
                                                <tr>
                                                    <th>" . $RESULT_USER_WARNINGS['warningid'] . "</th>
                                                    <th>" . $DATE->format("d/m/Y") . "</th>
                                                    <th>" . $_GET['User'] . "</th>
                                                    <th>" . $RESULT_USER_WARNINGS['admin'] . "</th>
                                                    <th>" . $RESULT_USER_WARNINGS['ip'] . "</th>
                                                    <th class='warning-details' data-href='view.php?Type=" . $_GET['Type'] . "&Id=" . $RESULT_USER_WARNINGS['warningid'] . "'>Details</th>
                                                </tr>

                                            ";

                                        }

                                    } while($RESULT_USER_WARNINGS = mysqli_fetch_array($QUERY_USER_WARNINGS));

                                    echo "
                                                
                                                </tbody>
                                            </table>
                                        
                                        </div>

                                    ";

                                }

                            break;
                            default:

                                // Redirect to referer
                                header('Location: profile.php?Profile=' . $_GET['User']);

                            break;
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