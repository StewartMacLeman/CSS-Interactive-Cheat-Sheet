"use strict";

// Gradients: linear-gradient() - default V1 --------------------------
let codeGradDiv_1 = document.getElementById("codeGradID_1");
let gradButton_1 = document.getElementById("gradBut_1");
// Adds the example code to the html page. ----------------------------
let codeGradExample_1 =
`<pre><code>
div {
  background-image: linear-gradient(darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_1.innerHTML = codeGradExample_1;
// Runs the function and adds the answer to the html page. -------
gradButton_1.addEventListener("click", gradFuncV1);

function gradFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient() - default V2 --------------------------
let codeGradDiv_2 = document.getElementById("codeGradID_2");
let gradButton_2 = document.getElementById("gradBut_2");
// Adds the example code to the html page. ----------------------------
let codeGradExample_2 =
`<pre><code>
div {
  background-image: linear-gradient(darkgreen, palegreen, linen);
  }
</code></pre>`;

codeGradDiv_2.innerHTML = codeGradExample_2;
// Runs the function and adds the answer to the html page. -------
gradButton_2.addEventListener("click", gradFuncV2);

function gradFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(direction, colour-1, colour-2) V1 ----------
let codeGradDiv_3 = document.getElementById("codeGradID_3");
let gradButton_3 = document.getElementById("gradBut_3");
// Adds the example code to the html page. ----------------------------
let codeGradExample_3 =
`<pre><code>
div {
  background-image: linear-gradient(to right, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_3.innerHTML = codeGradExample_3;
// Runs the function and adds the answer to the html page. -------
gradButton_3.addEventListener("click", gradFuncV3);

function gradFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(direction, colour-1, colour-2) V2 ---------
let codeGradDiv_4 = document.getElementById("codeGradID_4");
let gradButton_4 = document.getElementById("gradBut_4");
// Adds the example code to the html page. ----------------------------
let codeGradExample_4 =
`<pre><code>
div {
  background-image: linear-gradient(to left, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_4.innerHTML = codeGradExample_4;
// Runs the function and adds the answer to the html page. -------
gradButton_4.addEventListener("click", gradFuncV4);

function gradFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(direction, colour-1, colour-2) V3 -------
let codeGradDiv_5 = document.getElementById("codeGradID_5");
let gradButton_5 = document.getElementById("gradBut_5");
// Adds the example code to the html page. ----------------------------
let codeGradExample_5 =
`<pre><code>
div {
  background-image: linear-gradient(to bottom right, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_5.innerHTML = codeGradExample_5;
// Runs the function and adds the answer to the html page. -------
gradButton_5.addEventListener("click", gradFuncV5);

function gradFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(direction, colour-1, colour-2) V4 -------
let codeGradDiv_6 = document.getElementById("codeGradID_6");
let gradButton_6 = document.getElementById("gradBut_6");
// Adds the example code to the html page. ----------------------------
let codeGradExample_6 =
`<pre><code>
div {
  background-image: linear-gradient(to bottom left, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_6.innerHTML = codeGradExample_6;
// Runs the function and adds the answer to the html page. -------
gradButton_6.addEventListener("click", gradFuncV6);

function gradFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(angle, colour-1, colour-2) V1 --------
let codeGradDiv_7 = document.getElementById("codeGradID_7");
let gradButton_7 = document.getElementById("gradBut_7");
// Adds the example code to the html page. ----------------------------
let codeGradExample_7 =
`<pre><code>
div {
  background-image: linear-gradient(0deg, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_7.innerHTML = codeGradExample_7;
// Runs the function and adds the answer to the html page. -------
gradButton_7.addEventListener("click", gradFuncV7);

function gradFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(angle, colour-1, colour-2) V2 --------
let codeGradDiv_8 = document.getElementById("codeGradID_8");
let gradButton_8 = document.getElementById("gradBut_8");
// Adds the example code to the html page. ----------------------------
let codeGradExample_8 =
`<pre><code>
div {
  background-image: linear-gradient(45deg, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_8.innerHTML = codeGradExample_8;
// Runs the function and adds the answer to the html page. -------
gradButton_8.addEventListener("click", gradFuncV8);

function gradFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(angle, colour-1, colour-2) V3 ---------
let codeGradDiv_9 = document.getElementById("codeGradID_9");
let gradButton_9 = document.getElementById("gradBut_9");
// Adds the example code to the html page. ----------------------------
let codeGradExample_9 =
`<pre><code>
div {
  background-image: linear-gradient(90deg, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_9.innerHTML = codeGradExample_9;
// Runs the function and adds the answer to the html page. -------
gradButton_9.addEventListener("click", gradFuncV9);

function gradFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(angle, colour-1, colour-2) V4 ---------
let codeGradDiv_10 = document.getElementById("codeGradID_10");
let gradButton_10 = document.getElementById("gradBut_10");
// Adds the example code to the html page. ----------------------------
let codeGradExample_10 =
`<pre><code>
div {
  background-image: linear-gradient(-90deg, darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_10.innerHTML = codeGradExample_10;
// Runs the function and adds the answer to the html page. -------
gradButton_10.addEventListener("click", gradFuncV10);

function gradFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(direction, col-1, col-2...) V1 ----------
let codeGradDiv_11 = document.getElementById("codeGradID_11");
let gradButton_11 = document.getElementById("gradBut_11");
// Adds the example code to the html page. ----------------------------
let codeGradExample_11 =
`<pre><code>
div {
  background-image: linear-gradient(to right, darkgreen, palegreen 10%, linen);
  }
</code></pre>`;

codeGradDiv_11.innerHTML = codeGradExample_11;
// Runs the function and adds the answer to the html page. -------
gradButton_11.addEventListener("click", gradFuncV11);

function gradFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(direction, col-1, col-2...) V2 ----------
let codeGradDiv_12 = document.getElementById("codeGradID_12");
let gradButton_12 = document.getElementById("gradBut_12");
// Adds the example code to the html page. ----------------------------
let codeGradExample_12 =
`<pre><code>
div {
  background-image: linear-gradient(to right, darkgreen, palegreen 10%, linen 40%);
  }
</code></pre>`;

codeGradDiv_12.innerHTML = codeGradExample_12;
// Runs the function and adds the answer to the html page. -------
gradButton_12.addEventListener("click", gradFuncV12);

function gradFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: linear-gradient(direction, col-1, col-2...) V3 ----------
let codeGradDiv_13 = document.getElementById("codeGradID_13");
let gradButton_13 = document.getElementById("gradBut_13");
// Adds the example code to the html page. ----------------------------
let codeGradExample_13 =
`<pre><code>
div {
  background-image: linear-gradient(to right,
    darkgreen 25%, palegreen 25% 50%, linen 50% 75%, darkgreen 75%);
  }
</code></pre>`;

codeGradDiv_13.innerHTML = codeGradExample_13;
// Runs the function and adds the answer to the html page. -------
gradButton_13.addEventListener("click", gradFuncV13);

function gradFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: repeating-linear-gradient(direction, colours...) ----------
let codeGradDiv_14 = document.getElementById("codeGradID_14");
let gradButton_14 = document.getElementById("gradBut_14");
// Adds the example code to the html page. ----------------------------
let codeGradExample_14 =
`<pre><code>
div {
  background-image: repeating-linear-gradient(to right,
    darkgreen, palegreen 10%, linen 20%);
  }
</code></pre>`;

codeGradDiv_14.innerHTML = codeGradExample_14;
// Runs the function and adds the answer to the html page. -------
gradButton_14.addEventListener("click", gradFuncV14);

function gradFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: radial-gradient() - default V1 -------------------------
let codeGradDiv_15 = document.getElementById("codeGradID_15");
let gradButton_15 = document.getElementById("gradBut_15");
// Adds the example code to the html page. ----------------------------
let codeGradExample_15 =
`<pre><code>
div {
  background-image: radial-gradient(darkgreen, palegreen);
  }
</code></pre>`;

codeGradDiv_15.innerHTML = codeGradExample_15;
// Runs the function and adds the answer to the html page. -------
gradButton_15.addEventListener("click", gradFuncV15);

function gradFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_15");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: radial-gradient() - default V2 -------------------------
let codeGradDiv_16 = document.getElementById("codeGradID_16");
let gradButton_16 = document.getElementById("gradBut_16");
// Adds the example code to the html page. ----------------------------
let codeGradExample_16 =
`<pre><code>
div {
  background-image: radial-gradient(darkgreen, palegreen, linen);
  }
</code></pre>`;

codeGradDiv_16.innerHTML = codeGradExample_16;
// Runs the function and adds the answer to the html page. -------
gradButton_16.addEventListener("click", gradFuncV16);

function gradFuncV16(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_16");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: radial-gradient() - default V3 -------------------------
let codeGradDiv_17 = document.getElementById("codeGradID_17");
let gradButton_17 = document.getElementById("gradBut_17");
// Adds the example code to the html page. ----------------------------
let codeGradExample_17 =
`<pre><code>
div {
  background-image: radial-gradient(darkgreen 5%, palegreen 20%, linen 60%);
  }
</code></pre>`;

codeGradDiv_17.innerHTML = codeGradExample_17;
// Runs the function and adds the answer to the html page. -------
gradButton_17.addEventListener("click", gradFuncV17);

function gradFuncV17(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_17");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: radial-gradient() - default V4 -------------------------
let codeGradDiv_18 = document.getElementById("codeGradID_18");
let gradButton_18 = document.getElementById("gradBut_18");
// Adds the example code to the html page. ----------------------------
let codeGradExample_18 =
`<pre><code>
div {
  background-image: radial-gradient(darkgreen 25%, palegreen 40%, linen 80%);
  }
</code></pre>`;

codeGradDiv_18.innerHTML = codeGradExample_18;
// Runs the function and adds the answer to the html page. -------
gradButton_18.addEventListener("click", gradFuncV18);

function gradFuncV18(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_18");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: radial-gradient(shape, col-1, col-2...) ----------------------
let codeGradDiv_19 = document.getElementById("codeGradID_19");
let gradButton_19 = document.getElementById("gradBut_19");
// Adds the example code to the html page. ----------------------------
let codeGradExample_19 =
`<pre><code>
div {
  background-image: radial-gradient(circle, darkgreen, palegreen, linen);
  }
</code></pre>`;

codeGradDiv_19.innerHTML = codeGradExample_19;
// Runs the function and adds the answer to the html page. -------
gradButton_19.addEventListener("click", gradFuncV19);

function gradFuncV19(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_19");
};
// /////////////////////////////////////////////////////////////////////

// Gradients: repeating-radial-gradient() ------------------------------
let codeGradDiv_20 = document.getElementById("codeGradID_20");
let gradButton_20 = document.getElementById("gradBut_20");
// Adds the example code to the html page. ----------------------------
let codeGradExample_20 =
`<pre><code>
div {
  background-image: repeating-radial-gradient(darkgreen, palegreen 10%, linen 20%);
  }
</code></pre>`;

codeGradDiv_20.innerHTML = codeGradExample_20;
// Runs the function and adds the answer to the html page. -------
gradButton_20.addEventListener("click", gradFuncV20);

function gradFuncV20(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("gradientsChange_20");
};
// /////////////////////////////////////////////////////////////////////
