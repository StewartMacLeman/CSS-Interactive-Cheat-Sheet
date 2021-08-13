"use strict";

// Borders & Shadows: font-size ----------------------------------------------------
let codeBordShadDiv_1 = document.getElementById("codeBordShadID_1");
let bordShadButton_1 = document.getElementById("bordShadBut_1");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeBordShadDiv_1.innerHTML = codeBordShadExample_1;
// Runs the function and adds the answer to the html page. -------
bordShadButton_1.addEventListener("click", bordShadFuncV1);

function bordShadFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
