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
) {

    // Query
    $QUERY_INSERT_DELETED_BAN = mysqli_query($conn, '
    
    INSERT INTO exchangeme.deletedbans (
        exchangeme.deletedbans.id,
        exchangeme.deletedbans.userid,
        exchangeme.deletedbans.startdate,
        exchangeme.deletedbans.enddate,
        exchangeme.deletedbans.reasonid,
        exchangeme.deletedbans.admin,
        exchangeme.deletedbans.details,
        exchangeme.deletedbans.ip,
        exchangeme.deletedbans.lastmodified
    ) VALUES (
        DEFAULT,
        (
            SELECT
            exchangeme.accounts.id
            FROM exchangeme.accounts
            WHERE exchangeme.accounts.username = "' . $_POST['User'] . '"
        ),
        (
            SELECT
            exchangeme.bans.startdate
            FROM exchangeme.bans
            WHERE exchangeme.bans.id = "' . $_POST['BanID'] . '"
        ),
        (
            SELECT
            exchangeme.bans.enddate
            FROM exchangeme.bans
            WHERE exchangeme.bans.id = "' . $_POST['BanID'] . '"
        ),
        (
            SELECT
            exchangeme.bans.reasonid
            FROM exchangeme.bans
            WHERE exchangeme.bans.id = "' . $_POST['BanID'] . '"
        ),
        (
            SELECT
            exchangeme.bans.admin
            FROM exchangeme.bans
            WHERE exchangeme.bans.id = "' . $_POST['BanID'] . '"
        ),
        (
            SELECT
            exchangeme.bans.details
            FROM exchangeme.bans
            WHERE exchangeme.bans.id = "' . $_POST['BanID'] . '"
        ),
        (
            SELECT
            exchangeme.bans.ip
            FROM exchangeme.bans
            WHERE exchangeme.bans.id = "' . $_POST['BanID'] . '"
        ),
        DEFAULT
    );

    ');

    // Check query status
    if($QUERY_INSERT_DELETED_BAN == true) {

        // Query
        $QUERY_DELETE_BAN = mysqli_query($conn, '
        
        DELETE FROM exchangeme.bans
        WHERE exchangeme.bans.id = "' . $_POST['BanID'] . '";

        ');

    }

}

?>