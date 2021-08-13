"use strict";

// Animations: --- ----------------------------------------------------
let codeAnimationsDiv_1 = document.getElementById("codeAnimationsID_1");
let animationsButton_1 = document.getElementById("animationsBut_1");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeAnimationsDiv_1.innerHTML = codeAnimationsExample_1;
// Runs the function and adds the answer to the html page. -------
animationsButton_1.addEventListener("click", animationsFuncV1);

function animationsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
