"use strict";

const slide = document.querySelector(".carousel-control-next-icon");
const slide1 = document.querySelector(".carousel-control-prev-icon");
const imgduyen = document.querySelector(".item1");

let duyen = 0;

slide.addEventListener("click", function () {
  if (duyen === 0) duyen++;

  if (duyen === 1) {
    imgduyen.src = `duyen${duyen}.jpg`;

    duyen++;
  } else if (duyen === 2) {
    imgduyen.src = `duyen${duyen}.jpg`;

    duyen++;
  } else if (duyen === 3) {
    imgduyen.src = `duyen${duyen}.jpg`;
  }
});

slide1.addEventListener("click", function () {
  if (duyen >= 2) duyen = 2;

  if (duyen === 2) {
    imgduyen.src = `duyen${duyen}.jpg`;
    duyen--;
  } else if (duyen === 1) {
    imgduyen.src = `duyen${duyen}.jpg`;
    duyen--;
  } else if (duyen === 0) {
    imgduyen.src = `duyen${duyen}.jpg`;
  }
});
