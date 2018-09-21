<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// authorised and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Sanity check
if(
    !empty($_POST['User'])
&&  isset($_POST['User'])
&&  !empty($_POST['BanID'])
&&  isset($_POST['BanID'])
&&  !empty($_POST['Details'])
&&  isset($_POST['Details'])
&&  !empty($_POST['Reason'])
&&  isset($_POST['Reason'])
&&  !empty($_POST['Admin'])
&&  isset($_POST['Admin'])
) {

    // Check if an end date is defined
    if(
        empty($_POST['EndDate'])
    ||  !isset($_POST['EndDate'])
    ) {

        $QUERY_UPDATE_BAN = mysqli_query($conn, '
        
        UPDATE exchangeme.bans
        SET
        exchangeme.bans.admin = "' . mysqli_real_escape_string($conn, $_POST['Admin']) . '",
        exchangeme.bans.details = "' . mysqli_real_escape_string($conn, nl2br($_POST['Details'])) . '",
        exchangeme.bans.lastmodified = DEFAULT
        WHERE exchangeme.bans.id = "' . mysqli_real_escape_string($conn, $_POST['BanID']) . '";

        ');

        // Check Query Status
        if($QUERY_UPDATE_BAN == true) {

            // Add the ban to exchangeme.editedbans table

            $QUERY_ADD_EDITED_BAN = mysqli_query($conn, '
            
            INSERT INTO exchangeme.editedbans (
                exchangeme.editedbans.id,
                exchangeme.editedbans.bannumber,
                exchangeme.editedbans.admin,
                exchangeme.editedbans.reason,
                exchangeme.editedbans.date,
                exchangeme.editedbans.adminip
            ) VALUES (
                DEFAULT,
                "' . mysqli_real_escape_string($conn, $_POST['BanID']) . '",
                "' . mysqli_real_escape_string($conn, $_POST['Admin']) . '",
                "' . mysqli_real_escape_string($conn, $_POST['Reason']) . '",
                CURRENT_TIMESTAMP,
                "' . $_SERVER['REMOTE_ADDR'] . '"
            );

            ');

            // Return the details
            // Reason for this is so that the details can be updated in real time for the admin
            echo nl2br($_POST['Details']);

        }

    } else {

        $QUERY_UPDATE_BAN = mysqli_query($conn, '
        
        UPDATE exchangeme.bans
        SET
        exchangeme.bans.enddate = "' . mysqli_real_escape_string($conn, $_POST['EndDate']) . '",
        exchangeme.bans.admin = "' . mysqli_real_escape_string($conn, $_POST['Admin']) . '",
        exchangeme.bans.details = "' . mysqli_real_escape_string($conn, nl2br($_POST['Details'])) . '",
        exchangeme.bans.lastmodified = DEFAULT
        WHERE exchangeme.bans.id = "' . mysqli_real_escape_string($conn, $_POST['BanID']) . '";

        ');

        // Check Query Status
        if($QUERY_UPDATE_BAN == true) {

            // Add the ban to exchangeme.editedbans table

            $QUERY_ADD_EDITED_BAN = mysqli_query($conn, '
            
            INSERT INTO exchangeme.editedbans (
                exchangeme.editedbans.id,
                exchangeme.editedbans.bannumber,
                exchangeme.editedbans.admin,
                exchangeme.editedbans.reason,
                exchangeme.editedbans.date,
                exchangeme.editedbans.adminip
            ) VALUES (
                DEFAULT,
                "' . mysqli_real_escape_string($conn, $_POST['BanID']) . '",
                "' . mysqli_real_escape_string($conn, $_POST['Admin']) . '",
                "' . mysqli_real_escape_string($conn, $_POST['Reason']) . '",
                CURRENT_TIMESTAMP,
                "' . $_SERVER['REMOTE_ADDR'] . '"
            );

            ');

            // Return the details
            // Reason for this is so that the details can be updated in real time for the admin
            echo nl2br($_POST['Details']);

        }

    }

}

?>