"use strict";

// Transitions: duration V1 ----------------------------------------------
let codeTransitionsDiv_1 = document.getElementById("codeTransitionsID_1");
let transitionsButton_1 = document.getElementById("transitionsBut_1");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_1 =
`<pre><code>
div div {
  width: 12rem;
  transition: 2s;
 }
</code></pre>`;

codeTransitionsDiv_1.innerHTML = codeTransitionsExample_1;
// Runs the function and adds the answer to the html page. -------
transitionsButton_1.addEventListener("click", transitionsFuncV1);

function transitionsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: duration V2 ----------------------------------------------
let codeTransitionsDiv_2 = document.getElementById("codeTransitionsID_2");
let transitionsButton_2 = document.getElementById("transitionsBut_2");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_2 =
`<pre><code>
div div {
  height: 8rem;
  transition: 3s;
 }
</code></pre>`;

codeTransitionsDiv_2.innerHTML = codeTransitionsExample_2;
// Runs the function and adds the answer to the html page. -------
transitionsButton_2.addEventListener("click", transitionsFuncV2);

function transitionsFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: durations V1 ----------------------------------------------
let codeTransitionsDiv_3 = document.getElementById("codeTransitionsID_3");
let transitionsButton_3 = document.getElementById("transitionsBut_3");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_3 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition:  width 0.5s, height 3s;
 }
</code></pre>`;

codeTransitionsDiv_3.innerHTML = codeTransitionsExample_3;
// Runs the function and adds the answer to the html page. -------
transitionsButton_3.addEventListener("click", transitionsFuncV3);

function transitionsFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: durations V2 ----------------------------------------------
let codeTransitionsDiv_4 = document.getElementById("codeTransitionsID_4");
let transitionsButton_4 = document.getElementById("transitionsBut_4");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_4 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition: 3s;
 }
</code></pre>`;

codeTransitionsDiv_4.innerHTML = codeTransitionsExample_4;
// Runs the function and adds the answer to the html page. -------
transitionsButton_4.addEventListener("click", transitionsFuncV4);

function transitionsFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition-timing-function V1 -----------------------------
let codeTransitionsDiv_5 = document.getElementById("codeTransitionsID_5");
let transitionsButton_5 = document.getElementById("transitionsBut_5");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_5 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition: 5s;
  transition-timing-function: linear;
 }
</code></pre>`;

codeTransitionsDiv_5.innerHTML = codeTransitionsExample_5;
// Runs the function and adds the answer to the html page. -------
transitionsButton_5.addEventListener("click", transitionsFuncV5);

function transitionsFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition-timing-function V2 -----------------------------
let codeTransitionsDiv_6 = document.getElementById("codeTransitionsID_6");
let transitionsButton_6 = document.getElementById("transitionsBut_6");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_6 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition: 5s;
  transition-timing-function: ease;
 }
</code></pre>`;

codeTransitionsDiv_6.innerHTML = codeTransitionsExample_6;
// Runs the function and adds the answer to the html page. -------
transitionsButton_6.addEventListener("click", transitionsFuncV6);

function transitionsFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition-timing-function V3 -----------------------------
let codeTransitionsDiv_7 = document.getElementById("codeTransitionsID_7");
let transitionsButton_7 = document.getElementById("transitionsBut_7");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_7 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition: 5s;
  transition-timing-function: ease-in;
 }
</code></pre>`;

codeTransitionsDiv_7.innerHTML = codeTransitionsExample_7;
// Runs the function and adds the answer to the html page. -------
transitionsButton_7.addEventListener("click", transitionsFuncV7);

function transitionsFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition-timing-function V4 -----------------------------
let codeTransitionsDiv_8 = document.getElementById("codeTransitionsID_8");
let transitionsButton_8 = document.getElementById("transitionsBut_8");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_8 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition: 5s;
  transition-timing-function: ease-out;
 }
</code></pre>`;

codeTransitionsDiv_8.innerHTML = codeTransitionsExample_8;
// Runs the function and adds the answer to the html page. -------
transitionsButton_8.addEventListener("click", transitionsFuncV8);

function transitionsFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition-timing-function V5 -----------------------------
let codeTransitionsDiv_9 = document.getElementById("codeTransitionsID_9");
let transitionsButton_9 = document.getElementById("transitionsBut_9");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_9 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition: 5s;
  transition-timing-function: ease-in-out;
 }
</code></pre>`;

codeTransitionsDiv_9.innerHTML = codeTransitionsExample_9;
// Runs the function and adds the answer to the html page. -------
transitionsButton_9.addEventListener("click", transitionsFuncV9);

function transitionsFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition-delay -------------------------------------
let codeTransitionsDiv_10 = document.getElementById("codeTransitionsID_10");
let transitionsButton_10 = document.getElementById("transitionsBut_10");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_10 =
`<pre><code>
div div {
  width: 12rem;
  height: 8rem;
  transition: 3s;
  transition-delay: 3s;
 }
</code></pre>`;

codeTransitionsDiv_10.innerHTML = codeTransitionsExample_10;
// Runs the function and adds the answer to the html page. -------
transitionsButton_10.addEventListener("click", transitionsFuncV10);

function transitionsFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: shorthand (props: duration type delay) ---------------------
let codeTransitionsDiv_11 = document.getElementById("codeTransitionsID_11");
let transitionsButton_11 = document.getElementById("transitionsBut_11");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_11 =
`<pre><code>
div div {
  width: 12rem;
  transition: 5s ease-out 2s;
 }
</code></pre>`;

codeTransitionsDiv_11.innerHTML = codeTransitionsExample_11;
// Runs the function and adds the answer to the html page. -------
transitionsButton_11.addEventListener("click", transitionsFuncV11);

function transitionsFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition with transform V1 ---------------------------
let codeTransitionsDiv_12 = document.getElementById("codeTransitionsID_12");
let transitionsButton_12 = document.getElementById("transitionsBut_12");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_12 =
`<pre><code>
div div {
  transform: rotate(360deg);
  transition: 3s;
 }
</code></pre>`;

codeTransitionsDiv_12.innerHTML = codeTransitionsExample_12;
// Runs the function and adds the answer to the html page. -------
transitionsButton_12.addEventListener("click", transitionsFuncV12);

function transitionsFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition with transform V2 ---------------------------
let codeTransitionsDiv_13 = document.getElementById("codeTransitionsID_13");
let transitionsButton_13 = document.getElementById("transitionsBut_13");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_13 =
`<pre><code>
div div {
  transform: scale(2);
  transition: 3s;
 }
</code></pre>`;

codeTransitionsDiv_13.innerHTML = codeTransitionsExample_13;
// Runs the function and adds the answer to the html page. -------
transitionsButton_13.addEventListener("click", transitionsFuncV13);

function transitionsFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Transitions: transition with transform V3 ---------------------------
let codeTransitionsDiv_14 = document.getElementById("codeTransitionsID_14");
let transitionsButton_14 = document.getElementById("transitionsBut_14");
// Adds the example code to the html page. ----------------------------
let codeTransitionsExample_14 =
`<pre><code>
div div {
  transform: scaleY(2) rotateY(360deg);
  transition: 3s;
 }
</code></pre>`;

codeTransitionsDiv_14.innerHTML = codeTransitionsExample_14;
// Runs the function and adds the answer to the html page. -------
transitionsButton_14.addEventListener("click", transitionsFuncV14);

function transitionsFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transitionChange_14");
};
// /////////////////////////////////////////////////////////////////////
