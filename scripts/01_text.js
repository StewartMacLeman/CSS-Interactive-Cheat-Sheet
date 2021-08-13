"use strict";

// Text: font-size ----------------------------------------------------
let codeTextDiv_1 = document.getElementById("codeTextID_1");
let textButton_1 = document.getElementById("textBut_1")
// Adds the example code to the html page. ----------------------------
let codeTextExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeTextDiv_1.innerHTML = codeTextExample_1;
// Runs the function and adds the answer to the html page. -------
textButton_1.addEventListener("click", textFuncV1);

function textFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
}
// /////////////////////////////////////////////////////////////////////
