"use strict";

// Background Images: url(file-path) --------------------------------------
let codeBGImgDiv_1 = document.getElementById("codeBGImgID_1");
let bgImgButton_1 = document.getElementById("bgImgBut_1");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_1 =
`<pre><code>
div {
  background-image: url(../images/Travels_NZ.JPG);
  }
</code></pre>`;

codeBGImgDiv_1.innerHTML = codeBGImgExample_1;
// Runs the function and adds the answer to the html page. -------
bgImgButton_1.addEventListener("click", bgImgFuncV1);

function bgImgFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-size V1 --------------------------------
let codeBGImgDiv_2 = document.getElementById("codeBGImgID_2");
let bgImgButton_2 = document.getElementById("bgImgBut_2");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_2 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: 5rem 3.375rem;
  }
</code></pre>`;

codeBGImgDiv_2.innerHTML = codeBGImgExample_2;
// Runs the function and adds the answer to the html page. -------
bgImgButton_2.addEventListener("click", bgImgFuncV2);

function bgImgFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-size V2 --------------------------------
let codeBGImgDiv_3 = document.getElementById("codeBGImgID_3");
let bgImgButton_3 = document.getElementById("bgImgBut_3");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_3 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: contain;
  }
</code></pre>`;

codeBGImgDiv_3.innerHTML = codeBGImgExample_3;
// Runs the function and adds the answer to the html page. -------
bgImgButton_3.addEventListener("click", bgImgFuncV3);

function bgImgFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-size V3 --------------------------------
let codeBGImgDiv_4 = document.getElementById("codeBGImgID_4");
let bgImgButton_4 = document.getElementById("bgImgBut_4");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_4 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: cover;
  }
</code></pre>`;

codeBGImgDiv_4.innerHTML = codeBGImgExample_4;
// Runs the function and adds the answer to the html page. -------
bgImgButton_4.addEventListener("click", bgImgFuncV4);

function bgImgFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-repeat V1 -----------------------------
let codeBGImgDiv_5 = document.getElementById("codeBGImgID_5");
let bgImgButton_5 = document.getElementById("bgImgBut_5");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_5 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: 5rem 3.375rem;
  background-repeat: no-repeat;
  }
</code></pre>`;

codeBGImgDiv_5.innerHTML = codeBGImgExample_5;
// Runs the function and adds the answer to the html page. -------
bgImgButton_5.addEventListener("click", bgImgFuncV5);

function bgImgFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-repeat V2 -----------------------------
let codeBGImgDiv_6 = document.getElementById("codeBGImgID_6");
let bgImgButton_6 = document.getElementById("bgImgBut_6");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_6 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: 5rem 3.375rem;
  background-repeat: repeat-x;
  }
</code></pre>`;

codeBGImgDiv_6.innerHTML = codeBGImgExample_6;
// Runs the function and adds the answer to the html page. -------
bgImgButton_6.addEventListener("click", bgImgFuncV6);

function bgImgFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-repeat V3 -----------------------------
let codeBGImgDiv_7 = document.getElementById("codeBGImgID_7");
let bgImgButton_7 = document.getElementById("bgImgBut_7");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_7 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: 5rem 3.375rem;
  background-repeat: repeat-y;
  }
</code></pre>`;

codeBGImgDiv_7.innerHTML = codeBGImgExample_7;
// Runs the function and adds the answer to the html page. -------
bgImgButton_7.addEventListener("click", bgImgFuncV7);

function bgImgFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-position V1 ---------------------------
let codeBGImgDiv_8 = document.getElementById("codeBGImgID_8");
let bgImgButton_8 = document.getElementById("bgImgBut_8");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_8 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: 9rem 6.075rem;
  background-repeat: no-repeat;
  background-position: top left;
  }
</code></pre>`;

codeBGImgDiv_8.innerHTML = codeBGImgExample_8;
// Runs the function and adds the answer to the html page. -------
bgImgButton_8.addEventListener("click", bgImgFuncV8);

function bgImgFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: background-position V2 ---------------------------
let codeBGImgDiv_9 = document.getElementById("codeBGImgID_9");
let bgImgButton_9 = document.getElementById("bgImgBut_9");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_9 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG);
  background-size: 9rem 6.075rem;
  background-repeat: no-repeat;
  background-position: bottom right;
  }
</code></pre>`;

codeBGImgDiv_9.innerHTML = codeBGImgExample_9;
// Runs the function and adds the answer to the html page. -------
bgImgButton_9.addEventListener("click", bgImgFuncV9);

function bgImgFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: multiple images V1 -------------------------------
let codeBGImgDiv_10 = document.getElementById("codeBGImgID_10");
let bgImgButton_10 = document.getElementById("bgImgBut_10");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_10 =
`<pre><code>
div {
  background-image: url(../images/travels_NZ.JPG),
  url(../images/travels_NZ_2.JPG);
  background-size: 9rem 6.075rem, 9rem 6.075rem;
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
  }
</code></pre>`;

codeBGImgDiv_10.innerHTML = codeBGImgExample_10;
// Runs the function and adds the answer to the html page. -------
bgImgButton_10.addEventListener("click", bgImgFuncV10);

function bgImgFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Background Images: multiple images V2 -------------------------------
let codeBGImgDiv_11 = document.getElementById("codeBGImgID_11");
let bgImgButton_11 = document.getElementById("bgImgBut_11");
// Adds the example code to the html page. ----------------------------
let codeBGImgExample_11 =
`<pre><code>
div {
  background: palegreen;
  background-image: url(../images/travels_NZ.JPG),
   url(../images/travels_NZ_2.JPG);
  background-size: 9rem 6.075rem, 9rem 6.075rem;
  background-repeat: no-repeat, repeat-y;
  background-position: top left, bottom right;
  }
</code></pre>`;

codeBGImgDiv_11.innerHTML = codeBGImgExample_11;
// Runs the function and adds the answer to the html page. -------
bgImgButton_11.addEventListener("click", bgImgFuncV11);

function bgImgFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("backgroundChange_11");
};
// /////////////////////////////////////////////////////////////////////
