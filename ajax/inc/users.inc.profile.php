<?php

// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Start the outputbuffer
ob_start();

// Require database connection

require_once('../../mysql.php');

// Check POST
if(
    isset($_POST['User'])
&&  !empty($_POST['User'])
&&  isset($_POST['CurrentUser'])
&&  !empty($_POST['CurrentUser'])
) {

    // Query
    $QUERY_SELECT_PROFILE = mysqli_query($conn, "
    
    SELECT
    exchangeme.accounts.alias,
    exchangeme.accounts.occupation,
    exchangeme.accounts.company
    FROM exchangeme.accounts
    WHERE exchangeme.accounts.username = '" . $_POST['User'] . "';
    
    ");

    // Fetch Results
    $RESULT_SELECT_PROFILE = mysqli_fetch_array($QUERY_SELECT_PROFILE);

    echo "
    
        <object class='table users-table profile-image' data='img/materialdesign/ic_account_circle_24px.svg'></object>
        
    ";

    if(!empty($RESULT_SELECT_PROFILE[0])) {

        echo "
        
            <p class='table users-table profile-name'>" . $_POST['User'] . " (" . $RESULT_SELECT_PROFILE[0] . ")</p>

        ";

    } else {

        echo "
        
            <p class='table users-table profile-name'>" . $_POST['User'] . "</p>

        ";

    }

    if(!empty($RESULT_SELECT_PROFILE[1])) {

        if(!empty($RESULT_SELECT_PROFILE[2])) {

            echo "

                <p class='table users-table profile-occupation'>" . $RESULT_SELECT_PROFILE[1] . " @ " . $RESULT_SELECT_PROFILE[2] . "</p>

            ";

        } else {

            echo "
    
                <p class='table users-table profile-occupation'>" . $RESULT_SELECT_PROFILE[1] . "</p>
    
            ";

        }

    } else {

        echo "
    
            <p class='table users-table profile-occupation'>Unoccupied</p>
    
        ";

    }

    // Query
    $QUERY_CHECK_RELATIONSHIP = mysqli_query($conn, "
    
    SELECT *
    FROM exchangeme.friends
    WHERE exchangeme.friends.userid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = '" . strip_tags($_POST["CurrentUser"]) . "'
        AND exchangeme.accounts.session = '" . $_COOKIE['loggedin'] . "'
    )
    AND exchangeme.friends.friendid = (
        SELECT
        exchangeme.accounts.id
        FROM exchangeme.accounts
        WHERE exchangeme.accounts.username = '" . strip_tags($_POST['User']) . "'
    );
    
    ");

    // Fetch Results
    $RESULT_CHECK_RELATIONSHIP = mysqli_fetch_array($QUERY_CHECK_RELATIONSHIP);

    echo "
    
        <div class='table users-table action-container'>
            
        ";

            if(mysqli_num_rows($QUERY_CHECK_RELATIONSHIP) == 0) {

                echo "
                
                    <div id='add-user' class='table users-table action-wrapper' data-user='" . $_POST['User'] . "' title='Add Friend'>

                        <object class='table users-table add-user' data='img/materialdesign/ic_add_24px.svg' type='image/svg+xml'></object>

                    </div>

                ";

            } else {

                echo "

                    <div id='remove-user' class='table users-table action-wrapper' data-user='" . $_POST['User'] . "' title='Remove Friend'>

                        <object class='table users-table remove-user' data='img/materialdesign/ic_remove_24px.svg' type='image/svg+xml'></object>

                    </div>

                ";

            }

        echo "

            <div id='block-user' class='table users-table action-wrapper' data-user='" . $_POST['User'] . "' title='Block User'>
            
                <object class='table users-table block-user block-user' data='img/materialdesign/ic_voice_over_off_24px.svg' type='image/svg+xml'></object>

            </div>

        </div>
    
    ";

}

?>