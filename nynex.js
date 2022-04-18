let lib = document.getElementById("lib");
let cdtv = document.getElementById("cdtv");
let life = document.getElementById("life");

let eject_lib = document.getElementById("eject-lib");

let loader = document.getElementById("loader");
let field = document.getElementById("field");
let lib_list = document.getElementById("lib-list");

let tape_sound = document.getElementById("tape-sound");

function waitForElement(id, callback){
  let pops = setInterval(function () {
    if( document.getElementById(id)) {
      clearInterval(pops);
      callback();
    }
  }, 100);
}

waitForElement("viewport", function () {
  setTimeout(function () {
    $("#loader").fadeIn(5000);
  }, 5000);
});

$(".option").click(function () {
  tape_sound.cloneNode(true).play();
});

lib.onclick = function () {
  loader.style.display = "none";

  field.style.display = "block";
  lib_list.style.display = "block";
}

eject_lib.onclick = function () {
  field.style.display = "none";
  lib_list.style.display = "none";
  
  loader.style.display = "block";
}

setInterval(function () {
  let farmhouseRand = Math.floor(Math.random() * 10);

  switch (farmhouseRand) {
    case 0:
      loader.style.backgroundImage = "url('farmhouse.jpg')";
  }

  setTimeout(function () {
    loader.style.backgroundImage = "";
  }, 100);
}, 500);