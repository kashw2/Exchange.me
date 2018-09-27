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
        <link rel="stylesheet" type="text/css" media="screen" href="css/min/live.min.css">

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

                $ITERATOR_NEWS_CONTENT = 0;

                if(
                    $_COOKIE['loggedin']
                    &&  isset($_COOKIE['loggedin'])
                    &&  $_COOKIE['loggedin'] == session_id()
                    &&  $RESULTS_SESSION_LOGIN['session'] == $_COOKIE['loggedin']
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
                    
                } else if(
                    !$_COOKIE['loggedin']
                    ||  !isset($_SESSION['user']['username'])
                    ||  $_COOKIE['loggedin']
                    &&  $RESULTS_SESSION_LOGIN['session'] != $_COOKIE['loggedin']
                ) {
                    
                    echo "

                        <!-- Unregistered Script -->
                        <script src='javascript/min/noLoginScript.min.js'></script>
                    
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
            &&  $RESULTS_SESSION_LOGIN['session'] == $_COOKIE['loggedin']
            &&  isset($_SESSION['user']['username'])
            ) {

                $QUERY_UPDATE_SESSION = mysqli_query($conn, '
                
                UPDATE exchangeme.accounts 
                SET exchangeme.accounts.lastlogin = CURRENT_TIME,
                exchangeme.accounts.ip = "' . $_SERVER['REMOTE_ADDR'] . '",
                exchangeme.accounts.session = "' . session_id() . '"
                WHERE exchangeme.accounts.session = "' . mysqli_real_escape_string($conn, $_COOKIE['loggedin']) . '";

                ');

                // Set session variables
                $_SESSION['user']['username'] = $RESULTS_SESSION_LOGIN[0];

                $EXCHANGE_RATES_JSON = file_get_contents('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,XRP,DOGE,LTE,XLM,ADA,COAL,1337,ZRX,10MT,2GIVE,300,42,808,8BIT,9COIN,ABN,ACC,ACE,ACES,ACOIN,ADL,ADX,ADST,ADT,AIB,ADZ,AEON,AGRS,ARN,AE&tsyms=AUD&extraParams=Exchange.me&sign=true');
                $EXCHANGE_RATES = json_decode($EXCHANGE_RATES_JSON, true);

                echo "
                
                <!-- Content Container -->
                <div id='grid-content__loggedin' data-user='" . $_SESSION['user']['username'] . "'>
                    
                    <div id='content-navigational'>

                        <div id='navigational-headers'></div>
                        
                        <input id='navigational-search' type='text' placeholder='Crypto Search'>
                    
                    </div>

                    <table id='content-rate-table'>
                        <thead>
                            <tr>
                                <th>Coin</th>
                                <th>High</th>
                                <th>Open</th>
                                <th>Low</th>
                                <th>Change</th>
                                <th>Value</th>
                                <th>Supply</th>
                                <th>Market</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BTC"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["BCH"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ETH"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XRP"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["DOGE"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["LTE"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["XLM"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADA"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["COAL"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["1337"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ZRX"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["10MT"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["2GIVE"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["300"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["42"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["808"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["8BIT"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["9COIN"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ABN"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACE"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACES"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACC"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ACOIN"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADL"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADX"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADT"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AIB"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ADZ"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AEON"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AGRS"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["ARN"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                            <tr>
                                <td class='coin-symbol'>" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["FROMSYMBOL"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["HIGHDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["OPENDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["LOWDAY"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["CHANGEDAY"] . "</td>
                                <td>$" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["PRICE"] . " <span class='naturalised-currency'>AUD</span></td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["SUPPLY"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["MARKET"] . "</td>
                                <td>" . $EXCHANGE_RATES["RAW"]["AE"]["AUD"]["LASTUPDATE"] . "</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <script src='javascript/min/live.min.js'></script>
                <script src='ajax/min/liveLoad.min.js'></script>

                ";

            } else {

                // Resubmit headers
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
