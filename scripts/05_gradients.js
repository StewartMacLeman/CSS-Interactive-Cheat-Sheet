"use strict";

// Gradients: font-size ----------------------------------------------------
let codeGradDiv_1 = document.getElementById("codeGradID_1");
let gradButton_1 = document.getElementById("gradBut_1");
// Adds the example code to the html page. ----------------------------
let codeGradExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeGradDiv_1.innerHTML = codeGradExample_1;
// Runs the function and adds the answer to the html page. -------
gradButton_1.addEventListener("click", gradFuncV1);

function gradFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
