"use strict";

// Floats: float: left V1 ------------------------------------------------
let codeFloatsDiv_1 = document.getElementById("codeFloatsID_1");
let floatsButton_1 = document.getElementById("floatsBut_1");
// Adds the example code to the html page. ----------------------------
let codeFloatsExample_1 =
`<pre><code>
div div {
  float: left;
  }
</code></pre>`;

codeFloatsDiv_1.innerHTML = codeFloatsExample_1;
// Runs the function and adds the answer to the html page. -------
floatsButton_1.addEventListener("click", floatsFuncV1);

function floatsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("floatChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Floats: float: left V2 ------------------------------------------------
let codeFloatsDiv_2 = document.getElementById("codeFloatsID_2");
let floatsButton_2 = document.getElementById("floatsBut_2");
// Adds the example code to the html page. ----------------------------
let codeFloatsExample_2 =
`<pre><code>
div div {
  float: left;
  }
</code></pre>`;

codeFloatsDiv_2.innerHTML = codeFloatsExample_2;
// Runs the function and adds the answer to the html page. -------
floatsButton_2.addEventListener("click", floatsFuncV2);

function floatsFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("floatChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Floats: float: right V1 ---------------------------------------------
let codeFloatsDiv_3 = document.getElementById("codeFloatsID_3");
let floatsButton_3 = document.getElementById("floatsBut_3");
// Adds the example code to the html page. ----------------------------
let codeFloatsExample_3 =
`<pre><code>
div div {
  float: right;
  }
</code></pre>`;

codeFloatsDiv_3.innerHTML = codeFloatsExample_3;
// Runs the function and adds the answer to the html page. -------
floatsButton_3.addEventListener("click", floatsFuncV3);

function floatsFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("floatChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Floats: float: right V2 ---------------------------------------------
let codeFloatsDiv_4 = document.getElementById("codeFloatsID_4");
let floatsButton_4 = document.getElementById("floatsBut_4");
// Adds the example code to the html page. ----------------------------
let codeFloatsExample_4 =
`<pre><code>
div div {
  float: right;
  }
</code></pre>`;

codeFloatsDiv_4.innerHTML = codeFloatsExample_4;
// Runs the function and adds the answer to the html page. -------
floatsButton_4.addEventListener("click", floatsFuncV4);

function floatsFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("floatChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Floats: float: none (default) -----------------------------------------
let codeFloatsDiv_5 = document.getElementById("codeFloatsID_5");
let floatsButton_5 = document.getElementById("floatsBut_5");
// Adds the example code to the html page. ----------------------------
let codeFloatsExample_5 =
`<pre><code>
div div {
  float: none;
  }
</code></pre>`;

codeFloatsDiv_5.innerHTML = codeFloatsExample_5;
// Runs the function and adds the answer to the html page. -------
floatsButton_5.addEventListener("click", floatsFuncV5);

function floatsFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("floatChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Floats: clear: left ------------------------------------------------
let codeFloatsDiv_6 = document.getElementById("codeFloatsID_6");
let floatsButton_6 = document.getElementById("floatsBut_6");
// Adds the example code to the html page. ----------------------------
let codeFloatsExample_6 =
`<pre><code>
div div {
  clear: left;
  }
</code></pre>`;

codeFloatsDiv_6.innerHTML = codeFloatsExample_6;
// Runs the function and adds the answer to the html page. -------
floatsButton_6.addEventListener("click", floatsFuncV6);

function floatsFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("floatChange_6");
};
// /////////////////////////////////////////////////////////////////////
