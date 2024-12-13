var a = document.getElementById("img-1");
var b = document.getElementById("img-2");
var c = document.getElementById("img-3");
var d = document.getElementById("mexico_song");
var e = document.getElementById("hawaii_song");
var f = document.getElementById("italian_song");
var g = document.getElementById("foodMark");
var h = document.getElementById("sceneryMark");
var i = (document.getElementById("MusicMark").src = "images/MusicImg.png");
var j = document.getElementById("itlyVid");
var countMex = 0;
var countUSA = 0;
var countItly = 0;

function firstTextAppearImgs() {
  countMex += 1;
  console.log(countMex);

  if (countMex == 1) {
    console.log("secondColumn.");

    a.src = "images/MexicoTag.png";
    g.src = "images/Mexicanfood.png";
    h.src = "images/MexScenaery.png";
    i.src = "images/MusicImg.png";
    b.src = "images/tropicalGift.png";
    c.src = "images/tropicalGift.png";
    d.play();
    e.pause();
    f.pause();
    b.classList.add("translucent");
    b.classList.remove("clickable2");
    c.classList.add("translucent");
    c.classList.remove("clickable2");

    document.getElementById("clickable2").src = "images/Mexicanfood.png";
    document.getElementById("clickable2").src = "images/mexicanfood3.png";
  } else if (countMex == 2) {
    console.log("thridColoum.");
    document.getElementById("secondColumn").classList.add("hide");
    document.getElementById("thirdColumn").classList.remove("hide");
    d.pause();
  } else if (countMex == 3) {
    document.getElementById("secondColumn").classList.remove("hide");
    document.getElementById("thirdColumn").classList.add("hide");
    d.play();
    a.classList.remove("clickable2");
  }
}
function secondTextAppear() {
  countUSA += 1;
  console.log(countUSA);

  if (countUSA == 1) {
    console.log("secondColumn.");
    b.src = "images/HawaiiTag.png";
    g.src = "images/HawaiinFood.png";
    h.src = "images/HawaiiScenery.png";
    i.src = "images/MusicImg.png";
    a.src = "images/tropicalGift.png";
    c.src = "images/tropicalGift.png";
    e.play();
    d.pause();
    f.pause();
    a.classList.add("translucent");
    a.classList.remove("clickable2");
    c.classList.add("translucent");
    c.classList.remove("clickable2");
    g.classList.add("clickable2");
    h.classList.add("clickable2");
    document.getElementById("thirdColumn").classList.add("hide");
    document.getElementById("secondColumn").classList.remove("hide");
  } else if (countUSA == 2) {
    console.log("thirdColoum");
    document.getElementById("secondColumn").classList.add("hide");
    document.getElementById("thirdColumn").classList.add("hide");
    document.getElementById("fourthColumn").classList.remove("hide");
    e.pause();
  } else if (countUSA == 3) {
    console.log("thirdColoum");
    document.getElementById("secondColumn").classList.remove("hide");
    document.getElementById("thirdColumn").classList.add("hide");
    document.getElementById("fourthColumn").classList.add("hide");
    e.play();
    b.classList.remove("clickable2");
  }
}
function thridTextAppear() {
  countItly += 1;
  console.log(countItly);

  if (countItly == 1) {
    c.src = "images/ItalyTag.png";
    g.src = "images/ItalyFood.png";
    h.src = "images/ItalyScenery.png";
    i.src = "images/MusicImg.png";
    b.src = "images/tropicalGift.png";
    a.src = "images/tropicalGift.png";
    f.play();
    d.pause();
    e.pause();
    a.classList.add("translucent");
    a.classList.remove("clickable2");
    b.classList.add("translucent");
    b.classList.remove("clickable2");

    document.getElementById("fourthColumn").classList.add("hide");
    document.getElementById("secondColumn").classList.remove("hide");
  } else if (countItly == 2) {
    f.pause();
    document.getElementById("secondColumn").classList.add("hide");
    document.getElementById("thirdColumn").classList.add("hide");
    document.getElementById("fourthColumn").classList.add("hide");
    document.getElementById("fifthColumn").classList.remove("hide");
  } else if (countItly == 3) {
    f.play();
    document.getElementById("secondColumn").classList.remove("hide");
    document.getElementById("thirdColumn").classList.add("hide");
    document.getElementById("fourthColumn").classList.add("hide");
    document.getElementById("fifthColumn").classList.add("hide");
    j.pause();
    document.getElementById("img-3").classList.remove("clickable2");
  }
}
