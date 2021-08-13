"use strict";

// Display: font-size ----------------------------------------------------
let codeDisplayDiv_1 = document.getElementById("codeDisplayID_1");
let displayButton_1 = document.getElementById("displayBut_1");
// Adds the example code to the html page. ----------------------------
let codeDisplayExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeDisplayDiv_1.innerHTML = codeDisplayExample_1;
// Runs the function and adds the answer to the html page. -------
displayButton_1.addEventListener("click", displayFuncV1);

function displayFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
