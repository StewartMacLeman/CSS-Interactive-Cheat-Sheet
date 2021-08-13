"use strict";

// Selectors: font-size ----------------------------------------------------
let codeSelectorDiv_1 = document.getElementById("codeSelectorID_1");
let selectorButton_1 = document.getElementById("selectorBut_1");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeSelectorDiv_1.innerHTML = codeSelectorExample_1;
// Runs the function and adds the answer to the html page. -------
selectorButton_1.addEventListener("click", selectorFuncV1);

function selectorFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
