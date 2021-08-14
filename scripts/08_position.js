"use strict";

// Position: static ----------------------------------------------------
let codePositionDiv_1 = document.getElementById("codePositionID_1");
let positionButton_1 = document.getElementById("positionBut_1");
// Adds the example code to the html page. ----------------------------
let codePositionExample_1 =
`<pre><code>
div div {
  position: static;
  top: 4rem;
  left: 6rem;
 }
</code></pre>`;

codePositionDiv_1.innerHTML = codePositionExample_1;
// Runs the function and adds the answer to the html page. -------
positionButton_1.addEventListener("click", positionFuncV1);

function positionFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Position: relative V1 -----------------------------------------------
let codePositionDiv_2 = document.getElementById("codePositionID_2");
let positionButton_2 = document.getElementById("positionBut_2");
// Adds the example code to the html page. ----------------------------
let codePositionExample_2 =
`<pre><code>
div div {
  position: relative;
  top: 4rem;
  left: 6rem;
 }
</code></pre>`;

codePositionDiv_2.innerHTML = codePositionExample_2;
// Runs the function and adds the answer to the html page. -------
positionButton_2.addEventListener("click", positionFuncV2);

function positionFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Position: relative V2 -----------------------------------------------
let codePositionDiv_3 = document.getElementById("codePositionID_3");
let positionButton_3 = document.getElementById("positionBut_3");
// Adds the example code to the html page. ----------------------------
let codePositionExample_3 =
`<pre><code>
div div {
  position: relative;
  top: 50%;
  left: 50%;
 }
</code></pre>`;

codePositionDiv_3.innerHTML = codePositionExample_3;
// Runs the function and adds the answer to the html page. -------
positionButton_3.addEventListener("click", positionFuncV3);

function positionFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Position: relative V3 -----------------------------------------------
let codePositionDiv_4 = document.getElementById("codePositionID_4");
let positionButton_4 = document.getElementById("positionBut_4");
// Adds the example code to the html page. ----------------------------
let codePositionExample_4 =
`<pre><code>
div div {
  position: relative;
  top: -1rem;
  left: -3rem;
 }
</code></pre>`;

codePositionDiv_4.innerHTML = codePositionExample_4;
// Runs the function and adds the answer to the html page. -------
positionButton_4.addEventListener("click", positionFuncV4);

function positionFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Position: fixed ----------------------------------------------------
let codePositionDiv_5 = document.getElementById("codePositionID_5");
let positionButton_5 = document.getElementById("positionBut_5");
// Adds the example code to the html page. ----------------------------
let codePositionExample_5 =
`<pre><code>
div div {
  position: fixed;
  top: 0rem;
  left: 20%;
  background-color: red;
 }
</code></pre>`;

codePositionDiv_5.innerHTML = codePositionExample_5;
// Runs the function and adds the answer to the html page. -------
positionButton_5.addEventListener("click", positionFuncV5);

function positionFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Position: absolute -------------------------------------------------
let codePositionDiv_6 = document.getElementById("codePositionID_6");
let positionButton_6 = document.getElementById("positionBut_6");
// Adds the example code to the html page. ----------------------------
let codePositionExample_6 =
`<pre><code>
div {
  position: relative;
}
div div {
  position: absolute;
  top: 0rem;
  left: 20%;
 }
</code></pre>`;

codePositionDiv_6.innerHTML = codePositionExample_6;
// Runs the function and adds the answer to the html page. -------
positionButton_6.addEventListener("click", positionFuncV6);

function positionFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Position: sticky V1 ------------------------------------------------
let codePositionDiv_7 = document.getElementById("codePositionID_7");
let positionButton_7 = document.getElementById("positionBut_7");
// Adds the example code to the html page. ----------------------------
let codePositionExample_7 =
`<pre><code>
div div {
  position: sticky;
  top: 0rem;
 }
</code></pre>`;

codePositionDiv_7.innerHTML = codePositionExample_7;
// Runs the function and adds the answer to the html page. -------
positionButton_7.addEventListener("click", positionFuncV7);

function positionFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Position: sticky V2 ------------------------------------------------
let codePositionDiv_8 = document.getElementById("codePositionID_8");
let positionButton_8 = document.getElementById("positionBut_8");
// Adds the example code to the html page. ----------------------------
let codePositionExample_8 =
`<pre><code>
div div {
  position: sticky;
  top: 0rem;
 }
</code></pre>`;

codePositionDiv_8.innerHTML = codePositionExample_8;
// Runs the function and adds the answer to the html page. -------
positionButton_8.addEventListener("click", positionFuncV8);

function positionFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("positionChange_8");
};
// /////////////////////////////////////////////////////////////////////
