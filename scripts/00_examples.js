"use strict";

// Home Page Example 1 ---------------------------------------------------
let codeDiv_1 = document.getElementById("codeExID_1");
let exampleButton_1 = document.getElementById("exBut_1")
// Adds the example code to the html page. ----------------------------
let codeExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeDiv_1.innerHTML = codeExample_1;
// Runs the function and adds the answer to the html page. -------
exampleButton_1.addEventListener("click", exampleFuncV1);

function exampleFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
}
// /////////////////////////////////////////////////////////////////////

// Home Page Example 2 ---------------------------------------------------
let codeDiv_2 = document.getElementById("codeExID_2");
let exampleButton_2 = document.getElementById("exBut_2")
// Adds the example code to the html page. ----------------------------
let codeExample_2 =
`<pre><code>
div p {
  color: tomato;
  font-weight: bold;
  font-style: italic;;
  }
</code></pre>`;

codeDiv_2.innerHTML = codeExample_2;
// Runs the function and adds the answer to the html page. -------
exampleButton_2.addEventListener("click", exampleFuncV2);

function exampleFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_1");
}
// /////////////////////////////////////////////////////////////////////
