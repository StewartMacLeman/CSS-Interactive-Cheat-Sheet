"use strict";

// Text: font-size ----------------------------------------------------
let codeTextDiv_1 = document.getElementById("codeTextID_1");
let textButton_1 = document.getElementById("textBut_1");
// Adds the example code to the html page. ----------------------------
let codeTextExample_1 =
`<pre><code>
p {
  font-size: 2.5rem;
  }
</code></pre>`;

codeTextDiv_1.innerHTML = codeTextExample_1;
// Runs the function and adds the answer to the html page. -------
textButton_1.addEventListener("click", textFuncV1);

function textFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Text: font-weight ----------------------------------------------------
let codeTextDiv_2 = document.getElementById("codeTextID_2");
let textButton_2 = document.getElementById("textBut_2");
// Adds the example code to the html page. ----------------------------
let codeTextExample_2 =
`<pre><code>
p {
  font-weight: bold;
  }
</code></pre>`;

codeTextDiv_2.innerHTML = codeTextExample_2;
// Runs the function and adds the answer to the html page. -------
textButton_2.addEventListener("click", textFuncV2);

function textFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Text: color ----------------------------------------------------
let codeTextDiv_3 = document.getElementById("codeTextID_3");
let textButton_3 = document.getElementById("textBut_3");
// Adds the example code to the html page. ----------------------------
let codeTextExample_3 =
`<pre><code>
p {
  color: tomato;
  }
</code></pre>`;

codeTextDiv_3.innerHTML = codeTextExample_3;
// Runs the function and adds the answer to the html page. -------
textButton_3.addEventListener("click", textFuncV3);

function textFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-align ----------------------------------------------------
let codeTextDiv_4 = document.getElementById("codeTextID_4");
let textButton_4 = document.getElementById("textBut_4");
// Adds the example code to the html page. ----------------------------
let codeTextExample_4 =
`<pre><code>
p {
  text-align: left;
  }
</code></pre>`;

codeTextDiv_4.innerHTML = codeTextExample_4;
// Runs the function and adds the answer to the html page. -------
textButton_4.addEventListener("click", textFuncV4);

function textFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-indent ----------------------------------------------------
let codeTextDiv_5 = document.getElementById("codeTextID_5");
let textButton_5 = document.getElementById("textBut_5");
// Adds the example code to the html page. ----------------------------
let codeTextExample_5 =
`<pre><code>
p {
  text-indent: 2rem;
  }
</code></pre>`;

codeTextDiv_5.innerHTML = codeTextExample_5;
// Runs the function and adds the answer to the html page. -------
textButton_5.addEventListener("click", textFuncV5);

function textFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Text: font-family ----------------------------------------------------
let codeTextDiv_6 = document.getElementById("codeTextID_6");
let textButton_6 = document.getElementById("textBut_6");
// Adds the example code to the html page. ----------------------------
let codeTextExample_6 =
`<pre><code>
p {
  font-family: monospace;
  }
</code></pre>`;

codeTextDiv_6.innerHTML = codeTextExample_6;
// Runs the function and adds the answer to the html page. -------
textButton_6.addEventListener("click", textFuncV6);

function textFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Text: font-style ----------------------------------------------------
let codeTextDiv_7 = document.getElementById("codeTextID_7");
let textButton_7 = document.getElementById("textBut_7");
// Adds the example code to the html page. ----------------------------
let codeTextExample_7 =
`<pre><code>
p {
  font-style: italic;
  }
</code></pre>`;

codeTextDiv_7.innerHTML = codeTextExample_7;
// Runs the function and adds the answer to the html page. -------
textButton_7.addEventListener("click", textFuncV7);

function textFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-transform ----------------------------------------------------
let codeTextDiv_8 = document.getElementById("codeTextID_8");
let textButton_8 = document.getElementById("textBut_8");
// Adds the example code to the html page. ----------------------------
let codeTextExample_8 =
`<pre><code>
p {
  text-transform: uppercase;
  }
</code></pre>`;

codeTextDiv_8.innerHTML = codeTextExample_8;
// Runs the function and adds the answer to the html page. -------
textButton_8.addEventListener("click", textFuncV8);

function textFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-decoration ----------------------------------------------------
let codeTextDiv_9 = document.getElementById("codeTextID_9");
let textButton_9 = document.getElementById("textBut_9");
// Adds the example code to the html page. ----------------------------
let codeTextExample_9 =
`<pre><code>
p {
  text-decoration: line-through;
  }
</code></pre>`;

