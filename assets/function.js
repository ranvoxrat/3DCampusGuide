var menubut = document.querySelector("#hami");
var sear = document.getElementById("seari");
const menu = document.querySelector("#mobmenu");
var buildmenua = document.querySelector("#buila");
var buildmenug = document.querySelector("#builg");
var dropicona = document.querySelector("#dropa");
var dropicong = document.querySelector("#dropg");
var dropiconr = document.querySelector(".dropir");
var af1 = document.querySelector("#af1");
var panomenu = document.querySelector("#panomenu");

function openmenu() {
  if (menu.className == "mobnav-menuc") {
    menubut.src = "close.png";
    menubut.style.width = "2.5em";
    menu.className = "mobnav-menuo";
    console.log("if");
  } else {
    menu.className = "mobnav-menuc";
    menubut.src = "ham.png";
    menubut.style.width = "3em";
    console.log("else");
  }
}
function bmenu(menuclicked, dropiconclicked) {
  if (menuclicked.className == "floor") {
    menuclicked.classList.toggle("open");
    dropiconclicked.classList.toggle("op");
  } else {
    menuclicked.className = "floor";
    dropiconclicked.className = "dropi";
  }
}
function roomop() {
  if (af1.className == "room") {
    af1.classList.toggle("open");
    dropiconr.classList.toggle("op");
  } else {
    af1.className = "room";
    dropiconr.className = "dropir";
  }
}

function hidemenu() {
  if (panomenu.className == "panamenu") {
    panomenu.classList.toggle("clo");
  } else {
    panomenu.className = "panamenu";
  }
}

function stopopen(roomop) {
  event.stopPropagation();
}

function roomclick(selectedscene) {
  stopopen();
  loadscene(selectedscene);
}
