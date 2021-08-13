"use strict";

// Transforms: --- ----------------------------------------------------
let codeTransformsDiv_1 = document.getElementById("codeTransformsID_1");
let transformsButton_1 = document.getElementById("transformsBut_1");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeTransformsDiv_1.innerHTML = codeTransformsExample_1;
// Runs the function and adds the answer to the html page. -------
transformsButton_1.addEventListener("click", transformsFuncV1);

function transformsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
