"use strict";

// Position: font-size ----------------------------------------------------
let codePositionDiv_1 = document.getElementById("codePositionID_1");
let positionButton_1 = document.getElementById("positionBut_1");
// Adds the example code to the html page. ----------------------------
let codePositionExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codePositionDiv_1.innerHTML = codePositionExample_1;
// Runs the function and adds the answer to the html page. -------
positionButton_1.addEventListener("click", positionFuncV1);

function positionFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
