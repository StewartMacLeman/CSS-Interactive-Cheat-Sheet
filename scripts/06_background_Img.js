"use strict";

// Background Images: font-size ----------------------------------------------------
let codeBGImgDiv_1 = document.getElementById("codeBGImgID_1");
let bgImgButton_1 = document.getElementById("bgImgBut_1");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeBGImgDiv_1.innerHTML = codeBGImgExample_1;
// Runs the function and adds the answer to the html page. -------
bgImgButton_1.addEventListener("click", bgImgFuncV1);

function bgImgFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////
