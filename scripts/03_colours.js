"use strict";

// Colours: font-size ----------------------------------------------------
let codeColoursDiv_1 = document.getElementById("codeColoursID_1");
let coloursButton_1 = document.getElementById("coloursBut_1");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeColoursDiv_1.innerHTML = codeColoursExample_1;
// Runs the function and adds the answer to the html page. -------
coloursButton_1.addEventListener("click", coloursFuncV1);

function coloursFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
