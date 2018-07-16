// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Loop through table data
for(var i = 0; i < document.getElementsByClassName("table users-table underline").length; i++) {

    // Add the event listner to the data
    document.getElementsByClassName("table users-table underline")[i].addEventListener("click", function() {

        // Check to make sure one doesnt already exist
        if(!document.getElementsByClassName("table users-table profile-display")[0]) {

            // Create the element
            let HTMLDivElement_User_Container = document.createElement("div");

            // Set the attributes
            HTMLDivElement_User_Container.setAttribute("class", "table users-table profile-display");
            HTMLDivElement_User_Container.setAttribute("data-profile", this.getAttribute("value"));

            // Add the event listner
            document.addEventListener("click", function(e) {

                // Make sure element exists
                if(document.getElementsByClassName("table users-table profile-display")[0]) {

                    // Check that clicked element isnt apart of the user card
                    if(e.target.getAttribute("class") == null) {

                        // Remove the user card
                        HTMLDivElement_User_Container.remove();

                    }

                    // Check that clicked element isnt apart of the user card
                    if(
                        !e.target.getAttribute("class").includes("profile")
                    &&  !e.target.getAttribute("class").includes("action")
                    ) {

                        // Remove the user card
                        HTMLDivElement_User_Container.remove();

                    }

                }

            }, true);

            // Append the element
            document.getElementById("options-tablecontainer").appendChild(HTMLDivElement_User_Container);


            if(!document.getElementById("script-usercards")) {

                // Create the AJAX script
                let HTMLScriptElement_AJAX_UserCards = document.createElement("script");
            
                // Set the attributes
                HTMLScriptElement_AJAX_UserCards.setAttribute("src", "ajax/min/userCardLoad.min.js");
                HTMLScriptElement_AJAX_UserCards.setAttribute("id", "script-usercards");
            
                // Append the element
                document.getElementById("users-online-panel").appendChild(HTMLScriptElement_AJAX_UserCards);
            
            } else {
            
                // Delete the script
                document.getElementById("script-usercards").remove();
            
                // Create the AJAX script
                let HTMLScriptElement_AJAX_UserCards = document.createElement("script");
            
                // Set the attributes
                HTMLScriptElement_AJAX_UserCards.setAttribute("src", "ajax/min/userCardLoad.min.js");
                HTMLScriptElement_AJAX_UserCards.setAttribute("id", "script-usercards");
            
                // Append the element
                document.getElementById("users-online-panel").appendChild(HTMLScriptElement_AJAX_UserCards);
            
            }

        }

    }, true);

}