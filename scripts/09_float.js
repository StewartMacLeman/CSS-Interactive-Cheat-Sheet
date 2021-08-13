"use strict";

// Floats: font-size ----------------------------------------------------
let codeFloatsDiv_1 = document.getElementById("codeFloatsID_1");
let floatsButton_1 = document.getElementById("floatsBut_1");
// Adds the example code to the html page. ----------------------------
let codeFloatsExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeFloatsDiv_1.innerHTML = codeFloatsExample_1;
// Runs the function and adds the answer to the html page. -------
floatsButton_1.addEventListener("click", floatsFuncV1);

function floatsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
