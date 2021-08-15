"use strict";

// Transforms: translate(x,y) V1 ---------------------------------------
let codeTransformsDiv_1 = document.getElementById("codeTransformsID_1");
let transformsButton_1 = document.getElementById("transformsBut_1");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_1 =
`<pre><code>
div div {
  transform: translate(6rem, 4rem);
  }
</code></pre>`;

codeTransformsDiv_1.innerHTML = codeTransformsExample_1;
// Runs the function and adds the answer to the html page. -------
transformsButton_1.addEventListener("click", transformsFuncV1);

function transformsFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: translate(x,y) V2 ---------------------------------------
let codeTransformsDiv_2 = document.getElementById("codeTransformsID_2");
let transformsButton_2 = document.getElementById("transformsBut_2");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_2 =
`<pre><code>
div div {
  transform: translate(-6rem, -4rem);
  }
</code></pre>`;

codeTransformsDiv_2.innerHTML = codeTransformsExample_2;
// Runs the function and adds the answer to the html page. -------
transformsButton_2.addEventListener("click", transformsFuncV2);

function transformsFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: translate(x,y) V3 ---------------------------------------
let codeTransformsDiv_3 = document.getElementById("codeTransformsID_3");
let transformsButton_3 = document.getElementById("transformsBut_3");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_3 =
`<pre><code>
div div {
  transform: translate(6rem, 0rem);
  }
</code></pre>`;

codeTransformsDiv_3.innerHTML = codeTransformsExample_3;
// Runs the function and adds the answer to the html page. -------
transformsButton_3.addEventListener("click", transformsFuncV3);

function transformsFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotate(deg) V1 -----------------------------------------
let codeTransformsDiv_4 = document.getElementById("codeTransformsID_4");
let transformsButton_4 = document.getElementById("transformsBut_4");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_4 =
`<pre><code>
div div {
  transform: rotate(45deg);
  }
</code></pre>`;

codeTransformsDiv_4.innerHTML = codeTransformsExample_4;
// Runs the function and adds the answer to the html page. -------
transformsButton_4.addEventListener("click", transformsFuncV4);

function transformsFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotate(deg) V2 -----------------------------------------
let codeTransformsDiv_5 = document.getElementById("codeTransformsID_5");
let transformsButton_5 = document.getElementById("transformsBut_5");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_5 =
`<pre><code>
div div {
  transform: rotate(-45deg);
  }
</code></pre>`;

codeTransformsDiv_5.innerHTML = codeTransformsExample_5;
// Runs the function and adds the answer to the html page. -------
transformsButton_5.addEventListener("click", transformsFuncV5);

function transformsFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotateX(deg) V1 -----------------------------------------
let codeTransformsDiv_6 = document.getElementById("codeTransformsID_6");
let transformsButton_6 = document.getElementById("transformsBut_6");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_6 =
`<pre><code>
div div {
  transform: rotateX(45deg);
  }
</code></pre>`;

codeTransformsDiv_6.innerHTML = codeTransformsExample_6;
// Runs the function and adds the answer to the html page. -------
transformsButton_6.addEventListener("click", transformsFuncV6);

function transformsFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotateX(deg) V2 -----------------------------------------
let codeTransformsDiv_7 = document.getElementById("codeTransformsID_7");
let transformsButton_7 = document.getElementById("transformsBut_7");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_7 =
`<pre><code>
div div {
  transform: rotateX(180deg);
  }
</code></pre>`;

codeTransformsDiv_7.innerHTML = codeTransformsExample_7;
// Runs the function and adds the answer to the html page. -------
transformsButton_7.addEventListener("click", transformsFuncV7);

function transformsFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotateY(deg) V1 -----------------------------------------
let codeTransformsDiv_8 = document.getElementById("codeTransformsID_8");
let transformsButton_8 = document.getElementById("transformsBut_8");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_8 =
`<pre><code>
div div {
  transform: rotateY(45deg);
  }
</code></pre>`;

codeTransformsDiv_8.innerHTML = codeTransformsExample_8;
// Runs the function and adds the answer to the html page. -------
transformsButton_8.addEventListener("click", transformsFuncV8);

function transformsFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotateY(deg) V2 -----------------------------------------
let codeTransformsDiv_9 = document.getElementById("codeTransformsID_9");
let transformsButton_9 = document.getElementById("transformsBut_9");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_9 =
`<pre><code>
div div {
  transform: rotateY(80deg);
  }
</code></pre>`;

codeTransformsDiv_9.innerHTML = codeTransformsExample_9;
// Runs the function and adds the answer to the html page. -------
transformsButton_9.addEventListener("click", transformsFuncV9);

function transformsFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotateY(deg) V3 -----------------------------------------
let codeTransformsDiv_10 = document.getElementById("codeTransformsID_10");
let transformsButton_10 = document.getElementById("transformsBut_10");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_10 =
`<pre><code>
div div {
  transform: rotateY(180deg);
  }
</code></pre>`;

codeTransformsDiv_10.innerHTML = codeTransformsExample_10;
// Runs the function and adds the answer to the html page. -------
transformsButton_10.addEventListener("click", transformsFuncV10);

function transformsFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotateZ(deg) V1 -----------------------------------------
let codeTransformsDiv_11 = document.getElementById("codeTransformsID_11");
let transformsButton_11 = document.getElementById("transformsBut_11");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_11 =
`<pre><code>
div div {
  transform: rotateZ(45deg);
  }
</code></pre>`;

codeTransformsDiv_11.innerHTML = codeTransformsExample_11;
// Runs the function and adds the answer to the html page. -------
transformsButton_11.addEventListener("click", transformsFuncV11);

function transformsFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: rotateZ(deg) V2 -----------------------------------------
let codeTransformsDiv_12 = document.getElementById("codeTransformsID_12");
let transformsButton_12 = document.getElementById("transformsBut_12");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_12 =
`<pre><code>
div div {
  transform: rotateZ(180deg);
  }
</code></pre>`;

codeTransformsDiv_12.innerHTML = codeTransformsExample_12;
// Runs the function and adds the answer to the html page. -------
transformsButton_12.addEventListener("click", transformsFuncV12);

function transformsFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: scaleX(n) V1 -----------------------------------------
let codeTransformsDiv_13 = document.getElementById("codeTransformsID_13");
let transformsButton_13 = document.getElementById("transformsBut_13");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_13 =
`<pre><code>
div div {
  transform: scaleX(2);
  }
</code></pre>`;

codeTransformsDiv_13.innerHTML = codeTransformsExample_13;
// Runs the function and adds the answer to the html page. -------
transformsButton_13.addEventListener("click", transformsFuncV13);

function transformsFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: scaleX(n) V2 -----------------------------------------
let codeTransformsDiv_14 = document.getElementById("codeTransformsID_14");
let transformsButton_14 = document.getElementById("transformsBut_14");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_14 =
`<pre><code>
div div {
  transform: scaleX(0.5);
  }
</code></pre>`;

codeTransformsDiv_14.innerHTML = codeTransformsExample_14;
// Runs the function and adds the answer to the html page. -------
transformsButton_14.addEventListener("click", transformsFuncV14);

function transformsFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: scaleY(n) V1 -----------------------------------------
let codeTransformsDiv_15 = document.getElementById("codeTransformsID_15");
let transformsButton_15 = document.getElementById("transformsBut_15");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_15 =
`<pre><code>
div div {
  transform: scaleY(2);
  }
</code></pre>`;

codeTransformsDiv_15.innerHTML = codeTransformsExample_15;
// Runs the function and adds the answer to the html page. -------
transformsButton_15.addEventListener("click", transformsFuncV15);

function transformsFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_15");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: scaleY(n) V2 -----------------------------------------
let codeTransformsDiv_16 = document.getElementById("codeTransformsID_16");
let transformsButton_16 = document.getElementById("transformsBut_16");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_16 =
`<pre><code>
div div {
  transform: scaleY(0.5);
  }
</code></pre>`;

codeTransformsDiv_16.innerHTML = codeTransformsExample_16;
// Runs the function and adds the answer to the html page. -------
transformsButton_16.addEventListener("click", transformsFuncV16);

