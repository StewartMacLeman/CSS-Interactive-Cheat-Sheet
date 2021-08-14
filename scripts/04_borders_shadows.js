"use strict";

// Borders & Shadows: border-width ----------------------------------------------------
let codeBordShadDiv_1 = document.getElementById("codeBordShadID_1");
let bordShadButton_1 = document.getElementById("bordShadBut_1");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_1 =
`<pre><code>
div {
  border-width: 4px;
  }
</code></pre>`;

codeBordShadDiv_1.innerHTML = codeBordShadExample_1;
// Runs the function and adds the answer to the html page. -------
bordShadButton_1.addEventListener("click", bordShadFuncV1);

function bordShadFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-style ----------------------------------------------------
let codeBordShadDiv_2 = document.getElementById("codeBordShadID_2");
let bordShadButton_2 = document.getElementById("bordShadBut_2");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_2 =
`<pre><code>
div {
  border-style: dotted;
  }
</code></pre>`;

codeBordShadDiv_2.innerHTML = codeBordShadExample_2;
// Runs the function and adds the answer to the html page. -------
bordShadButton_2.addEventListener("click", bordShadFuncV2);

function bordShadFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-color ----------------------------------------------------
let codeBordShadDiv_3 = document.getElementById("codeBordShadID_3");
let bordShadButton_3 = document.getElementById("bordShadBut_3");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_3 =
`<pre><code>
div {
  border-color: tomato;
  }
</code></pre>`;

codeBordShadDiv_3.innerHTML = codeBordShadExample_3;
// Runs the function and adds the answer to the html page. -------
bordShadButton_3.addEventListener("click", bordShadFuncV3);

function bordShadFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border shorthand ---------------------------------------
let codeBordShadDiv_4 = document.getElementById("codeBordShadID_4");
let bordShadButton_4 = document.getElementById("bordShadBut_4");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_4 =
`<pre><code>
div {
  border: 4px dotted tomato;
  }
</code></pre>`;

codeBordShadDiv_4.innerHTML = codeBordShadExample_4;
// Runs the function and adds the answer to the html page. -------
bordShadButton_4.addEventListener("click", bordShadFuncV4);

function bordShadFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-top ---------------------------------------
let codeBordShadDiv_5 = document.getElementById("codeBordShadID_5");
let bordShadButton_5 = document.getElementById("bordShadBut_5");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_5 =
`<pre><code>
div {
  border-top: 4px dotted tomato;
  }
</code></pre>`;

codeBordShadDiv_5.innerHTML = codeBordShadExample_5;
// Runs the function and adds the answer to the html page. -------
bordShadButton_5.addEventListener("click", bordShadFuncV5);

function bordShadFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-radius V1 ----------------------------------
let codeBordShadDiv_6 = document.getElementById("codeBordShadID_6");
let bordShadButton_6 = document.getElementById("bordShadBut_6");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_6 =
`<pre><code>
div {
  border-radius: 10px;
  }
</code></pre>`;

codeBordShadDiv_6.innerHTML = codeBordShadExample_6;
// Runs the function and adds the answer to the html page. -------
bordShadButton_6.addEventListener("click", bordShadFuncV6);

function bordShadFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-radius V2 ----------------------------------
let codeBordShadDiv_7 = document.getElementById("codeBordShadID_7");
let bordShadButton_7 = document.getElementById("bordShadBut_7");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_7 =
`<pre><code>
div {
  border-radius: 10px 30px;
  }
</code></pre>`;

codeBordShadDiv_7.innerHTML = codeBordShadExample_7;
// Runs the function and adds the answer to the html page. -------
bordShadButton_7.addEventListener("click", bordShadFuncV7);

function bordShadFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-radius V3 ----------------------------------
let codeBordShadDiv_8 = document.getElementById("codeBordShadID_8");
let bordShadButton_8 = document.getElementById("bordShadBut_8");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_8 =
`<pre><code>
div {
  border-radius: 10px 40px 20px;
  }
</code></pre>`;

codeBordShadDiv_8.innerHTML = codeBordShadExample_8;
// Runs the function and adds the answer to the html page. -------
bordShadButton_8.addEventListener("click", bordShadFuncV8);

function bordShadFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-radius V4 ----------------------------------
let codeBordShadDiv_9 = document.getElementById("codeBordShadID_9");
let bordShadButton_9 = document.getElementById("bordShadBut_9");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_9 =
`<pre><code>
div {
  border-radius: 10px 20px 30px 40px;
  }
</code></pre>`;

codeBordShadDiv_9.innerHTML = codeBordShadExample_9;
// Runs the function and adds the answer to the html page. -------
bordShadButton_9.addEventListener("click", bordShadFuncV9);

function bordShadFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-top-left-radius V1 --------------------------
let codeBordShadDiv_10 = document.getElementById("codeBordShadID_10");
let bordShadButton_10 = document.getElementById("bordShadBut_10");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_10 =
`<pre><code>
div {
  border-top-left-radius: 10px;
  }
</code></pre>`;

codeBordShadDiv_10.innerHTML = codeBordShadExample_10;
// Runs the function and adds the answer to the html page. -------
bordShadButton_10.addEventListener("click", bordShadFuncV10);

function bordShadFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-top-left-radius V2 --------------------------
let codeBordShadDiv_11 = document.getElementById("codeBordShadID_11");
let bordShadButton_11 = document.getElementById("bordShadBut_11");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_11 =
`<pre><code>
div {
  border-top-left-radius: 10px 40px;
  }
</code></pre>`;

codeBordShadDiv_11.innerHTML = codeBordShadExample_11;
// Runs the function and adds the answer to the html page. -------
bordShadButton_11.addEventListener("click", bordShadFuncV11);

function bordShadFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: border-top-right-radius --------------------------
let codeBordShadDiv_12 = document.getElementById("codeBordShadID_12");
let bordShadButton_12 = document.getElementById("bordShadBut_12");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_12 =
`<pre><code>
div {
  border-top-right-radius: 10px 40px;
  }
</code></pre>`;

codeBordShadDiv_12.innerHTML = codeBordShadExample_12;
// Runs the function and adds the answer to the html page. -------
bordShadButton_12.addEventListener("click", bordShadFuncV12);

function bordShadFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: box-shadow V1 -----------------------------------
let codeBordShadDiv_13 = document.getElementById("codeBordShadID_13");
let bordShadButton_13 = document.getElementById("bordShadBut_13");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_13 =
`<pre><code>
div {
  box-shadow: 15px 5px;
  }
</code></pre>`;

codeBordShadDiv_13.innerHTML = codeBordShadExample_13;
// Runs the function and adds the answer to the html page. -------
bordShadButton_13.addEventListener("click", bordShadFuncV13);

function bordShadFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: box-shadow V2 -----------------------------------
let codeBordShadDiv_14 = document.getElementById("codeBordShadID_14");
let bordShadButton_14 = document.getElementById("bordShadBut_14");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_14 =
`<pre><code>
div {
  box-shadow: 15px 5px grey;
  }
</code></pre>`;

codeBordShadDiv_14.innerHTML = codeBordShadExample_14;
// Runs the function and adds the answer to the html page. -------
bordShadButton_14.addEventListener("click", bordShadFuncV14);

function bordShadFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: box-shadow V3 -----------------------------------
let codeBordShadDiv_15 = document.getElementById("codeBordShadID_15");
let bordShadButton_15 = document.getElementById("bordShadBut_15");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_15 =
`<pre><code>
div {
  box-shadow: 15px 5px 5px grey;
  }
</code></pre>`;

codeBordShadDiv_15.innerHTML = codeBordShadExample_15;
// Runs the function and adds the answer to the html page. -------
bordShadButton_15.addEventListener("click", bordShadFuncV15);

function bordShadFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_15");
};
// /////////////////////////////////////////////////////////////////////

// Borders & Shadows: box-shadow V4 -----------------------------------
let codeBordShadDiv_16 = document.getElementById("codeBordShadID_16");
let bordShadButton_16 = document.getElementById("bordShadBut_16");
// Adds the example code to the html page. ----------------------------
let codeBordShadExample_16 =
`<pre><code>
div {
  box-shadow: 8px 3px 3px darkgrey, 20px 7px 7px lightgrey;
  }
</code></pre>`;

codeBordShadDiv_16.innerHTML = codeBordShadExample_16;
// Runs the function and adds the answer to the html page. -------
bordShadButton_16.addEventListener("click", bordShadFuncV16);

function bordShadFuncV16(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("bordersChange_16");
};
// /////////////////////////////////////////////////////////////////////
