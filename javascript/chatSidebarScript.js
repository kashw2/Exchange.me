// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

'use strict';

// Add the event listner
document.addEventListener('DOMContentLoaded', function() {

    // Add the event listner
    document.getElementById("sidebar-account").addEventListener('click', function() {

        // Change the elements styling

            document.getElementById("sidebar-account").style.backgroundColor = "#0bb700";
            document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
            document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
            document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
            document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

    }, true);

    // Add the event listner
    document.getElementById("sidebar-users").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#0bb700";
        document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

    }, true);

    // Add the event listner
    document.getElementById("sidebar-friends").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-friends").style.backgroundColor = "#0bb700";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

    }, true);

    // Add the event listner
    document.getElementById("sidebar-blocked").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#0bb700";
        document.getElementById("sidebar-settings").style.backgroundColor = "#25cc3b";

    }, true);

    // Add the event listner
    document.getElementById("sidebar-settings").addEventListener('click', function() {

        // Change the elements styling

        document.getElementById("sidebar-account").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-users").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-friends").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-blocked").style.backgroundColor = "#25cc3b";
        document.getElementById("sidebar-settings").style.backgroundColor = "#0bb700";

    }, true);

}, true);