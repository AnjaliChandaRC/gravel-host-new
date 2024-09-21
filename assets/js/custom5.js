// ============= SECTION PRE-INSTALLED MOD PACK ================ //

const tab9 = document.getElementById("btn9");
const tab10 = document.getElementById("btn10");
const tab11 = document.getElementById("btn11");
const tab12 = document.getElementById("btn12");
const tab13 = document.getElementById("btn13");
const tab14 = document.getElementById("btn14");
const tab15 = document.getElementById("btn15");
const tab16 = document.getElementById("btn16");

const content1 = tab9.addEventListener("click", () => {
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
  tab13.addEventListener("click", () => {
    switchTab(tab13);
  });
  tab14.addEventListener("click", () => {
    switchTab(tab14);
  });
  tab15.addEventListener("click", () => {
    switchTab(tab15);
  });
  tab16.addEventListener("click", () => {
    switchTab(tab16);
  });
  
  function switchTab(tabs) {
    if (tabs === tab9) {
      document.getElementById("content-1").innerHTML = "$16.00/mo";
      document.getElementById("content-title-1").innerHTML = "Parasaur";
      document.getElementById("recommended-gb-1").innerHTML = "20 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-1").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>25GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-1").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-survival-ascended';");
      tab10.classList.add("btn-official");
      tab9.classList.remove("btn-official");
    } 
    if (tabs === tab10) {
      document.getElementById("content-1").innerHTML = "$19.89/mo";
      document.getElementById("content-title-1").innerHTML = "Parasaur+";
      document.getElementById("recommended-gb-1").innerHTML = "20+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-1").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-1").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-hosting-parasaur';");
      tab9.classList.add("btn-official");
      tab9.classList.remove("btn-login-common");
      tab10.classList.remove("btn-official");
    }
    if (tabs === tab11) {
      document.getElementById("content-2").innerHTML = "$21.00/mo";
      document.getElementById("content-title-2").innerHTML = "Triceratops";
      document.getElementById("recommended-gb-2").innerHTML = "40 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-2").innerHTML = "<span>15GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-2").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-hosting-triceratops';");
      tab12.classList.add("btn-official");
      tab11.classList.remove("btn-official");
    } 
    if (tabs === tab12) {
      document.getElementById("content-2").innerHTML = "$24.89/mo";
      document.getElementById("content-title-2").innerHTML = "Triceratops+";
      document.getElementById("recommended-gb-2").innerHTML = "40+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-2").innerHTML = "<span>15GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>75GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-2").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-hosting-triceratops-1';");
      tab11.classList.add("btn-official");
      tab11.classList.remove("btn-login-common");
      tab12.classList.remove("btn-official");
    }
    if (tabs === tab13) {
      document.getElementById("content-3").innerHTML = "$27.00/mo";
      document.getElementById("content-title-3").innerHTML = "Raptor";
      document.getElementById("recommended-gb-3").innerHTML = "80 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-3").innerHTML = "<span>17GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>75GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-3").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-hosting-raptor';");
      tab14.classList.add("btn-official");
      tab13.classList.remove("btn-official");
    } 
    if (tabs === tab14) {
      document.getElementById("content-3").innerHTML = "$30.89/mo";
      document.getElementById("content-title-3").innerHTML = "Raptor+";
      document.getElementById("recommended-gb-3").innerHTML = "80+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-3").innerHTML = "<span>17GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-3").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-hosting-raptor-1';");
      tab13.classList.add("btn-official");
      tab13.classList.remove("btn-login-common");
      tab14.classList.remove("btn-official");
    }
    if (tabs === tab15) {
      document.getElementById("content-4").innerHTML = "$32.00/mo";
      document.getElementById("content-title-4").innerHTML = "T-Rex";
      document.getElementById("recommended-gb-4").innerHTML = "120 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-4").innerHTML = "<span>19GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-hosting-t-rex';");
      tab16.classList.add("btn-official");
      tab15.classList.remove("btn-official");
    } 
    if (tabs === tab16) {
      document.getElementById("content-4").innerHTML = "$34.89/mo";
      document.getElementById("content-title-4").innerHTML = "T-Rex+";
      document.getElementById("recommended-gb-4").innerHTML = "120+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-4").innerHTML = "<span>19GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>150GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/ark-survival-ascended/ark-hosting-t-rex-1';");
      tab15.classList.add("btn-official");
      tab15.classList.remove("btn-login-common");
      tab16.classList.remove("btn-official");
    }
  }
  