function transformsFuncV16(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_16");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: scale(x,y) V1 -----------------------------------------
let codeTransformsDiv_17 = document.getElementById("codeTransformsID_17");
let transformsButton_17 = document.getElementById("transformsBut_17");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_17 =
`<pre><code>
div div {
  transform: scale(3,2);
  }
</code></pre>`;

codeTransformsDiv_17.innerHTML = codeTransformsExample_17;
// Runs the function and adds the answer to the html page. -------
transformsButton_17.addEventListener("click", transformsFuncV17);

function transformsFuncV17(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_17");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: scale(x,y) V2 -----------------------------------------
let codeTransformsDiv_18 = document.getElementById("codeTransformsID_18");
let transformsButton_18 = document.getElementById("transformsBut_18");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_18 =
`<pre><code>
div div {
  transform: scale(0.5,0.75);
  }
</code></pre>`;

codeTransformsDiv_18.innerHTML = codeTransformsExample_18;
// Runs the function and adds the answer to the html page. -------
transformsButton_18.addEventListener("click", transformsFuncV18);

function transformsFuncV18(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_18");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: skewX(deg) V1 -----------------------------------------
let codeTransformsDiv_19 = document.getElementById("codeTransformsID_19");
let transformsButton_19 = document.getElementById("transformsBut_19");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_19 =
`<pre><code>
div div {
  transform: skewX(45deg);
  }
</code></pre>`;

codeTransformsDiv_19.innerHTML = codeTransformsExample_19;
// Runs the function and adds the answer to the html page. -------
transformsButton_19.addEventListener("click", transformsFuncV19);

function transformsFuncV19(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_19");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: skewX(deg) V2 -----------------------------------------
let codeTransformsDiv_20 = document.getElementById("codeTransformsID_20");
let transformsButton_20 = document.getElementById("transformsBut_20");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_20 =
`<pre><code>
div div {
  transform: skewX(-45deg);
  }
</code></pre>`;

codeTransformsDiv_20.innerHTML = codeTransformsExample_20;
// Runs the function and adds the answer to the html page. -------
transformsButton_20.addEventListener("click", transformsFuncV20);

function transformsFuncV20(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_20");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: skewY(deg) V1 -----------------------------------------
let codeTransformsDiv_21 = document.getElementById("codeTransformsID_21");
let transformsButton_21 = document.getElementById("transformsBut_21");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_21 =
`<pre><code>
div div {
  transform: skewY(45deg);
  }
</code></pre>`;

codeTransformsDiv_21.innerHTML = codeTransformsExample_21;
// Runs the function and adds the answer to the html page. -------
transformsButton_21.addEventListener("click", transformsFuncV21);

function transformsFuncV21(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_21");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: skewY(deg) V2 -----------------------------------------
let codeTransformsDiv_22 = document.getElementById("codeTransformsID_22");
let transformsButton_22 = document.getElementById("transformsBut_22");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_22 =
`<pre><code>
div div {
  transform: skewY(-45deg);
  }
</code></pre>`;

codeTransformsDiv_22.innerHTML = codeTransformsExample_22;
// Runs the function and adds the answer to the html page. -------
transformsButton_22.addEventListener("click", transformsFuncV22);

function transformsFuncV22(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_22");
};
// /////////////////////////////////////////////////////////////////////

// Transforms: skew(x-deg,y-deg) ---------------------------------------
let codeTransformsDiv_23 = document.getElementById("codeTransformsID_23");
let transformsButton_23 = document.getElementById("transformsBut_23");
// Adds the example code to the html page. ----------------------------
let codeTransformsExample_23 =
`<pre><code>
div div {
  transform: skew(20deg, 20deg);
  }
</code></pre>`;

codeTransformsDiv_23.innerHTML = codeTransformsExample_23;
// Runs the function and adds the answer to the html page. -------
transformsButton_23.addEventListener("click", transformsFuncV23);

function transformsFuncV23(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("transformChange_23");
};
// /////////////////////////////////////////////////////////////////////
