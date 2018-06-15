// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

document.addEventListener('DOMContentLoaded', function() {

    var sidebarActionClick = 0;

    document.getElementById('content-sidebar-action-container').addEventListener('click', function() {

        // FIXME: Transformations for action container are off and don't move in time with sidebar

        if(sidebarActionClick == 1) {

            document.getElementById('content-sidebar-action-container').style.backgroundImage = "url('/Exchange.me/img/materialdesign/ic_format_list_bulleted_24px.svg')";
            document.getElementById('content-sidebar-action-container').style.transition = "transform 700ms ease-in-out";
            document.getElementById('content-sidebar-action-container').style.transform = "translateX(0px)";


            document.getElementById('content-sidebar-container').style.display = "grid";
            document.getElementById('content-sidebar-container').style.position = "relative";
            document.getElementById('content-sidebar-container').style.left = "-160px";

            sidebarActionClick = 0;

        } else {

            document.getElementById('content-sidebar-action-container').style.backgroundImage = "url('/Exchange.me/img/materialdesign/ic_clear_24px.svg')";
            document.getElementById('content-sidebar-action-container').style.transition = "transform 750ms ease-in-out";
            document.getElementById('content-sidebar-action-container').style.transform = "translateX(160px)";
            document.getElementById('content-sidebar-action-container').style.fill = "#FF0000";

            document.getElementById('content-sidebar-container').style.display = "grid";
            document.getElementById('content-sidebar-container').style.position = "relative";
            document.getElementById('content-sidebar-container').style.left = "0px";

            sidebarActionClick = 1;

        }

    }, true);

}, false);