codeTextDiv_9.innerHTML = codeTextExample_9;
// Runs the function and adds the answer to the html page. -------
textButton_9.addEventListener("click", textFuncV9);

function textFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-shadow V1 ----------------------------------------------------
let codeTextDiv_10 = document.getElementById("codeTextID_10");
let textButton_10 = document.getElementById("textBut_10");
// Adds the example code to the html page. ----------------------------
let codeTextExample_10 =
`<pre><code>
p {
  text-shadow: 3px 5px;
  }
</code></pre>`;

codeTextDiv_10.innerHTML = codeTextExample_10;
// Runs the function and adds the answer to the html page. -------
textButton_10.addEventListener("click", textFuncV10);

function textFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-shadow V2 ----------------------------------------------------
let codeTextDiv_11 = document.getElementById("codeTextID_11");
let textButton_11 = document.getElementById("textBut_11");
// Adds the example code to the html page. ----------------------------
let codeTextExample_11 =
`<pre><code>
p {
  text-shadow: 3px 5px tomato;
  }
</code></pre>`;

codeTextDiv_11.innerHTML = codeTextExample_11;
// Runs the function and adds the answer to the html page. -------
textButton_11.addEventListener("click", textFuncV11);

function textFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-shadow V3 ----------------------------------------------------
let codeTextDiv_12 = document.getElementById("codeTextID_12");
let textButton_12 = document.getElementById("textBut_12");
// Adds the example code to the html page. ----------------------------
let codeTextExample_12 =
`<pre><code>
p {
  text-shadow: 3px 5px 5px tomato;
  }
</code></pre>`;

codeTextDiv_12.innerHTML = codeTextExample_12;
// Runs the function and adds the answer to the html page. -------
textButton_12.addEventListener("click", textFuncV12);

function textFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Text: text-shadow V4 ----------------------------------------------------
let codeTextDiv_13 = document.getElementById("codeTextID_13");
let textButton_13 = document.getElementById("textBut_13");
// Adds the example code to the html page. ----------------------------
let codeTextExample_13 =
`<pre><code>
p {
  text-shadow: -1px 0px tomato, 0px 1px tomato, 1px 0px tomato, 0px -1px tomato;
  }
</code></pre>`;

codeTextDiv_13.innerHTML = codeTextExample_13;
// Runs the function and adds the answer to the html page. -------
textButton_13.addEventListener("click", textFuncV13);

function textFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Text: letter-spacing ------------------------------------------------
let codeTextDiv_14 = document.getElementById("codeTextID_14");
let textButton_14 = document.getElementById("textBut_14");
// Adds the example code to the html page. ----------------------------
let codeTextExample_14 =
`<pre><code>
p {
  letter-spacing: 4px;
  }
</code></pre>`;

codeTextDiv_14.innerHTML = codeTextExample_14;
// Runs the function and adds the answer to the html page. -------
textButton_14.addEventListener("click", textFuncV14);

function textFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Text: word-spacing V1 -----------------------------------------------
let codeTextDiv_15 = document.getElementById("codeTextID_15");
let textButton_15 = document.getElementById("textBut_15");
// Adds the example code to the html page. ----------------------------
let codeTextExample_15 =
`<pre><code>
p {
  word-spacing: 10px;
  }
</code></pre>`;

codeTextDiv_15.innerHTML = codeTextExample_15;
// Runs the function and adds the answer to the html page. -------
textButton_15.addEventListener("click", textFuncV15);

function textFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_15");
};
// /////////////////////////////////////////////////////////////////////

// Text: word-spacing V2 ----------------------------------------------
let codeTextDiv_16 = document.getElementById("codeTextID_16");
let textButton_16 = document.getElementById("textBut_16");
// Adds the example code to the html page. ----------------------------
let codeTextExample_16 =
`<pre><code>
p {
  word-spacing: -10px;
  }
</code></pre>`;

codeTextDiv_16.innerHTML = codeTextExample_16;
// Runs the function and adds the answer to the html page. -------
textButton_16.addEventListener("click", textFuncV16);

function textFuncV16(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_16");
};
// /////////////////////////////////////////////////////////////////////

// Text: white-space ---------------------------------------------------
let codeTextDiv_17 = document.getElementById("codeTextID_17");
let textButton_17 = document.getElementById("textBut_17");
// Adds the example code to the html page. ----------------------------
let codeTextExample_17 =
`<pre><code>
p {
  white-space: nowrap;
  }
</code></pre>`;

