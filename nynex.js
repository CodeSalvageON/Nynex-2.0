let lib = document.getElementById("lib");
let cdtv = document.getElementById("cdtv");
let life = document.getElementById("life");

let eject_lib = document.getElementById("eject-lib");
let eject_cdtv = document.getElementById("eject-cdtv");
let eject_life = document.getElementById("eject-life");
let eject_rain = document.getElementById("eject-rain");

let loader = document.getElementById("loader");
let field = document.getElementById("field");
let lib_list = document.getElementById("lib-list");
let cdtv_stuff = document.getElementById("cdtv-stuff");
let real = document.getElementById("real");
let rainfall = document.getElementById("rainfall");
let window1 = document.getElementById("window");
let skyline = document.getElementById("skyline");
let playground = document.getElementById("playground");

let tape_sound = document.getElementById("tape-sound");
let forward_sound = document.getElementById("forward-sound");

let next = 1;

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

$(".next-option").click(function () {
  forward_sound.cloneNode(true).play();

  if (next === 1) {
    next += 1;

    rainfall.style.display = "none";
    window1.style.display = "block";
  }

  else if (next === 2) {
    next += 1;

    window1.style.display = "none";
    skyline.style.display = "block";
  }

  else if (next === 3) {
    next += 1;

    skyline.style.display = "none";
    playground.style.display = "block";
  }

  else {
    next = 1;

    playground.style.display = "none";
    rainfall.style.display = "block";
  }
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

cdtv.onclick = function () {
  loader.style.display = "none";

  cdtv_stuff.style.display = "block";
}

eject_cdtv.onclick = function () {
  cdtv_stuff.style.display = "none";
  
  loader.style.display = "block";
}

life.onclick = function () {
  loader.style.display = "none";

  real.style.display = "block";
}

eject_life.onclick = function () {
  real.style.display = "none";

  loader.style.display = "block";
}

look.onclick = function () {
  rainfall.style.display = "block";

  loader.style.display = "none";
}

$(".eject-rain").click(function () {
  rainfall.style.display = "none";
  window1.style.display = "none";
  skyline.style.display = "none";
  playground.style.display = "none";

  loader.style.display = "block";
});

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