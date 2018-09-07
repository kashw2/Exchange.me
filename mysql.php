<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Declare and define the database variables
$USERNAME = 'root';
$PASSWORD = '';
$DB_IP = '127.0.0.1:3306';
$DB_NAME = 'exchangeme';

// Create the connection
$conn = mysqli_connect($DB_IP, $USERNAME, $PASSWORD, $DB_NAME);

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Check connection
if($conn->connect_error) {

    // Kill and report error code
    die("MySQL Error: Connection establishment unsuccessful. Er:" . mysqli_error($conn));

}

?>
