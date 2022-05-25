"use strict";

// Flexbox: flex -----------------------------------------------------
let codeFlexboxDiv_1 = document.getElementById("codeFlexboxID_1");
let flexboxButton_1 = document.getElementById("flexboxBut_1");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_1 =
`<pre><code>
div {
  display: flex;
  }
</code></pre>`;

codeFlexboxDiv_1.innerHTML = codeFlexboxExample_1;
// Runs the function and adds the answer to the html page. -------
flexboxButton_1.addEventListener("click", flexboxFuncV1);

function flexboxFuncV1(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_1");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: flex-direction V1 ------------------------------------------
let codeFlexboxDiv_2 = document.getElementById("codeFlexboxID_2");
let flexboxButton_2 = document.getElementById("flexboxBut_2");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_2 =
`<pre><code>
div {
  display: flex;
  flex-direction: column;
  }
</code></pre>`;

codeFlexboxDiv_2.innerHTML = codeFlexboxExample_2;
// Runs the function and adds the answer to the html page. -------
flexboxButton_2.addEventListener("click", flexboxFuncV2);

function flexboxFuncV2(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_2");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: flex-direction V2 ------------------------------------------
let codeFlexboxDiv_3 = document.getElementById("codeFlexboxID_3");
let flexboxButton_3 = document.getElementById("flexboxBut_3");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_3 =
`<pre><code>
div {
  display: flex;
  flex-direction: column-reverse;
  }
</code></pre>`;

codeFlexboxDiv_3.innerHTML = codeFlexboxExample_3;
// Runs the function and adds the answer to the html page. -------
flexboxButton_3.addEventListener("click", flexboxFuncV3);

function flexboxFuncV3(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_3");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: flex-direction V3 ------------------------------------------
let codeFlexboxDiv_4 = document.getElementById("codeFlexboxID_4");
let flexboxButton_4 = document.getElementById("flexboxBut_4");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_4 =
`<pre><code>
div {
  display: flex;
  flex-direction: row;
  }
</code></pre>`;

codeFlexboxDiv_4.innerHTML = codeFlexboxExample_4;
// Runs the function and adds the answer to the html page. -------
flexboxButton_4.addEventListener("click", flexboxFuncV4);

function flexboxFuncV4(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_4");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: flex-direction V4 ------------------------------------------
let codeFlexboxDiv_5 = document.getElementById("codeFlexboxID_5");
let flexboxButton_5 = document.getElementById("flexboxBut_5");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_5 =
`<pre><code>
div {
  display: flex;
  flex-direction: row-reverse;
  }
</code></pre>`;

codeFlexboxDiv_5.innerHTML = codeFlexboxExample_5;
// Runs the function and adds the answer to the html page. -------
flexboxButton_5.addEventListener("click", flexboxFuncV5);

function flexboxFuncV5(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_5");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: flex-wrap V1 ----------------------------------------------
let codeFlexboxDiv_6 = document.getElementById("codeFlexboxID_6");
let flexboxButton_6 = document.getElementById("flexboxBut_6");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_6 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  }
</code></pre>`;

codeFlexboxDiv_6.innerHTML = codeFlexboxExample_6;
// Runs the function and adds the answer to the html page. -------
flexboxButton_6.addEventListener("click", flexboxFuncV6);

function flexboxFuncV6(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_6");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: flex-wrap V2 ----------------------------------------------
let codeFlexboxDiv_7 = document.getElementById("codeFlexboxID_7");
let flexboxButton_7 = document.getElementById("flexboxBut_7");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_7 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap-reverse;
  }
</code></pre>`;

codeFlexboxDiv_7.innerHTML = codeFlexboxExample_7;
// Runs the function and adds the answer to the html page. -------
flexboxButton_7.addEventListener("click", flexboxFuncV7);

function flexboxFuncV7(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_7");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V1 ------------------------------------------
let codeFlexboxDiv_8 = document.getElementById("codeFlexboxID_8");
let flexboxButton_8 = document.getElementById("flexboxBut_8");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_8 =
`<pre><code>
div {
  display: flex;
  justify-content: center;
  }
</code></pre>`;

codeFlexboxDiv_8.innerHTML = codeFlexboxExample_8;
// Runs the function and adds the answer to the html page. -------
flexboxButton_8.addEventListener("click", flexboxFuncV8);

function flexboxFuncV8(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_8");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V2 ------------------------------------------
let codeFlexboxDiv_9 = document.getElementById("codeFlexboxID_9");
let flexboxButton_9 = document.getElementById("flexboxBut_9");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_9 =
`<pre><code>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  }
</code></pre>`;

codeFlexboxDiv_9.innerHTML = codeFlexboxExample_9;
// Runs the function and adds the answer to the html page. -------
flexboxButton_9.addEventListener("click", flexboxFuncV9);

function flexboxFuncV9(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_9");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V3 ------------------------------------------
let codeFlexboxDiv_10 = document.getElementById("codeFlexboxID_10");
let flexboxButton_10 = document.getElementById("flexboxBut_10");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_10 =
`<pre><code>
div {
  display: flex;
  justify-content: flex-start;
  }
</code></pre>`;

codeFlexboxDiv_10.innerHTML = codeFlexboxExample_10;
// Runs the function and adds the answer to the html page. -------
flexboxButton_10.addEventListener("click", flexboxFuncV10);

function flexboxFuncV10(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_10");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V4 ------------------------------------------
let codeFlexboxDiv_11 = document.getElementById("codeFlexboxID_11");
let flexboxButton_11 = document.getElementById("flexboxBut_11");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_11 =
`<pre><code>
div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  }
</code></pre>`;

codeFlexboxDiv_11.innerHTML = codeFlexboxExample_11;
// Runs the function and adds the answer to the html page. -------
flexboxButton_11.addEventListener("click", flexboxFuncV11);

function flexboxFuncV11(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_11");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V5 ------------------------------------------
let codeFlexboxDiv_12 = document.getElementById("codeFlexboxID_12");
let flexboxButton_12 = document.getElementById("flexboxBut_12");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_12 =
`<pre><code>
div {
  display: flex;
  justify-content: flex-end;
  }
</code></pre>`;

codeFlexboxDiv_12.innerHTML = codeFlexboxExample_12;
// Runs the function and adds the answer to the html page. -------
flexboxButton_12.addEventListener("click", flexboxFuncV12);

function flexboxFuncV12(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_12");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V6 ------------------------------------------
let codeFlexboxDiv_13 = document.getElementById("codeFlexboxID_13");
let flexboxButton_13 = document.getElementById("flexboxBut_13");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_13 =
`<pre><code>
div {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  }
</code></pre>`;

codeFlexboxDiv_13.innerHTML = codeFlexboxExample_13;
// Runs the function and adds the answer to the html page. -------
flexboxButton_13.addEventListener("click", flexboxFuncV13);

function flexboxFuncV13(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_13");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V7 ------------------------------------------
let codeFlexboxDiv_14 = document.getElementById("codeFlexboxID_14");
let flexboxButton_14 = document.getElementById("flexboxBut_14");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_14 =
`<pre><code>
div {
  display: flex;
  justify-content: space-around;
  }
</code></pre>`;

codeFlexboxDiv_14.innerHTML = codeFlexboxExample_14;
// Runs the function and adds the answer to the html page. -------
flexboxButton_14.addEventListener("click", flexboxFuncV14);

function flexboxFuncV14(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_14");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V8 ------------------------------------------
let codeFlexboxDiv_15 = document.getElementById("codeFlexboxID_15");
let flexboxButton_15 = document.getElementById("flexboxBut_15");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_15 =
`<pre><code>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  }
</code></pre>`;

codeFlexboxDiv_15.innerHTML = codeFlexboxExample_15;
// Runs the function and adds the answer to the html page. -------
flexboxButton_15.addEventListener("click", flexboxFuncV15);

function flexboxFuncV15(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_15");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V9 ------------------------------------------
let codeFlexboxDiv_16 = document.getElementById("codeFlexboxID_16");
let flexboxButton_16 = document.getElementById("flexboxBut_16");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_16 =
`<pre><code>
div {
  display: flex;
  justify-content: space-between;
  }
</code></pre>`;

codeFlexboxDiv_16.innerHTML = codeFlexboxExample_16;
// Runs the function and adds the answer to the html page. -------
flexboxButton_16.addEventListener("click", flexboxFuncV16);

function flexboxFuncV16(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_16");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: justify-content V10 ------------------------------------------
let codeFlexboxDiv_17 = document.getElementById("codeFlexboxID_17");
let flexboxButton_17 = document.getElementById("flexboxBut_17");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_17 =
`<pre><code>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }
</code></pre>`;

codeFlexboxDiv_17.innerHTML = codeFlexboxExample_17;
// Runs the function and adds the answer to the html page. -------
flexboxButton_17.addEventListener("click", flexboxFuncV17);

function flexboxFuncV17(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_17");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items V1 --------------------------------------------
let codeFlexboxDiv_18 = document.getElementById("codeFlexboxID_18");
let flexboxButton_18 = document.getElementById("flexboxBut_18");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_18 =
`<pre><code>
div {
  display: flex;
  align-items: center;
  }
</code></pre>`;

codeFlexboxDiv_18.innerHTML = codeFlexboxExample_18;
// Runs the function and adds the answer to the html page. -------
flexboxButton_18.addEventListener("click", flexboxFuncV18);

function flexboxFuncV18(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_18");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items V2 --------------------------------------------
let codeFlexboxDiv_19 = document.getElementById("codeFlexboxID_19");
let flexboxButton_19 = document.getElementById("flexboxBut_19");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_19 =
`<pre><code>
div {
  display: flex;
  align-items: flex-start;
  }
</code></pre>`;

codeFlexboxDiv_19.innerHTML = codeFlexboxExample_19;
// Runs the function and adds the answer to the html page. -------
flexboxButton_19.addEventListener("click", flexboxFuncV19);

function flexboxFuncV19(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_19");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items V3 --------------------------------------------
let codeFlexboxDiv_20 = document.getElementById("codeFlexboxID_20");
let flexboxButton_20 = document.getElementById("flexboxBut_20");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_20 =
`<pre><code>
div {
  display: flex;
  align-items: flex-end;
  }
</code></pre>`;

codeFlexboxDiv_20.innerHTML = codeFlexboxExample_20;
// Runs the function and adds the answer to the html page. -------
flexboxButton_20.addEventListener("click", flexboxFuncV20);

function flexboxFuncV20(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_20");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items V4 --------------------------------------------
let codeFlexboxDiv_21 = document.getElementById("codeFlexboxID_21");
let flexboxButton_21 = document.getElementById("flexboxBut_21");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_21 =
`<pre><code>
div {
  display: flex;
  align-items: stretch;
  }
  div div {
    height: auto;
  }
  // Removes the fixed heights!
</code></pre>`;

codeFlexboxDiv_21.innerHTML = codeFlexboxExample_21;
// Runs the function and adds the answer to the html page. -------
flexboxButton_21.addEventListener("click", flexboxFuncV21);

function flexboxFuncV21(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_21");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items V5 --------------------------------------------
let codeFlexboxDiv_22 = document.getElementById("codeFlexboxID_22");
let flexboxButton_22 = document.getElementById("flexboxBut_22");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_22 =
`<pre><code>
div {
  display: flex;
  align-items: baseline;
  }
</code></pre>`;

codeFlexboxDiv_22.innerHTML = codeFlexboxExample_22;
// Runs the function and adds the answer to the html page. -------
flexboxButton_22.addEventListener("click", flexboxFuncV22);

function flexboxFuncV22(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_22");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content V1 --------------------------------------------
let codeFlexboxDiv_23 = document.getElementById("codeFlexboxID_23");
let flexboxButton_23 = document.getElementById("flexboxBut_23");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_23 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  }
</code></pre>`;

codeFlexboxDiv_23.innerHTML = codeFlexboxExample_23;
// Runs the function and adds the answer to the html page. -------
flexboxButton_23.addEventListener("click", flexboxFuncV23);

function flexboxFuncV23(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_23");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content V2 --------------------------------------------
let codeFlexboxDiv_24 = document.getElementById("codeFlexboxID_24");
let flexboxButton_24 = document.getElementById("flexboxBut_24");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_24 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  }
</code></pre>`;

codeFlexboxDiv_24.innerHTML = codeFlexboxExample_24;
// Runs the function and adds the answer to the html page. -------
flexboxButton_24.addEventListener("click", flexboxFuncV24);

function flexboxFuncV24(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_24");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content V3 --------------------------------------------
let codeFlexboxDiv_25 = document.getElementById("codeFlexboxID_25");
let flexboxButton_25 = document.getElementById("flexboxBut_25");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_25 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  }
</code></pre>`;

codeFlexboxDiv_25.innerHTML = codeFlexboxExample_25;
// Runs the function and adds the answer to the html page. -------
flexboxButton_25.addEventListener("click", flexboxFuncV25);

function flexboxFuncV25(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_25");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content V4 --------------------------------------------
let codeFlexboxDiv_26 = document.getElementById("codeFlexboxID_26");
let flexboxButton_26 = document.getElementById("flexboxBut_26");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_26 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  }
</code></pre>`;

codeFlexboxDiv_26.innerHTML = codeFlexboxExample_26;
// Runs the function and adds the answer to the html page. -------
flexboxButton_26.addEventListener("click", flexboxFuncV26);

function flexboxFuncV26(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_26");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content V5 --------------------------------------------
let codeFlexboxDiv_27 = document.getElementById("codeFlexboxID_27");
let flexboxButton_27 = document.getElementById("flexboxBut_27");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_27 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  }
</code></pre>`;

codeFlexboxDiv_27.innerHTML = codeFlexboxExample_27;
// Runs the function and adds the answer to the html page. -------
flexboxButton_27.addEventListener("click", flexboxFuncV27);

function flexboxFuncV27(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_27");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content V6 --------------------------------------------
let codeFlexboxDiv_28 = document.getElementById("codeFlexboxID_28");
let flexboxButton_28 = document.getElementById("flexboxBut_28");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_28 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  }
  div div {
    height: auto;
  }
  // Removes the fixed heights!
</code></pre>`;

codeFlexboxDiv_28.innerHTML = codeFlexboxExample_28;
// Runs the function and adds the answer to the html page. -------
flexboxButton_28.addEventListener("click", flexboxFuncV28);

function flexboxFuncV28(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_28");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content & justify-content V1 ---------------------------
let codeFlexboxDiv_29 = document.getElementById("codeFlexboxID_29");
let flexboxButton_29 = document.getElementById("flexboxBut_29");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_29 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</code></pre>`;

codeFlexboxDiv_29.innerHTML = codeFlexboxExample_29;
// Runs the function and adds the answer to the html page. -------
flexboxButton_29.addEventListener("click", flexboxFuncV29);

function flexboxFuncV29(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_29");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content & justify-content V2 ---------------------------
let codeFlexboxDiv_30 = document.getElementById("codeFlexboxID_30");
let flexboxButton_30 = document.getElementById("flexboxBut_30");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_30 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</code></pre>`;

codeFlexboxDiv_30.innerHTML = codeFlexboxExample_30;
// Runs the function and adds the answer to the html page. -------
flexboxButton_30.addEventListener("click", flexboxFuncV30);

function flexboxFuncV30(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_30");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-content & justify-content V3 ---------------------------
let codeFlexboxDiv_31 = document.getElementById("codeFlexboxID_31");
let flexboxButton_31 = document.getElementById("flexboxBut_31");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_31 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
</code></pre>`;

codeFlexboxDiv_31.innerHTML = codeFlexboxExample_31;
// Runs the function and adds the answer to the html page. -------
flexboxButton_31.addEventListener("click", flexboxFuncV31);

function flexboxFuncV31(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_31");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items & justify-content V1 ---------------------------
let codeFlexboxDiv_32 = document.getElementById("codeFlexboxID_32");
let flexboxButton_32 = document.getElementById("flexboxBut_32");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_32 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</code></pre>`;

codeFlexboxDiv_32.innerHTML = codeFlexboxExample_32;
// Runs the function and adds the answer to the html page. -------
flexboxButton_32.addEventListener("click", flexboxFuncV32);

function flexboxFuncV32(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_32");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items & justify-content V2 ---------------------------
let codeFlexboxDiv_33 = document.getElementById("codeFlexboxID_33");
let flexboxButton_33 = document.getElementById("flexboxBut_33");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_33 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</code></pre>`;

codeFlexboxDiv_33.innerHTML = codeFlexboxExample_33;
// Runs the function and adds the answer to the html page. -------
flexboxButton_33.addEventListener("click", flexboxFuncV33);

function flexboxFuncV33(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_33");
};
// /////////////////////////////////////////////////////////////////////

// Flexbox: align-items & justify-content V3 ---------------------------
let codeFlexboxDiv_34 = document.getElementById("codeFlexboxID_34");
let flexboxButton_34 = document.getElementById("flexboxBut_34");
// Adds the example code to the html page. ----------------------------
let codeFlexboxExample_34 =
`<pre><code>
div {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</code></pre>`;

codeFlexboxDiv_34.innerHTML = codeFlexboxExample_34;
// Runs the function and adds the answer to the html page. -------
flexboxButton_34.addEventListener("click", flexboxFuncV34);

function flexboxFuncV34(e){
  let changeElement = e.target.previousElementSibling;
  changeElement.classList.toggle("flexboxChange_34");
};
// /////////////////////////////////////////////////////////////////////
