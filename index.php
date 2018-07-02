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

        <title>Exchange.me</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- JavaScript -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Stylesheets -->

        <link rel="stylesheet" type="text/css" media="screen" href="css/min/globals.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/min/index.min.css">

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

                $ITERATOR_NEWS_CONTENT = 0;

                if(
                    $_COOKIE['loggedin'] == true
                    && !empty($_COOKIE['loggedin'])
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
                    
                } else {
                    
                    echo '

                        <!-- Unregistered Script -->
                        <script src="javascript/min/noLoginScript.min.js"></script>
                    
                    ';
                    
                }
                
                ?>

                </div>

            </div>

            <?php
        
            // Home page setup

            // Check if loggedin cookie exists
            if(!$_COOKIE['loggedin']) {

                echo '

                <!-- Content Container -->
                <div id="grid-content__unregistered">
                
                    <!-- Information Container -->
                    <div id="content-information">
                    
                        <h2 id="information-heading" class="text heading center white x3">Woah, what is this?</h2>
                        
                        <p id="information-text" class="text center white">Exchange Me is not only a site that allows and creates a space for crypto enthusiasts to congragate and enjoy each others company, but also serves as a platform that allows those with a passion for the buy, sell, swap, trade and exchange of crypto currencies to take place. Exchange Me was set up or otherwise founded by John Doe on the 1st of the 1st 2018 and was originally staffed by the founder but has since grown to be staffed by over one hundred individuals working on the behalf of Exchange Me and parent/sibling companies.
                        
                        <br><br>
                        
                        Exchange Me offers a great atmosphere for its users to congregate and discuss current market trends in our user friendly chat once logged in on our home page. Users can discuss trends, see the latest site news, see the latest crypto/industry news, current real time trends in the market and see a summed up list of exchange rates all from the home page with a further and advanced statistic and exchange analysis being done on our dedicated exchange/rates page.
                        
                        <br><br>
                        
                        If you like the sound of all of this you can login or sign up using the form to the right. If you are not already a member of our expanding community we encourage you to be and to feel right at home with one of the biggest, best and friendliest crypto communities on the world wide web.
                        
                        <br><br>
                        
                        Thank You,
                        
                        <br>
                        
                        John Doe.
                        
                        <br>
                        
                        Creator and Founder of Exchange.me
                        
                        </p>
                    
                    </div>

                    <div id="content-login-container">
                    
                        <form id="login-form" method="POST">

                            <h1 id="login-heading" class="text center middle white">User Login</h1>

                            <input id="login-username" class="text center middle white" type="text" name="login-username" form="login-form" placeholder="Username">
                            
                            <input id="login-password" class="text center middle white" type="password" name="login-password" form="login-form" placeholder="Password">

                            <input id="login-submit" class="text center middle white" type="submit" form="login-form" value="Login">
                            
                            <p id="option-change" class="text center end white">No account? Why not join us? <span id="login-option-change">Register</span> now.</p>

                        </form>
                        
                        <form id="register-form" method="POST">
                        
                            <h1 id="register-heading" class="text center middle white">User Registration</h1>

                            <input id="register-username" class="text center middle white" type="text" name="register-username" form="register-form" placeholder="Username">

                            <input id="register-password" class="text center middle white" type="password" name="register-password" form="register-form" placeholder="Password">

                            <select id="register-gender" class="text center middle white" name="register-gender" form="register-form" value="Gender">

                                <option disabled selected hidden>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>

                            </select>

                            <input id="register-submit" class="text center middle white" type="submit" form="register-form" value="Register">

                            <p id="option-change" class="text center end white">Already have an account? <span id="register-option-change">Login</span> now.</p>
                        
                        </form>

                    </div>

                </div>

                ';

            } else {

                // Cookie exists

                // Check to make sure the cookie is not empty
                if(
                    !empty($_COOKIE['loggedin'])
                    && !empty($_SESSION['user']['username'])
                ) {

                    echo '

                    <!-- Content Container -->
                    <div id="grid-content__loggedin" data-user="' . $_SESSION['user']['username'] . '">

                        <!-- Chat Container -->
                        <div id="content-chat">

                            <!-- Chat Sidebar -->
                            <div id="chat-sidebar">

                                <div id="sidebar-account" class="sidebar sidebar-element"></div>
                                <div id="sidebar-users" class="sidebar sidebar-element"></div>
                                <div id="sidebar-friends" class="sidebar sidebar-element"></div>
                                <div id="sidebar-blocked" class="sidebar sidebar-element"></div>
                                <div id="sidebar-settings" class="sidebar sidebar-element"></div>

                                <script src="javascript/min/chatSidebarScript.min.js"></script>
                            
                            </div>

                            <div id="chat-sidebar-slider">
                            
                            </div>

                            <!-- Chat Messages -->
                            <div id="chat-messages">

                                <script src="ajax/min/chatLoad.min.js"></script>

                            </div>

                            <!-- Message Input -->
                            <div id="chat-messaging">

                                <textarea id="messaging-message" wrap="soft" maxlength="250" placeholder="Send Message"></textarea>

                                <script src="javascript/min/chatScript.min.js"></script>

                            </div>

                            <p id="chat-remaining" class="text middle right">Characters Left: 250</p>

                        </div>

                        <!-- News Container -->
                        <div id="content-news">

                            <script src="ajax/min/newsLoad.min.js"></script>

                            <!-- News Header -->
                            <div id="news-header">

                                <!-- News Heading -->
                                <h1 id="news-heading" class="text heading left middle black">News</h1>

                                <!-- News Search -->
                                <input id="news-search" type="text" placeholder="Search..">
                            
                            </div>
                            
                            <script src="javascript/min/newsScript.min.js"></script>

                            <!-- News Content -->
                            <div id="news-content">
                    
                    ';

                    // Query
                    $QUERY_NEWS = mysqli_query($conn, "
                    
                    SELECT
                    exchangeme.news.author,
                    exchangeme.news.date,
                    exchangeme.news.content
                    FROM 
                    exchangeme.news
                    ORDER BY exchangeme.news.id DESC;

                    ");

                    // Fetch Results
                    $RESULT_NEWS = mysqli_fetch_array($QUERY_NEWS);

                    // Loop through the results
                    do {

                        echo '
                        
                            <!-- News Content Container -->
                            <div id="news-post-' . $ITERATOR_NEWS_CONTENT . '" class="news news-content-container">

                                <!-- Profile Picture -->
                                <div class="news news-profile-picture">

                                </div>

                                <!-- Author Name -->
                                <p class="news news-author">' . $RESULT_NEWS[0] . '</p>

                                <!-- Post Date -->
                                <p class="news news-post-date">' . $RESULT_NEWS[1][8] . '' . $RESULT_NEWS[1][9] . '/' . $RESULT_NEWS[1][5] . '' . $RESULT_NEWS[1][6] . '/' . $RESULT_NEWS[1][2] . '' . $RESULT_NEWS[1][3] . '</p>

                                <!-- Content -->
                                <p class="news news-post-content">' . $RESULT_NEWS[2] . '</p>
                            
                            </div>
                        
                        ';

                        // Increment the iterator
                        $ITERATOR_NEWS_CONTENT++;

                        // TODO: Create links to profile pages and posts for the date of another post

                    } while($RESULT_NEWS = mysqli_fetch_array($QUERY_NEWS));

                    echo '

                            </div>

                        </div>
    
                    </div>
    
                    ';

                }

            }

            // Login

            // Session check

            if(
                $_COOKIE['loggedin']
                || !empty($_COOKIE['loggedin'])
                ) {

                // Query
                $QUERY_SESSION_LOGIN = mysqli_query($conn, "
                
                SELECT
                exchangeme.accounts.session,
                exchangeme.accounts.username
                FROM exchangeme.accounts
                WHERE exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "';
                
                ");

                // Fetch results
                $RESULT_SESSION_LOGIN = mysqli_fetch_array($QUERY_SESSION_LOGIN);

                // Check sessions
                if($_COOKIE['loggedin'] == $RESULT_SESSION_LOGIN[0]) {

                    // Sessions match!

                    // Set session username variable
                    $_SESSION['user']['username'] = $RESULT_SESSION_LOGIN[1];

                    // Update session in database for added security

                    // Query
                    $QUERY_UPDATE_SESSION = mysqli_query($conn, "
                    
                    UPDATE exchangeme.accounts 
                    SET exchangeme.accounts.lastlogin = CURRENT_TIME,
                    exchangeme.accounts.ip = '" . $_SERVER['REMOTE_ADDR'] . "',
                    exchangeme.accounts.session = '" . session_id() . "'
                    WHERE exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "';

                    ");

                } else {

                    // Sessions mismatch!

                    // Reset Cookie
                    setcookie('loggedin', session_id(), time()+3600*24*365, '/');

                    // header('Location: index.php');

                }


            } else {

                if(
                    isset($_POST['login-username']) 
                    && isset($_POST['login-password'])
                ) {
    
                    // Query
                    $QUERY_LOGIN_USER = mysqli_query($conn, "
                    
                    SELECT 
                    exchangeme.accounts.username
                    FROM exchangeme.accounts 
                    WHERE exchangeme.accounts.username = '" . htmlspecialchars($_POST['login-username']) . "'
                    AND exchangeme.accounts.password
                    LIKE '" . htmlspecialchars(md5(($_POST['login-password']))) . "%';
    
                    ");

                    // Fetch Results
                    $RESULT_LOGIN_USER = mysqli_fetch_array($QUERY_LOGIN_USER);

                    // Check if anything returned from query
                    if(mysqli_num_rows($QUERY_LOGIN_USER) == 1) {

                        // Account found

                        // Set session username variable
                        $_SESSION['user']['username'] = $RESULT_LOGIN_USER[0];

                        // Update session in database for added security

                        // Query
                        $QUERY_UPDATE_SESSION_LOGIN = mysqli_query($conn, "
                        
                        UPDATE exchangeme.accounts 
                        SET exchangeme.accounts.lastlogin = CURRENT_TIME,
                        exchangeme.accounts.ip = '" . $_SERVER['REMOTE_ADDR'] . "',
                        exchangeme.accounts.session = '" . session_id() . "'
                        WHERE exchangeme.accounts.username = '" . htmlspecialchars($_POST['login-username']) . "'
                        AND exchangeme.accounts.password = '" . htmlspecialchars($_POST['login-password']) . "';

                        ");

                        // Set cookie
                        setcookie('loggedin', session_id(), time()+3600*24*365, '/');

                        // Resend headers
                        header('Location: index.php');

                        // 

                    } else {

                        // No account

                        // TODO: Create a alert that acknowldeges the error

                    }

                }

            }



            // Register

            if(
                isset($_POST['register-username']) 
                && isset($_POST['register-password'])
                && isset($_POST['register-gender'])
            ) {

                // All POST fields are set and have values

                // Query
                $QUERY_REGISTER_USER = mysqli_query($conn, "
                
                INSERT INTO exchangeme.accounts (
                exchangeme.accounts.id,
                exchangeme.accounts.username,
                exchangeme.accounts.password,
                exchangeme.accounts.gender,
                exchangeme.accounts.creationdate,
                exchangeme.accounts.lastlogin,
                exchangeme.accounts.ip,
                exchangeme.accounts.session
                )
                VALUES (
                DEFAULT,
                '" . htmlspecialchars($_POST['register-username']) . "',
                '" . md5($_POST['register-password']) . '' . mcrypt_create_iv(10, MCRYPT_DEV_URANDOM) . "',
                '" . htmlspecialchars($_POST['register-gender']) . "',
                DEFAULT,
                DEFAULT,
                '" . $_SERVER['REMOTE_ADDR'] . "',
                '" . session_id() . "'
                );

                ");

                // Set Username Session variable
                $_SESSION['user']['username'] = $_POST['register-username'];
                
                // Set cookie
                setcookie('loggedin', session_id(), time()+3600*24*365, '/');

                // Resend Headers
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
