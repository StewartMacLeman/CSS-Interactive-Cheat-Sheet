"use strict";

// Animations: animation-name & animation-duration V1 -------------------
let codeAnimationsDiv_1 = document.getElementById("codeAnimationsID_1");
let animationsButton_1 = document.getElementById("animationsBut_1");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_1 =
`<pre><code>
@keyframes colour_change {
  from {background-color: linen;}
  to {background-color: darkgreen;}
}
.div div {
  animation-name: colour_change;
  animation-duration: 5s;
</code></pre>`;

codeAnimationsDiv_1.innerHTML = codeAnimationsExample_1;
// Runs the function and adds the answer to the html page. -------
animationsButton_1.addEventListener("click", animationsFuncV1);

function animationsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-name & animation-duration V2 -------------------
let codeAnimationsDiv_2 = document.getElementById("codeAnimationsID_2");
let animationsButton_2 = document.getElementById("animationsBut_2");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_2 =
`<pre><code>
@keyframes colour_size_change {
  from {background-color: linen;
        }
  to   {background-color: darkgreen;
        width: 12rem;
        }
}
div div {
  animation-name: colour_size_change;
  animation-duration: 5s;
}
</code></pre>`;

codeAnimationsDiv_2.innerHTML = codeAnimationsExample_2;
// Runs the function and adds the answer to the html page. -------
animationsButton_2.addEventListener("click", animationsFuncV2);

function animationsFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-name & animation-duration V3 -------------------
let codeAnimationsDiv_3 = document.getElementById("codeAnimationsID_3");
let animationsButton_3 = document.getElementById("animationsBut_3");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_3 =
`<pre><code>
@keyframes colour_size_change_2 {
  from {
        }
  to   {background-color: darkgreen;
        width: 12rem;
        }
}
div div {
  animation-name: colour_size_change_2;
  animation-duration: 5s;
}
</code></pre>`;

codeAnimationsDiv_3.innerHTML = codeAnimationsExample_3;
// Runs the function and adds the answer to the html page. -------
animationsButton_3.addEventListener("click", animationsFuncV3);

function animationsFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-name & animation-duration V4 -------------------
let codeAnimationsDiv_4 = document.getElementById("codeAnimationsID_4");
let animationsButton_4 = document.getElementById("animationsBut_4");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_4 =
`<pre><code>
@keyframes colour_size_change_3 {
  0%   { background-color: linen; }
  33%  { background-color: palegreen; width: 12rem; }
  66%  { background-color: darkgreen; width: 12rem; }
  100% { height: 8rem; }
}
div div {
  animation-name: colour_size_change_3;
  animation-duration: 9s;
}
</code></pre>`;

codeAnimationsDiv_4.innerHTML = codeAnimationsExample_4;
// Runs the function and adds the answer to the html page. -------
animationsButton_4.addEventListener("click", animationsFuncV4);

function animationsFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-delay ------------------------------------------
let codeAnimationsDiv_5 = document.getElementById("codeAnimationsID_5");
let animationsButton_5 = document.getElementById("animationsBut_5");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_5 =
`<pre><code>
@keyframes colour_size_change_3 {
  0%   { background-color: linen; }
  33%  { background-color: palegreen; width: 12rem; }
  66%  { background-color: darkgreen; width: 12rem; }
  100% { height: 8rem; }
}
div div {
  animation-name: colour_size_change_3;
  animation-duration: 9s;
  animation-delay: 3s;
}
</code></pre>`;

codeAnimationsDiv_5.innerHTML = codeAnimationsExample_5;
// Runs the function and adds the answer to the html page. -------
animationsButton_5.addEventListener("click", animationsFuncV5);

function animationsFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-delay & animation-fill-mode ---------------------
let codeAnimationsDiv_6 = document.getElementById("codeAnimationsID_6");
let animationsButton_6 = document.getElementById("animationsBut_6");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_6 =
`<pre><code>
@keyframes colour_size_change_3 {
  0%   { background-color: linen; }
  33%  { background-color: palegreen; width: 12rem; }
  66%  { background-color: darkgreen; width: 12rem; }
  100% { height: 8rem; }
}
div div {
  animation-name: colour_size_change_3;
  animation-duration: 9s;
  animation-delay: -3s;
  animation-fill-mode: forwards;
}
</code></pre>`;

