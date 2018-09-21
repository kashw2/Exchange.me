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
&&  !empty($_POST['WarningID'])
&&  isset($_POST['WarningID'])
) {

    // Query
    $QUERY_INSERT_DELETED_WARNING = mysqli_query($conn, '
    
    INSERT INTO exchangeme.deletedwarnings (
        exchangeme.deletedwarnings.id,
        exchangeme.deletedwarnings.userid,
        exchangeme.deletedwarnings.date,
        exchangeme.deletedwarnings.admin,
        exchangeme.deletedwarnings.brief,
        exchangeme.deletedwarnings.ip,
        exchangeme.deletedwarnings.lastmodified
    ) VALUES (
        DEFAULT,
        (
            SELECT
            exchangeme.warnings.userid
            FROM exchangeme.warnings
            WHERE exchangeme.warnings.id = "' . $_POST['WarningID'] . '"
        ),
        (
            SELECT
            exchangeme.warnings.date
            FROM exchangeme.warnings
            WHERE exchangeme.warnings.id = "' . $_POST['WarningID'] . '"
        ),
        (
            SELECT
            exchangeme.warnings.admin
            FROM exchangeme.warnings
            WHERE exchangeme.warnings.id = "' . $_POST['WarningID'] . '"
        ),
        (
            SELECT
            exchangeme.warnings.brief
            FROM exchangeme.warnings
            WHERE exchangeme.warnings.id = "' . $_POST['WarningID'] . '"
        ),
        (
            SELECT
            exchangeme.warnings.ip
            FROM exchangeme.warnings
            WHERE exchangeme.warnings.id = "' . $_POST['WarningID'] . '"
        ),
        DEFAULT
    );

    ');

    // Check query status
    if($QUERY_INSERT_DELETED_WARNING == true) {

        // Query
        $QUERY_DELETE_WARNING = mysqli_query($conn, '
        
        DELETE FROM exchangeme.warnings
        WHERE exchangeme.warnings.id = "' . $_POST['WarningID'] . '";

        ');

    }

}

?>