// ============= SECTION PRE-INSTALLED MOD PACK ================ //

const tab1 = document.getElementById("btn1");
const tab2 = document.getElementById("btn2");
const tab3 = document.getElementById("btn3");
const tab4 = document.getElementById("btn4");
const tab5 = document.getElementById("btn5");
const tab6 = document.getElementById("btn6");
const tab7 = document.getElementById("btn7");
const tab8 = document.getElementById("btn8");
const tab9 = document.getElementById("btn9");
const tab10 = document.getElementById("btn10");
const tab11 = document.getElementById("btn11");
const tab12 = document.getElementById("btn12");

const content1 = tab1.addEventListener("click", () => {
  switchTab(tab1);
});
tab2.addEventListener("click", () => {
  switchTab(tab2);
});
tab3.addEventListener("click", () => {
  switchTab(tab3);
});
tab4.addEventListener("click", () => {
  switchTab(tab4);
});
tab5.addEventListener("click", () => {
  switchTab(tab5);
});
tab6.addEventListener("click", () => {
  switchTab(tab6);
});
tab7.addEventListener("click", () => {
  switchTab(tab7);
});
tab8.addEventListener("click", () => {
  switchTab(tab8);
});
tab9.addEventListener("click", () => {
  switchTab(tab9);
});
tab10.addEventListener("click", () => {
  switchTab(tab10);
});
tab11.addEventListener("click", () => {
  switchTab(tab11);
});
tab12.addEventListener("click", () => {
  switchTab(tab12);
});
function switchTab(tabs) {
  if (tabs === tab1) {
    document.getElementById("content-1").innerHTML = "$49.99";
    tab2.classList.add("btn-official");
    tab1.classList.remove("btn-official");
    tab2.classList.remove("btn-login-common");
  }
  if (tabs === tab2) {
    document.getElementById("content-1").innerHTML = "$69.99";
    tab1.classList.add("btn-official");
    tab2.classList.add("btn-login-common");
    tab1.classList.remove("btn-login-common");
    tab2.classList.remove("btn-official");
  }
  if (tabs === tab3) {
    document.getElementById("content-2").innerHTML = "$49.99";
    tab4.classList.add("btn-official");
    tab3.classList.remove("btn-official");
    tab4.classList.remove("btn-login-common");
  }

  if (tabs === tab4) {
    document.getElementById("content-2").innerHTML = "$69.99";
    tab3.classList.add("btn-official");
    tab4.classList.add("btn-login-common");
    tab3.classList.remove("btn-login-common");
    tab4.classList.remove("btn-official");
  }
  if (tabs === tab5) {
    document.getElementById("content-3").innerHTML = "$49.99";
    tab6.classList.add("btn-official");
    tab5.classList.remove("btn-official");
    tab6.classList.remove("btn-login-common");
  }
  if (tabs === tab6) {
    document.getElementById("content-3").innerHTML = "$69.99";
    tab5.classList.add("btn-official");
    tab6.classList.add("btn-login-common");
    tab5.classList.remove("btn-login-common");
    tab6.classList.remove("btn-official");
  }
  if (tabs === tab7) {
    document.getElementById("content-4").innerHTML = "$49.99";
    tab8.classList.add("btn-official");
    tab7.classList.remove("btn-official");
    tab8.classList.remove("btn-login-common");
  }
  if (tabs === tab8) {
    document.getElementById("content-4").innerHTML = "$69.99";
    tab7.classList.add("btn-official");
    tab8.classList.add("btn-login-common");
    tab7.classList.remove("btn-login-common");
    tab8.classList.remove("btn-official");
  }
  if (tabs === tab9) {
    document.getElementById("content-5").innerHTML = "$49.99";
    tab10.classList.add("btn-official");
    tab9.classList.remove("btn-official");
    tab10.classList.remove("btn-login-common");
  }
  if (tabs === tab10) {
    document.getElementById("content-5").innerHTML = "$69.99";
    tab9.classList.add("btn-official");
    tab10.classList.add("btn-login-common");
    tab9.classList.remove("btn-login-common");
    tab10.classList.remove("btn-official");
  }
  if (tabs === tab11) {
    document.getElementById("content-6").innerHTML = "$49.99";
    tab12.classList.add("btn-official");
    tab11.classList.remove("btn-official");
    tab12.classList.remove("btn-login-common");
  }
  if (tabs === tab12) {
    document.getElementById("content-6").innerHTML = "$69.99";
    tab11.classList.add("btn-official");
    tab11.classList.remove("btn-login-common");
    tab12.classList.add("btn-login-common");
    tab12.classList.remove("btn-official");
  }
}
