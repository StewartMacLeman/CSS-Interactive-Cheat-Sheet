"use strict";

// Transitions: --- ----------------------------------------------------
let codeTransitionsDiv_1 = document.getElementById("codeTransitionsID_1");
let transitionsButton_1 = document.getElementById("transitionsBut_1");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeTransitionsDiv_1.innerHTML = codeTransitionsExample_1;
// Runs the function and adds the answer to the html page. -------
transitionsButton_1.addEventListener("click", transitionsFuncV1);

function transitionsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
