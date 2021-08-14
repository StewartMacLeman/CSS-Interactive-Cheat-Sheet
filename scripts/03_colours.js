"use strict";

// Colours: Named ----------------------------------------------------
let codeColoursDiv_1 = document.getElementById("codeColoursID_1");
let coloursButton_1 = document.getElementById("coloursBut_1");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_1 =
`<pre><code>
div {
  background-color: palegreen;
  }
</code></pre>`;

codeColoursDiv_1.innerHTML = codeColoursExample_1;
// Runs the function and adds the answer to the html page. -------
coloursButton_1.addEventListener("click", coloursFuncV1);

function coloursFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Opacity V1 --------------------------------------------------
let codeColoursDiv_2 = document.getElementById("codeColoursID_2");
let coloursButton_2 = document.getElementById("coloursBut_2");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_2 =
`<pre><code>
div {
  opacity: 0.8;
  }
</code></pre>`;

codeColoursDiv_2.innerHTML = codeColoursExample_2;
// Runs the function and adds the answer to the html page. -------
coloursButton_2.addEventListener("click", coloursFuncV2);

function coloursFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Opacity V2 --------------------------------------------------
let codeColoursDiv_3 = document.getElementById("codeColoursID_3");
let coloursButton_3 = document.getElementById("coloursBut_3");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_3 =
`<pre><code>
div {
  opacity: 0.2;
  }
</code></pre>`;

codeColoursDiv_3.innerHTML = codeColoursExample_3;
// Runs the function and adds the answer to the html page. -------
coloursButton_3.addEventListener("click", coloursFuncV3);

function coloursFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - rgb(red, green, blue) ---------------------------------------
let codeColoursDiv_4 = document.getElementById("codeColoursID_4");
let coloursButton_4 = document.getElementById("coloursBut_4");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_4 =
`<pre><code>
div {
  background-color: rgb(255, 0, 0)
  }
</code></pre>`;

codeColoursDiv_4.innerHTML = codeColoursExample_4;
// Runs the function and adds the answer to the html page. -------
coloursButton_4.addEventListener("click", coloursFuncV4);

function coloursFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - rgba(red, green, blue, alpha) V1 ----------------------------
let codeColoursDiv_5 = document.getElementById("codeColoursID_5");
let coloursButton_5 = document.getElementById("coloursBut_5");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_5 =
`<pre><code>
div {
  background-color: rgba(255, 0, 0, 0.75);
  }
</code></pre>`;

codeColoursDiv_5.innerHTML = codeColoursExample_5;
// Runs the function and adds the answer to the html page. -------
coloursButton_5.addEventListener("click", coloursFuncV5);

function coloursFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - rgba(red, green, blue, alpha) V2 ----------------------------
let codeColoursDiv_6 = document.getElementById("codeColoursID_6");
let coloursButton_6 = document.getElementById("coloursBut_6");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_6 =
`<pre><code>
div {
  background-color: rgba(255, 0, 0, 0.25);
  }
</code></pre>`;

codeColoursDiv_6.innerHTML = codeColoursExample_6;
// Runs the function and adds the answer to the html page. -------
coloursButton_6.addEventListener("click", coloursFuncV6);

function coloursFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - hsl(hue, saturation, lightness) V1 ----------------------------
let codeColoursDiv_7 = document.getElementById("codeColoursID_7");
let coloursButton_7 = document.getElementById("coloursBut_7");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_7 =
`<pre><code>
div {
  background-color: hsl(0, 100%, 50%);
  }
</code></pre>`;

codeColoursDiv_7.innerHTML = codeColoursExample_7;
// Runs the function and adds the answer to the html page. -------
coloursButton_7.addEventListener("click", coloursFuncV7);

function coloursFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - hsl(hue, saturation, lightness) V2 ----------------------------
let codeColoursDiv_8 = document.getElementById("codeColoursID_8");
let coloursButton_8 = document.getElementById("coloursBut_8");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_8 =
`<pre><code>
div {
  background-color: hsl(0, 75%, 50%);
  }
</code></pre>`;

