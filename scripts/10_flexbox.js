"use strict";

// Flexbox: font-size ----------------------------------------------------
let codeFlexboxDiv_1 = document.getElementById("codeFlexboxID_1");
let flexboxButton_1 = document.getElementById("flexboxBut_1");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeFlexboxDiv_1.innerHTML = codeFlexboxExample_1;
// Runs the function and adds the answer to the html page. -------
flexboxButton_1.addEventListener("click", flexboxFuncV1);

function flexboxFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
