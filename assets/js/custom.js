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

  // function switchTab(tabs) {
  //   if (tabs === tab1) {
  //     document.getElementById("content-1").innerHTML = "$4.50";
  //     tab2.classList.add("btn-official");
  //     tab1.classList.remove("btn-official");
  //   }
  //   if (tabs === tab2) {
  //     document.getElementById("content-1").innerHTML = "$5.91";
  //     tab1.classList.add("btn-official");
  //     tab1.classList.remove("btn-login-common");
  //     tab2.classList.remove("btn-official");
  //   }
  // }

  function openTab(evt, tabName) {
    var i, tabContent, tabButtons;
    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    // Remove the 'active' class from all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }
    // Show the selected tab content and set the corresponding tab button as 'active'
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  // By default, display the first tab content and set the first tab button as 'active'
  var defaultTab = document.getElementsByClassName("tab-button")[0];
  defaultTab.classList.add("active");
  document.getElementById("tab1").style.display = "block";