"use strict";

// Displays / hides the navigation. ----------------------------------
 let navigationButton = document.querySelector(".navButton");
 navigationButton.addEventListener("click", displayNavigation)

 function displayNavigation(e){
   let nextElement = e.target.nextElementSibling;
   nextElement.classList.toggle("hide");

   let button = e.target;
   let buttonText = e.target.textContent;
   let hide = "Hide Nav";
   let show = "Show Nav";

   if ( buttonText == "Show Nav" ){
     button.textContent = hide;
   } else if ( buttonText == "Hide Nav" ){
     button.textContent = show;
   }
 }
 // Updates the "Add the CSS" buttons with the appropriate text.---------
 let outcomeButtons = document.querySelectorAll(".changeBut");

 for (let i = 0; i < outcomeButtons.length; i++){
   outcomeButtons[i].addEventListener("click", updateText);
 }

 function updateText(e){

   let button = e.target;
   let buttonText = e.target.textContent;
   let hide = "Reset";
   let show = "Add the CSS";

   if ( buttonText == "Add the CSS" ){
     button.textContent = hide;
   } else if ( buttonText == "Reset" ){
     button.textContent = show;
   }
 }
