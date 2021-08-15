"use strict";

// Grid: grid-template-columns V1 -----------------------------------------
let codeGridDiv_1 = document.getElementById("codeGridID_1");
let gridButton_1 = document.getElementById("gridBut_1");
// Adds the example code to the html page. ----------------------------
let codeGridExample_1 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto;
 }
</code></pre>`;

codeGridDiv_1.innerHTML = codeGridExample_1;
// Runs the function and adds the answer to the html page. -------
gridButton_1.addEventListener("click", gridFuncV1);

function gridFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-template-columns V2 -----------------------------------------
let codeGridDiv_2 = document.getElementById("codeGridID_2");
let gridButton_2 = document.getElementById("gridBut_2");
// Adds the example code to the html page. ----------------------------
let codeGridExample_2 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto auto;
 }
</code></pre>`;

codeGridDiv_2.innerHTML = codeGridExample_2;
// Runs the function and adds the answer to the html page. -------
gridButton_2.addEventListener("click", gridFuncV2);

function gridFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-template-columns V3 -----------------------------------------
let codeGridDiv_3 = document.getElementById("codeGridID_3");
let gridButton_3 = document.getElementById("gridBut_3");
// Adds the example code to the html page. ----------------------------
let codeGridExample_3 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 6rem 6rem;
 }
</code></pre>`;

codeGridDiv_3.innerHTML = codeGridExample_3;
// Runs the function and adds the answer to the html page. -------
gridButton_3.addEventListener("click", gridFuncV3);

function gridFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-template-columns V4 -----------------------------------------
let codeGridDiv_4 = document.getElementById("codeGridID_4");
let gridButton_4 = document.getElementById("gridBut_4");
// Adds the example code to the html page. ----------------------------
let codeGridExample_4 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 6rem 6rem auto;
 }
</code></pre>`;

codeGridDiv_4.innerHTML = codeGridExample_4;
// Runs the function and adds the answer to the html page. -------
gridButton_4.addEventListener("click", gridFuncV4);

function gridFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-template-rows V1 -----------------------------------------
let codeGridDiv_5 = document.getElementById("codeGridID_5");
let gridButton_5 = document.getElementById("gridBut_5");
// Adds the example code to the html page. ----------------------------
let codeGridExample_5 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 3rem auto;
 }
</code></pre>`;

codeGridDiv_5.innerHTML = codeGridExample_5;
// Runs the function and adds the answer to the html page. -------
gridButton_5.addEventListener("click", gridFuncV5);

function gridFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-template-rows V2 -----------------------------------------
let codeGridDiv_6 = document.getElementById("codeGridID_6");
let gridButton_6 = document.getElementById("gridBut_6");
// Adds the example code to the html page. ----------------------------
let codeGridExample_6 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 2rem 4rem auto;
 }
</code></pre>`;

codeGridDiv_6.innerHTML = codeGridExample_6;
// Runs the function and adds the answer to the html page. -------
gridButton_6.addEventListener("click", gridFuncV6);

function gridFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-column-gap ----------------------------------------------
let codeGridDiv_7 = document.getElementById("codeGridID_7");
let gridButton_7 = document.getElementById("gridBut_7");
// Adds the example code to the html page. ----------------------------
let codeGridExample_7 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1.5rem;
 }
</code></pre>`;

codeGridDiv_7.innerHTML = codeGridExample_7;
// Runs the function and adds the answer to the html page. -------
gridButton_7.addEventListener("click", gridFuncV7);

function gridFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-row-gap -------------------------------------------------
let codeGridDiv_8 = document.getElementById("codeGridID_8");
let gridButton_8 = document.getElementById("gridBut_8");
// Adds the example code to the html page. ----------------------------
let codeGridExample_8 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 1.5rem;
 }
</code></pre>`;

codeGridDiv_8.innerHTML = codeGridExample_8;
// Runs the function and adds the answer to the html page. -------
gridButton_8.addEventListener("click", gridFuncV8);

function gridFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-gap V1 -------------------------------------------------
let codeGridDiv_9 = document.getElementById("codeGridID_9");
let gridButton_9 = document.getElementById("gridBut_9");
// Adds the example code to the html page. ----------------------------
let codeGridExample_9 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1.5rem;
 }
</code></pre>`;

codeGridDiv_9.innerHTML = codeGridExample_9;
// Runs the function and adds the answer to the html page. -------
gridButton_9.addEventListener("click", gridFuncV9);

function gridFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-gap V2 -------------------------------------------------
let codeGridDiv_10 = document.getElementById("codeGridID_10");
let gridButton_10 = document.getElementById("gridBut_10");
// Adds the example code to the html page. ----------------------------
let codeGridExample_10 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: .75rem 1.5rem;
 }
</code></pre>`;

codeGridDiv_10.innerHTML = codeGridExample_10;
// Runs the function and adds the answer to the html page. -------
gridButton_10.addEventListener("click", gridFuncV10);

function gridFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Grid: justify-content V1 -------------------------------------------
let codeGridDiv_11 = document.getElementById("codeGridID_11");
let gridButton_11 = document.getElementById("gridBut_11");
// Adds the example code to the html page. ----------------------------
let codeGridExample_11 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  justify-content: space-evenly;
 }
</code></pre>`;

codeGridDiv_11.innerHTML = codeGridExample_11;
// Runs the function and adds the answer to the html page. -------
gridButton_11.addEventListener("click", gridFuncV11);

function gridFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Grid: justify-content V2 -------------------------------------------
let codeGridDiv_12 = document.getElementById("codeGridID_12");
let gridButton_12 = document.getElementById("gridBut_12");
// Adds the example code to the html page. ----------------------------
let codeGridExample_12 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  justify-content: space-around;
 }
</code></pre>`;

codeGridDiv_12.innerHTML = codeGridExample_12;
// Runs the function and adds the answer to the html page. -------
gridButton_12.addEventListener("click", gridFuncV12);

function gridFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Grid: justify-content V3 -------------------------------------------
let codeGridDiv_13 = document.getElementById("codeGridID_13");
let gridButton_13 = document.getElementById("gridBut_13");
// Adds the example code to the html page. ----------------------------
let codeGridExample_13 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  justify-content: space-between;
 }
</code></pre>`;

codeGridDiv_13.innerHTML = codeGridExample_13;
// Runs the function and adds the answer to the html page. -------
gridButton_13.addEventListener("click", gridFuncV13);

function gridFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Grid: justify-content V4 -------------------------------------------
let codeGridDiv_14 = document.getElementById("codeGridID_14");
let gridButton_14 = document.getElementById("gridBut_14");
// Adds the example code to the html page. ----------------------------
let codeGridExample_14 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  justify-content: center;
 }
</code></pre>`;

codeGridDiv_14.innerHTML = codeGridExample_14;
// Runs the function and adds the answer to the html page. -------
gridButton_14.addEventListener("click", gridFuncV14);

function gridFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Grid: justify-content V5 -------------------------------------------
let codeGridDiv_15 = document.getElementById("codeGridID_15");
let gridButton_15 = document.getElementById("gridBut_15");
// Adds the example code to the html page. ----------------------------
let codeGridExample_15 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  justify-content: start;
 }
</code></pre>`;

codeGridDiv_15.innerHTML = codeGridExample_15;
// Runs the function and adds the answer to the html page. -------
gridButton_15.addEventListener("click", gridFuncV15);

function gridFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_15");
};
// /////////////////////////////////////////////////////////////////////

// Grid: justify-content V6 -------------------------------------------
let codeGridDiv_16 = document.getElementById("codeGridID_16");
let gridButton_16 = document.getElementById("gridBut_16");
// Adds the example code to the html page. ----------------------------
let codeGridExample_16 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  justify-content: end;
 }
</code></pre>`;

codeGridDiv_16.innerHTML = codeGridExample_16;
// Runs the function and adds the answer to the html page. -------
gridButton_16.addEventListener("click", gridFuncV16);

function gridFuncV16(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_16");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content V1 ---------------------------------------------
let codeGridDiv_17 = document.getElementById("codeGridID_17");
let gridButton_17 = document.getElementById("gridBut_17");
// Adds the example code to the html page. ----------------------------
let codeGridExample_17 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: space-evenly;
 }
</code></pre>`;

codeGridDiv_17.innerHTML = codeGridExample_17;
// Runs the function and adds the answer to the html page. -------
gridButton_17.addEventListener("click", gridFuncV17);

function gridFuncV17(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_17");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content V2 ---------------------------------------------
let codeGridDiv_18 = document.getElementById("codeGridID_18");
let gridButton_18 = document.getElementById("gridBut_18");
// Adds the example code to the html page. ----------------------------
let codeGridExample_18 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: space-around;
 }
</code></pre>`;

codeGridDiv_18.innerHTML = codeGridExample_18;
// Runs the function and adds the answer to the html page. -------
gridButton_18.addEventListener("click", gridFuncV18);

function gridFuncV18(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_18");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content V3 ---------------------------------------------
let codeGridDiv_19 = document.getElementById("codeGridID_19");
let gridButton_19 = document.getElementById("gridBut_19");
// Adds the example code to the html page. ----------------------------
let codeGridExample_19 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: space-between;
 }
</code></pre>`;

codeGridDiv_19.innerHTML = codeGridExample_19;
// Runs the function and adds the answer to the html page. -------
gridButton_19.addEventListener("click", gridFuncV19);

function gridFuncV19(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_19");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content V4 ---------------------------------------------
let codeGridDiv_20 = document.getElementById("codeGridID_20");
let gridButton_20 = document.getElementById("gridBut_20");
// Adds the example code to the html page. ----------------------------
let codeGridExample_20 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: center;
 }
</code></pre>`;

