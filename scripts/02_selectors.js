"use strict";

// Selectors: Combinators - Descendant (space) V1 -----------------------
let codeSelectorDiv_1 = document.getElementById("codeSelectorID_1");
let selectorButton_1 = document.getElementById("selectorBut_1");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_1 =
`<pre><code>
div p {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_1.innerHTML = codeSelectorExample_1;
// Runs the function and adds the answer to the html page. -------
selectorButton_1.addEventListener("click", selectorFuncV1);

function selectorFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Descendant (space) V2 ----------------------
let codeSelectorDiv_2 = document.getElementById("codeSelectorID_2");
let selectorButton_2 = document.getElementById("selectorBut_2");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_2 =
`<pre><code>
div p span {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_2.innerHTML = codeSelectorExample_2;
// Runs the function and adds the answer to the html page. -------
selectorButton_2.addEventListener("click", selectorFuncV2);

function selectorFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Child (>) ---------------------------------
let codeSelectorDiv_3 = document.getElementById("codeSelectorID_3");
let selectorButton_3 = document.getElementById("selectorBut_3");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_3 =
`<pre><code>
div > p {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_3.innerHTML = codeSelectorExample_3;
// Runs the function and adds the answer to the html page. -------
selectorButton_3.addEventListener("click", selectorFuncV3);

function selectorFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Adjacent Sibling (+) ------------------------
let codeSelectorDiv_4 = document.getElementById("codeSelectorID_4");
let selectorButton_4 = document.getElementById("selectorBut_4");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_4 =
`<pre><code>
div + p {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_4.innerHTML = codeSelectorExample_4;
// Runs the function and adds the answer to the html page. -------
selectorButton_4.addEventListener("click", selectorFuncV4);

function selectorFuncV4(e){
  let changeElement = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
  changeElement.classList.toggle("selectorChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Combinators - General Sibling (~) -----------------
let codeSelectorDiv_5 = document.getElementById("codeSelectorID_5");
let selectorButton_5 = document.getElementById("selectorBut_5");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_5 =
`<pre><code>
div ~ p {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_5.innerHTML = codeSelectorExample_5;
// Runs the function and adds the answer to the html page. -------
selectorButton_5.addEventListener("click", selectorFuncV5);
let selectorSampleDiv = document.getElementById("selSampleDiv_5");

function selectorFuncV5(){
  selectorSampleDiv.classList.toggle("selectorChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Pseudo-classes (:first-child) -----------------
let codeSelectorDiv_6 = document.getElementById("codeSelectorID_6");
let selectorButton_6 = document.getElementById("selectorBut_6");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_6 =
`<pre><code>
div p:first-child {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_6.innerHTML = codeSelectorExample_6;
// Runs the function and adds the answer to the html page. -------
selectorButton_6.addEventListener("click", selectorFuncV6);

function selectorFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Pseudo-classes (:last-child) -----------------
let codeSelectorDiv_7 = document.getElementById("codeSelectorID_7");
let selectorButton_7 = document.getElementById("selectorBut_7");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_7 =
`<pre><code>
div p:last-child {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_7.innerHTML = codeSelectorExample_7;
// Runs the function and adds the answer to the html page. -------
selectorButton_7.addEventListener("click", selectorFuncV7);

function selectorFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Pseudo-classes (:nth-child(n)) -----------------
let codeSelectorDiv_8 = document.getElementById("codeSelectorID_8");
let selectorButton_8 = document.getElementById("selectorBut_8");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_8 =
`<pre><code>
div p:nth-child(2) {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_8.innerHTML = codeSelectorExample_8;
// Runs the function and adds the answer to the html page. -------
selectorButton_8.addEventListener("click", selectorFuncV8);

function selectorFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Pseudo-elements (::first-letter) -----------------
let codeSelectorDiv_9 = document.getElementById("codeSelectorID_9");
let selectorButton_9 = document.getElementById("selectorBut_9");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_9 =
`<pre><code>
div p::first-letter {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_9.innerHTML = codeSelectorExample_9;
// Runs the function and adds the answer to the html page. -------
selectorButton_9.addEventListener("click", selectorFuncV9);

function selectorFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Pseudo-elements (::first-line) -----------------
let codeSelectorDiv_10 = document.getElementById("codeSelectorID_10");
let selectorButton_10 = document.getElementById("selectorBut_10");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_10 =
`<pre><code>
div p::first-line {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_10.innerHTML = codeSelectorExample_10;
// Runs the function and adds the answer to the html page. -------
selectorButton_10.addEventListener("click", selectorFuncV10);

function selectorFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Pseudo-elements (::before) -----------------
let codeSelectorDiv_11 = document.getElementById("codeSelectorID_11");
let selectorButton_11 = document.getElementById("selectorBut_11");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_11 =
`<pre><code>
div p::before {
  content: "***";
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_11.innerHTML = codeSelectorExample_11;
// Runs the function and adds the answer to the html page. -------
selectorButton_11.addEventListener("click", selectorFuncV11);

function selectorFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Pseudo-elements (::after) -----------------
let codeSelectorDiv_12 = document.getElementById("codeSelectorID_12");
let selectorButton_12 = document.getElementById("selectorBut_12");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_12 =
`<pre><code>
div p::after {
  content: "***";
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_12.innerHTML = codeSelectorExample_12;
// Runs the function and adds the answer to the html page. -------
selectorButton_12.addEventListener("click", selectorFuncV12);

function selectorFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Attributes [attribute] -----------------
let codeSelectorDiv_13 = document.getElementById("codeSelectorID_13");
let selectorButton_13 = document.getElementById("selectorBut_13");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_13 =
`<pre><code>
div p[title] {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_13.innerHTML = codeSelectorExample_13;
// Runs the function and adds the answer to the html page. -------
selectorButton_13.addEventListener("click", selectorFuncV13);

function selectorFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Attributes [attribute="value"] -----------------
let codeSelectorDiv_14 = document.getElementById("codeSelectorID_14");
let selectorButton_14 = document.getElementById("selectorBut_14");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_14 =
`<pre><code>
div p[title="TipTop"] {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_14.innerHTML = codeSelectorExample_14;
// Runs the function and adds the answer to the html page. -------
selectorButton_14.addEventListener("click", selectorFuncV14);

function selectorFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Attributes [attribute~="value"] --------
let codeSelectorDiv_15 = document.getElementById("codeSelectorID_15");
let selectorButton_15 = document.getElementById("selectorBut_15");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_15 =
`<pre><code>
div p[title~="Top"] {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_15.innerHTML = codeSelectorExample_15;
// Runs the function and adds the answer to the html page. -------
selectorButton_15.addEventListener("click", selectorFuncV15);

function selectorFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_15");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Attributes [attribute^="value"] --------
let codeSelectorDiv_16 = document.getElementById("codeSelectorID_16");
let selectorButton_16 = document.getElementById("selectorBut_16");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_16 =
`<pre><code>
div p[title^="Top"] {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_16.innerHTML = codeSelectorExample_16;
// Runs the function and adds the answer to the html page. -------
selectorButton_16.addEventListener("click", selectorFuncV16);

function selectorFuncV16(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_16");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Attributes [attribute$="value"] --------
let codeSelectorDiv_17 = document.getElementById("codeSelectorID_17");
let selectorButton_17 = document.getElementById("selectorBut_17");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_17 =
`<pre><code>
div p[title$="Top"] {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_17.innerHTML = codeSelectorExample_17;
// Runs the function and adds the answer to the html page. -------
selectorButton_17.addEventListener("click", selectorFuncV17);

function selectorFuncV17(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_17");
};
// /////////////////////////////////////////////////////////////////////

// Selectors: Combinators - Attributes [attribute*="value"] --------
let codeSelectorDiv_18 = document.getElementById("codeSelectorID_18");
let selectorButton_18 = document.getElementById("selectorBut_18");
// Adds the example code to the html page. ----------------------------
let codeSelectorExample_18 =
`<pre><code>
div p[title*="Top"] {
  color: tomato;
  font-weight: bold;
  font-style: italic;
  }
</code></pre>`;

codeSelectorDiv_18.innerHTML = codeSelectorExample_18;
// Runs the function and adds the answer to the html page. -------
selectorButton_18.addEventListener("click", selectorFuncV18);

function selectorFuncV18(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("selectorChange_18");
};
// /////////////////////////////////////////////////////////////////////
