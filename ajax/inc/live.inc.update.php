<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// authorised and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

$EXCHANGE_RATES_JSON = file_get_contents('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BCH,ETH,XRP,DOGE,LTE,XLM,ADA,COAL,1337,ZRX,10MT,2GIVE,300,42,808,8BIT,9COIN,ABN,ACC,ACE&tsyms=AUD,USD,EUR&extraParams=Exchange.me&sign=true');
$EXCHANGE_RATES = json_decode($EXCHANGE_RATES_JSON, true);

echo "

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
        <tr id='coin-row-1'>
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
        <tr id='coin-row-2'>
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
        <tr id='coin-row-3'>
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
        <tr id='coin-row-4'>
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
        <tr id='coin-row-5'>
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
        <tr id='coin-row-6'>
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
        <tr id='coin-row-7'>
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
        <tr id='coin-row-8'>
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
        <tr id='coin-row-9'>
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
        <tr id='coin-row-10'>
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
        <tr id='coin-row-11'>
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
        <tr id='coin-row-12'>
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
        <tr id='coin-row-13'>
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
        <tr id='coin-row-14'>
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
        <tr id='coin-row-15'>
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
        <tr id='coin-row-16'>
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
        <tr id='coin-row-17'>
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
        <tr id='coin-row-18'>
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
        <tr id='coin-row-19'>
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
        <tr id='coin-row-20'>
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
        <tr id='coin-row-21'>
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
    </tbody>
</table>

";

?>