codeAnimationsDiv_6.innerHTML = codeAnimationsExample_6;
// Runs the function and adds the answer to the html page. -------
animationsButton_6.addEventListener("click", animationsFuncV6);

function animationsFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-iteration-count V1 -----------------------------
let codeAnimationsDiv_7 = document.getElementById("codeAnimationsID_7");
let animationsButton_7 = document.getElementById("animationsBut_7");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_7 =
`<pre><code>
@keyframes box_move {
  0%   { top: 0rem; left: 0rem; }
  25%  { top: 0rem; left: 6rem; }
  50%  { top: 4rem; left: 6rem; }
  75%  { top: 4rem; left: 0rem; }
  100% { top: 0rem; left: 0rem; }
}
div div {
  animation-name: box_move;
  animation-duration: 5s;
  position: relative;
  animation-iteration-count: 2;
}
</code></pre>`;

codeAnimationsDiv_7.innerHTML = codeAnimationsExample_7;
// Runs the function and adds the answer to the html page. -------
animationsButton_7.addEventListener("click", animationsFuncV7);

function animationsFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-iteration-count V2 -----------------------------
let codeAnimationsDiv_8 = document.getElementById("codeAnimationsID_8");
let animationsButton_8 = document.getElementById("animationsBut_8");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_8 =
`<pre><code>
@keyframes box_move {
  0%   { top: 0rem; left: 0rem; }
  25%  { top: 0rem; left: 6rem; }
  50%  { top: 4rem; left: 6rem; }
  75%  { top: 4rem; left: 0rem; }
  100% { top: 0rem; left: 0rem; }
}
div div {
  animation-name: box_move;
  animation-duration: 5s;
  position: relative;
  animation-iteration-count: infinite;
}
</code></pre>`;

codeAnimationsDiv_8.innerHTML = codeAnimationsExample_8;
// Runs the function and adds the answer to the html page. -------
animationsButton_8.addEventListener("click", animationsFuncV8);

function animationsFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-direction ------------------------------------
let codeAnimationsDiv_9 = document.getElementById("codeAnimationsID_9");
let animationsButton_9 = document.getElementById("animationsBut_9");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_9 =
`<pre><code>
@keyframes box_move {
  0%   { top: 0rem; left: 0rem; }
  25%  { top: 0rem; left: 6rem; }
  50%  { top: 4rem; left: 6rem; }
  75%  { top: 4rem; left: 0rem; }
  100% { top: 0rem; left: 0rem; }
}
div div {
  animation-name: box_move;
  animation-duration: 5s;
  position: relative;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</code></pre>`;

codeAnimationsDiv_9.innerHTML = codeAnimationsExample_9;
// Runs the function and adds the answer to the html page. -------
animationsButton_9.addEventListener("click", animationsFuncV9);

function animationsFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Animations: animation-timing-function -------------------------------
let codeAnimationsDiv_10 = document.getElementById("codeAnimationsID_10");
let animationsButton_10 = document.getElementById("animationsBut_10");
// Adds the example code to the html page. ----------------------------
let codeAnimationsExample_10 =
`<pre><code>
@keyframes box_move {
  0%   { top: 0rem; left: 0rem; }
  25%  { top: 0rem; left: 6rem; }
  50%  { top: 4rem; left: 6rem; }
  75%  { top: 4rem; left: 0rem; }
  100% { top: 0rem; left: 0rem; }
}
div div {
  animation-name: box_move;
  animation-duration: 5s;
  position: relative;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}
</code></pre>`;

codeAnimationsDiv_10.innerHTML = codeAnimationsExample_10;
// Runs the function and adds the answer to the html page. -------
animationsButton_10.addEventListener("click", animationsFuncV10);

function animationsFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("animationChange_10");
};
// /////////////////////////////////////////////////////////////////////
