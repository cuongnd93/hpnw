"use strict";

const slide = document.querySelector(".carousel-control-next-icon");
const slide1 = document.querySelector(".carousel-control-prev-icon");
const imgduyen = document.querySelector(".item1");
const hiddentext = document.querySelector(".container-mobile");
const duyen1 = document.querySelector(".duyen");
const bong = document.querySelector(".bong");
const hpny = document.querySelector(".hpny");
let duyen = 0;

slide.addEventListener("click", function () {
  if (duyen === 0) duyen++;

  if (duyen === 1) {
    imgduyen.src = `duyen${duyen}.jpg`;
    hiddentext.classList.add("hiddentext");
    duyen1.classList.remove("hidden-duyen");
    duyen++;
  } else if (duyen === 2) {
    imgduyen.src = `duyen${duyen}.jpg`;
    duyen1.classList.add("hidden-duyen");
    bong.classList.remove("hidden-bong");
    duyen++;
  } else if (duyen === 3) {
    imgduyen.src = `duyen${duyen}.jpg`;
    bong.classList.add("hidden-bong");
    hpny.classList.remove("hidden-hpny");
  }
});

slide1.addEventListener("click", function () {
  if (duyen >= 2) duyen = 2;

  if (duyen === 2) {
    imgduyen.src = `duyen${duyen}.jpg`;
    hpny.classList.add("hidden-hpny");
    bong.classList.remove("hidden-bong");
    duyen--;
  } else if (duyen === 1) {
    imgduyen.src = `duyen${duyen}.jpg`;
    bong.classList.add("hidden-bong");
    duyen1.classList.remove("hidden-duyen");
    duyen--;
  } else if (duyen === 0) {
    imgduyen.src = `duyen${duyen}.jpg`;
    duyen1.classList.add("hidden-duyen");
    hiddentext.classList.remove("hiddentext");
  }
});