codeTextDiv_17.innerHTML = codeTextExample_17;
// Runs the function and adds the answer to the html page. -------
textButton_17.addEventListener("click", textFuncV17);

function textFuncV17(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_17");
};
// /////////////////////////////////////////////////////////////////////

// Text: overflow V1 ---------------------------------------------------
let codeTextDiv_18 = document.getElementById("codeTextID_18");
let textButton_18 = document.getElementById("textBut_18");
// Adds the example code to the html page. ----------------------------
let codeTextExample_18 =
`<pre><code>
p {
  overflow: visible;
  }
</code></pre>`;

codeTextDiv_18.innerHTML = codeTextExample_18;
// Runs the function and adds the answer to the html page. -------
textButton_18.addEventListener("click", textFuncV18);

function textFuncV18(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_18");
};
// /////////////////////////////////////////////////////////////////////

// Text: overflow V2 ---------------------------------------------------
let codeTextDiv_19 = document.getElementById("codeTextID_19");
let textButton_19 = document.getElementById("textBut_19");
// Adds the example code to the html page. ----------------------------
let codeTextExample_19 =
`<pre><code>
p {
  overflow-y: scroll;
  }
</code></pre>`;

codeTextDiv_19.innerHTML = codeTextExample_19;
// Runs the function and adds the answer to the html page. -------
textButton_19.addEventListener("click", textFuncV19);

function textFuncV19(e){
  let changeElement = e.target.previousElementSibling;
  let buttonText = e.target.textContent;
  if (buttonText == "Add the CSS"){
    changeElement.classList.add("textChange_19");
  } else if (buttonText == "Reset"){
    changeElement.classList.remove("textChange_19")
    changeElement.scrollTop = 0;
  }
};
// /////////////////////////////////////////////////////////////////////

// Text: text-justify ---------------------------------------------------
let codeTextDiv_20 = document.getElementById("codeTextID_20");
let textButton_20 = document.getElementById("textBut_20");
// Adds the example code to the html page. ----------------------------
let codeTextExample_20 =
`<pre><code>
p {
  text-align: justify;
  text-justify: inter-word;
  }
</code></pre>`;

codeTextDiv_20.innerHTML = codeTextExample_20;
// Runs the function and adds the answer to the html page. -------
textButton_20.addEventListener("click", textFuncV20);

function textFuncV20(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_20");
};
// /////////////////////////////////////////////////////////////////////

// Text: word-wrap -----------------------------------------------------
let codeTextDiv_21 = document.getElementById("codeTextID_21");
let textButton_21 = document.getElementById("textBut_21");
// Adds the example code to the html page. ----------------------------
let codeTextExample_21 =
`<pre><code>
p {
  word-wrap: break-word;
  }
</code></pre>`;

codeTextDiv_21.innerHTML = codeTextExample_21;
// Runs the function and adds the answer to the html page. -------
textButton_21.addEventListener("click", textFuncV21);

function textFuncV21(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_21");
};
// /////////////////////////////////////////////////////////////////////

// Text: writing-mode V1 -------------------------------------------------
let codeTextDiv_22 = document.getElementById("codeTextID_22");
let textButton_22 = document.getElementById("textBut_22");
// Adds the example code to the html page. ----------------------------
let codeTextExample_22 =
`<pre><code>
p {
  writing-mode: vertical-rl;
  }
</code></pre>`;

codeTextDiv_22.innerHTML = codeTextExample_22;
// Runs the function and adds the answer to the html page. -------
textButton_22.addEventListener("click", textFuncV22);

function textFuncV22(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_22");
};
// /////////////////////////////////////////////////////////////////////

// Text: writing-mode V1 -------------------------------------------------
let codeTextDiv_23 = document.getElementById("codeTextID_23");
let textButton_23 = document.getElementById("textBut_23");
// Adds the example code to the html page. ----------------------------
let codeTextExample_23 =
`<pre><code>
p {
  writing-mode: vertical-lr;
  }
</code></pre>`;

codeTextDiv_23.innerHTML = codeTextExample_23;
// Runs the function and adds the answer to the html page. -------
textButton_23.addEventListener("click", textFuncV23);

function textFuncV23(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("textChange_23");
};
// /////////////////////////////////////////////////////////////////////
