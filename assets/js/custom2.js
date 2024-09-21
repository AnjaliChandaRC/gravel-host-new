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
      document.getElementById("content-1").innerHTML = "$9.00/mo";
      document.getElementById("content-title-1").innerHTML = "EOKA";
      document.getElementById("recommended-gb-1").innerHTML = "40 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-1").innerHTML = "<span>6GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>25GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-1").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-eoka-plan';");
      tab10.classList.add("btn-official");
      tab9.classList.remove("btn-official");
    } 
    if (tabs === tab10) {
      document.getElementById("content-1").innerHTML = "$13.89/mo";
      document.getElementById("content-title-1").innerHTML = "EOKA+";
      document.getElementById("recommended-gb-1").innerHTML = "50+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-1").innerHTML = "<span>6GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-1").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-eoka';");
      tab9.classList.add("btn-official");
      tab9.classList.remove("btn-login-common");
      tab10.classList.remove("btn-official");
    }
    if (tabs === tab11) {
      document.getElementById("content-2").innerHTML = "$14.00/mo";
      document.getElementById("content-title-2").innerHTML = "CROSSBOW";
      document.getElementById("recommended-gb-2").innerHTML = "80 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-2").innerHTML = "<span>7.5GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>50GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-2").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-crossbow-plan';");
      tab12.classList.add("btn-official");
      tab11.classList.remove("btn-official");
    } 
    if (tabs === tab12) {
      document.getElementById("content-2").innerHTML = "$18.89/mo";
      document.getElementById("content-title-2").innerHTML = "CROSSBOW+";
      document.getElementById("recommended-gb-2").innerHTML = "100+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-2").innerHTML = "<span>7.5GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>75GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-2").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-crossbow';");
      tab11.classList.add("btn-official");
      tab11.classList.remove("btn-login-common");
      tab12.classList.remove("btn-official");
    }
    if (tabs === tab13) {
      document.getElementById("content-3").innerHTML = "$21.00/mo";
      document.getElementById("content-title-3").innerHTML = "ASSAULT RIFLE";
      document.getElementById("recommended-gb-3").innerHTML = "100 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-3").innerHTML = "<span>9GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>75GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-3").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-python-plan';");
      tab14.classList.add("btn-official");
      tab13.classList.remove("btn-official");
    } 
    if (tabs === tab14) {
      document.getElementById("content-3").innerHTML = "$25.89/mo";
      document.getElementById("content-title-3").innerHTML = "ASSAULT RIFLE+";
      document.getElementById("recommended-gb-3").innerHTML = "150+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-3").innerHTML = "<span>9GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-3").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-assault-rifle';");
      tab13.classList.add("btn-official");
      tab13.classList.remove("btn-login-common");
      tab14.classList.remove("btn-official");
    }
    if (tabs === tab15) {
      document.getElementById("content-4").innerHTML = "$31.00/mo";
      document.getElementById("content-title-4").innerHTML = "L96 RIFLE";
      document.getElementById("recommended-gb-4").innerHTML = "200 PLAYERS RECOMMENDED";
      document.getElementById("content-desc-4").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR4</span></span><span>100GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-rifle-plan';");
      tab16.classList.add("btn-official");
      tab15.classList.remove("btn-official");
    } 
    if (tabs === tab16) {
      document.getElementById("content-4").innerHTML = "$34.89/mo";
      document.getElementById("content-title-4").innerHTML = "L96 RIFLE+";
      document.getElementById("recommended-gb-4").innerHTML = "200+ PLAYERS RECOMMENDED";
      document.getElementById("content-desc-4").innerHTML = "<span>13GB RAM<br><span class='clr-light-blue'>DDR5</span></span><span>150GB NVMe<br><span class='clr-light-blue'>STORAGE</span></span>";
      document.getElementById("btn-get-started-4").setAttribute("onclick", "window.location.href='https://gravelhost.com/index.php?rp=/store/rust-servers/rust-hosting-l96-rifle';");
      tab15.classList.add("btn-official");
      tab15.classList.remove("btn-login-common");
      tab16.classList.remove("btn-official");
    }
  }
  