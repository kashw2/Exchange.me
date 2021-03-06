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

        <title>Exchange.me - Exchange Rates</title>

        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- JavaScript -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

        <!-- Stylesheets -->

        <link rel="stylesheet" type="text/css" media="screen" href="css/min/globals.min.css">
        <link rel="stylesheet" type="text/css" media="screen" href="css/min/about.min.css">

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
                $RESULTS_SESSION_LOGIN = mysqli_fetch_array($QUERY_SESSION_LOGIN);
                
                ?>

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

                </div>

            </div>

            
            <div id="grid-content">
            
                <h1 id='content-heading'>Credits / Mentions</h1>

                <p id='content-credits'>
                
                Exchange.me was a project I took on as a side project as a part of not only my hobby of programming but also in pursuit of something to add to a potential portfolio as a show of my experience and what i can do.

                <br><br>

                It was completed and further developments with the exception of general bug fixes has as of the 27th of September 2018 ceased.

                <br><br>

                ~ Credits ~

                <br><br>

                Crypto Compare (API);

                <br>

                Website: <a href='https://www.cryptocompare.com/'>https://www.cryptocompare.com/</a>

                <br>

                API: <a href='https://www.cryptocompare.com/api'>https://www.cryptocompare.com/api</a>

                <br><br>

                Material Design (Icons)

                <br>

                Website: <a href='https://material.io/'>https://material.io/</a>

                <br><br>

                FlatIcon (Icons)

                <br>

                Website: <a href='https://www.flaticon.com/'>https://www.flaticon.com/</a>

                <br><br>

                Pinterest (Images)

                <br>

                Website: <a href='https://www.pinterest.com.au/'>https://www.pinterest.com.au/</a>

                </p>

            </div>

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