codeGridDiv_20.innerHTML = codeGridExample_20;
// Runs the function and adds the answer to the html page. -------
gridButton_20.addEventListener("click", gridFuncV20);

function gridFuncV20(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_20");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content V5 ---------------------------------------------
let codeGridDiv_21 = document.getElementById("codeGridID_21");
let gridButton_21 = document.getElementById("gridBut_21");
// Adds the example code to the html page. ----------------------------
let codeGridExample_21 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: start;
 }
</code></pre>`;

codeGridDiv_21.innerHTML = codeGridExample_21;
// Runs the function and adds the answer to the html page. -------
gridButton_21.addEventListener("click", gridFuncV21);

function gridFuncV21(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_21");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content V6 ---------------------------------------------
let codeGridDiv_22 = document.getElementById("codeGridID_22");
let gridButton_22 = document.getElementById("gridBut_22");
// Adds the example code to the html page. ----------------------------
let codeGridExample_22 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: end;
 }
</code></pre>`;

codeGridDiv_22.innerHTML = codeGridExample_22;
// Runs the function and adds the answer to the html page. -------
gridButton_22.addEventListener("click", gridFuncV22);

function gridFuncV22(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_22");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content & justify-content V1 ----------------------------
let codeGridDiv_23 = document.getElementById("codeGridID_23");
let gridButton_23 = document.getElementById("gridBut_23");
// Adds the example code to the html page. ----------------------------
let codeGridExample_23 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: center;
  justify-content: center;
 }
</code></pre>`;

codeGridDiv_23.innerHTML = codeGridExample_23;
// Runs the function and adds the answer to the html page. -------
gridButton_23.addEventListener("click", gridFuncV23);

function gridFuncV23(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_23");
};
// /////////////////////////////////////////////////////////////////////

// Grid: align-content & justify-content V2 ----------------------------
let codeGridDiv_24 = document.getElementById("codeGridID_24");
let gridButton_24 = document.getElementById("gridBut_24");
// Adds the example code to the html page. ----------------------------
let codeGridExample_24 =
`<pre><code>
div {
  display: grid;
  grid-template-columns: 3.5rem 3.5rem 3.5rem;
  align-content: space-evenly;
  justify-content: space-evenly;
 }
</code></pre>`;

codeGridDiv_24.innerHTML = codeGridExample_24;
// Runs the function and adds the answer to the html page. -------
gridButton_24.addEventListener("click", gridFuncV24);

function gridFuncV24(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_24");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-column & grid-row ----------------------------------------
let codeGridDiv_25 = document.getElementById("codeGridID_25");
let gridButton_25 = document.getElementById("gridBut_25");
// Adds the example code to the html page. ----------------------------
let codeGridExample_25 =
`<pre><code>
// HTML ------------------------------
&lt;div&gt; &lt;-----Parent div.
  &lt;div id="div_1"&gt;1&lt;/div&gt; &lt;----child div.
  &lt;div id="div_2"&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
  &lt;div&gt;6&lt;/div&gt;
&lt;/div&gt;
// CSS -------------------------------
div {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0.5rem;
  padding: 0.15rem;
 }
 // Container children.----------------
 #div_1 { grid-column: 1 / 4; }
 #div_2 { grid-row: 2 / 4; }
</code></pre>`;

codeGridDiv_25.innerHTML = codeGridExample_25;
// Runs the function and adds the answer to the html page. -------
gridButton_25.addEventListener("click", gridFuncV25);

function gridFuncV25(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_25");
};
// /////////////////////////////////////////////////////////////////////

// Grid: grid-area ---------------------------------------------------
let codeGridDiv_26 = document.getElementById("codeGridID_26");
let gridButton_26 = document.getElementById("gridBut_26");
// Adds the example code to the html page. ----------------------------
let codeGridExample_26 =
`<pre><code>
// HTML ------------------------------
&lt;div&gt; &lt;-----Parent div.
  &lt;div&gt;1&lt;/div&gt; &lt;----child div.
  &lt;div id="area"&gt;2&lt;/div&gt;
  &lt;div&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
  &lt;div&gt;6&lt;/div&gt;
  &lt;div&gt;7&lt;/div&gt;
  &lt;div&gt;8&lt;/div&gt;
  &lt;div&gt;9&lt;/div&gt;
&lt;/div&gt;
// CSS -------------------------------
div {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 0.5rem;
  padding: 0.15rem;
 }
 // Container child.-------------------
 #area { grid-area: 1 / 2 / 3 / 4; }
 // grid-area:
 row-start, column-start, row-end, column-end.
</code></pre>`;

codeGridDiv_26.innerHTML = codeGridExample_26;
// Runs the function and adds the answer to the html page. -------
gridButton_26.addEventListener("click", gridFuncV26);

function gridFuncV26(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gridChange_26");
};
// /////////////////////////////////////////////////////////////////////