codeColoursDiv_8.innerHTML = codeColoursExample_8;
// Runs the function and adds the answer to the html page. -------
coloursButton_8.addEventListener("click", coloursFuncV8);

function coloursFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - hsl(hue, saturation, lightness) V3 ----------------------------
let codeColoursDiv_9 = document.getElementById("codeColoursID_9");
let coloursButton_9 = document.getElementById("coloursBut_9");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_9 =
`<pre><code>
div {
  background-color: hsl(0, 25%, 50%);
  }
</code></pre>`;

codeColoursDiv_9.innerHTML = codeColoursExample_9;
// Runs the function and adds the answer to the html page. -------
coloursButton_9.addEventListener("click", coloursFuncV9);

function coloursFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - hsl(hue, saturation, lightness) V4 ----------------------------
let codeColoursDiv_10 = document.getElementById("codeColoursID_10");
let coloursButton_10 = document.getElementById("coloursBut_10");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_10 =
`<pre><code>
div {
  background-color: hsl(0, 100%, 75%);
  }
</code></pre>`;

codeColoursDiv_10.innerHTML = codeColoursExample_10;
// Runs the function and adds the answer to the html page. -------
coloursButton_10.addEventListener("click", coloursFuncV10);

function coloursFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - hsl(hue, saturation, lightness) V5 ----------------------------
let codeColoursDiv_11 = document.getElementById("codeColoursID_11");
let coloursButton_11 = document.getElementById("coloursBut_11");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_11 =
`<pre><code>
div {
  background-color: hsl(0, 100%, 25%);
  }
</code></pre>`;

codeColoursDiv_11.innerHTML = codeColoursExample_11;
// Runs the function and adds the answer to the html page. -------
coloursButton_11.addEventListener("click", coloursFuncV11);

function coloursFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - hsla(hue, saturation, lightness, alpha) V1 -------------
let codeColoursDiv_12 = document.getElementById("codeColoursID_12");
let coloursButton_12 = document.getElementById("coloursBut_12");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_12 =
`<pre><code>
div {
  background-color: hsla(0, 100%, 50%, 0.75);
  }
</code></pre>`;

codeColoursDiv_12.innerHTML = codeColoursExample_12;
// Runs the function and adds the answer to the html page. -------
coloursButton_12.addEventListener("click", coloursFuncV12);

function coloursFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - hsla(hue, saturation, lightness, alpha) V2 -------------
let codeColoursDiv_13 = document.getElementById("codeColoursID_13");
let coloursButton_13 = document.getElementById("coloursBut_13");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_13 =
`<pre><code>
div {
  background-color: hsla(0, 100%, 50%, 0.25);
  }
</code></pre>`;

codeColoursDiv_13.innerHTML = codeColoursExample_13;
// Runs the function and adds the answer to the html page. -------
coloursButton_13.addEventListener("click", coloursFuncV13);

function coloursFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - Hexadecimal (#rrggbb) V1 --------------------------
let codeColoursDiv_14 = document.getElementById("codeColoursID_14");
let coloursButton_14 = document.getElementById("coloursBut_14");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_14 =
`<pre><code>
div {
  background-color: #ff0000;
  }
</code></pre>`;

codeColoursDiv_14.innerHTML = codeColoursExample_14;
// Runs the function and adds the answer to the html page. -------
coloursButton_14.addEventListener("click", coloursFuncV14);

function coloursFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Colours: Red - Hexadecimal (#rrggbb) V2 --------------------------
let codeColoursDiv_15 = document.getElementById("codeColoursID_15");
let coloursButton_15 = document.getElementById("coloursBut_15");
// Adds the example code to the html page. ----------------------------
let codeColoursExample_15 =
`<pre><code>
div {
  background-color: #f00;
  }
</code></pre>`;

codeColoursDiv_15.innerHTML = codeColoursExample_15;
// Runs the function and adds the answer to the html page. -------
coloursButton_15.addEventListener("click", coloursFuncV15);

function coloursFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("colourChange_15");
};
// /////////////////////////////////////////////////////////////////////
