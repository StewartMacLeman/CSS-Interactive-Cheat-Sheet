"use strict";

// Grid: --- ----------------------------------------------------
let codeGridDiv_1 = document.getElementById("codeGridID_1");
let gridButton_1 = document.getElementById("gridBut_1");
// Adds the example code to the html page. ----------------------------
let codeGridExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeGridDiv_1.innerHTML = codeGridExample_1;
// Runs the function and adds the answer to the html page. -------
gridButton_1.addEventListener("click", gridFuncV1);

function gridFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
