"use strict";

// Display: inline ----------------------------------------------------
let codeDisplayDiv_1 = document.getElementById("codeDisplayID_1");
let displayButton_1 = document.getElementById("displayBut_1");
// Adds the example code to the html page. ----------------------------
let codeDisplayExample_1 =
`<pre><code>
div div {
  display: inline;
      }
</code></pre>`;

codeDisplayDiv_1.innerHTML = codeDisplayExample_1;
// Runs the function and adds the answer to the html page. -------
displayButton_1.addEventListener("click", displayFuncV1);

function displayFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("displayChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Display: block ----------------------------------------------------
let codeDisplayDiv_2 = document.getElementById("codeDisplayID_2");
let displayButton_2 = document.getElementById("displayBut_2");
// Adds the example code to the html page. ----------------------------
let codeDisplayExample_2 =
`<pre><code>
div span {
  display: block;
      }
</code></pre>`;

codeDisplayDiv_2.innerHTML = codeDisplayExample_2;
// Runs the function and adds the answer to the html page. -------
displayButton_2.addEventListener("click", displayFuncV2);

function displayFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("displayChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Display: none ----------------------------------------------------
let codeDisplayDiv_3 = document.getElementById("codeDisplayID_3");
let displayButton_3 = document.getElementById("displayBut_3");
// Adds the example code to the html page. ----------------------------
let codeDisplayExample_3 =
`<pre><code>
div div {
  display: none;
      }
</code></pre>`;

codeDisplayDiv_3.innerHTML = codeDisplayExample_3;
// Runs the function and adds the answer to the html page. -------
displayButton_3.addEventListener("click", displayFuncV3);

function displayFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("displayChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Display: none ----------------------------------------------------
let codeDisplayDiv_4 = document.getElementById("codeDisplayID_4");
let displayButton_4 = document.getElementById("displayBut_4");
// Adds the example code to the html page. ----------------------------
let codeDisplayExample_4 =
`<pre><code>
div span {
  display: none;
      }
</code></pre>`;

codeDisplayDiv_4.innerHTML = codeDisplayExample_4;
// Runs the function and adds the answer to the html page. -------
displayButton_4.addEventListener("click", displayFuncV4);

function displayFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("displayChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Display: visibility: hidden ---------------------------------------------
let codeDisplayDiv_5 = document.getElementById("codeDisplayID_5");
let displayButton_5 = document.getElementById("displayBut_5");
// Adds the example code to the html page. ----------------------------
let codeDisplayExample_5 =
`<pre><code>
div div {
  visibility: hidden;
      }
</code></pre>`;

codeDisplayDiv_5.innerHTML = codeDisplayExample_5;
// Runs the function and adds the answer to the html page. -------
displayButton_5.addEventListener("click", displayFuncV5);

function displayFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("displayChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Display: visibility: hidden ---------------------------------------------
let codeDisplayDiv_6 = document.getElementById("codeDisplayID_6");
let displayButton_6 = document.getElementById("displayBut_6");
// Adds the example code to the html page. ----------------------------
let codeDisplayExample_6 =
`<pre><code>
div span {
  visibility: hidden;
      }
</code></pre>`;

codeDisplayDiv_6.innerHTML = codeDisplayExample_6;
// Runs the function and adds the answer to the html page. -------
displayButton_6.addEventListener("click", displayFuncV6);

function displayFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("displayChange_6");
};
// /////////////////////////////////////////////////////////////////////
