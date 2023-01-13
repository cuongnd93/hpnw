"use strict";

const slide = document.querySelector(".carousel-control-next-icon");
const slide1 = document.querySelector(".carousel-control-prev-icon");
const imgduyen = document.querySelector(".item1");
const hiddentext = document.querySelector(".container-mobile");
const hiddentext1 = document.querySelector(".container");
const duyen1 = document.querySelector(".duyen");
const bong = document.querySelector(".bong");
const hpny = document.querySelector(".hpny");
const inputSubmit = document.querySelector(".input1");
const hiddenInput = document.querySelectorAll("#di");
const ten = document.querySelector(".text2");
const audiohidden = document.querySelector(".ad");
const carouselimg = document.querySelector(".carousel");

inputSubmit.addEventListener("click", function () {
  let input = document.querySelector(".input").value;
  if (input !== "") {
    console.log(input);
    ten.textContent = input;
    audiohidden.classList.remove("audi");
    audiohidden.classList.add("audi1");
    hiddentext1.classList.remove("hidden-content");
    carouselimg.classList.remove("hidden-content");
    for (let i = 0; i < hiddenInput.length; i++) {
      hiddenInput[i].classList.add("hidden-input");
    }
  }
});

let duyen = 0;

slide.addEventListener("click", function () {
  if (duyen < 3) {
    duyen++;
  }

  console.log(duyen);
  if (duyen == 0) {
    imgduyen.src = `duyen${duyen}.jpg`;
    hiddentext.classList.remove("hiddentext");
    hpny.classList.add("hidden-hpny");
  }
  if (duyen === 1) {
    imgduyen.src = `duyen${duyen}.jpg`;
    hiddentext.classList.add("hiddentext");
    duyen1.classList.remove("hidden-duyen");
  } else if (duyen === 2) {
    imgduyen.src = `duyen${duyen}.jpg`;
    duyen1.classList.add("hidden-duyen");
    bong.classList.remove("hidden-bong");
  } else if (duyen === 3) {
    imgduyen.src = `duyen${duyen}.jpg`;
    bong.classList.add("hidden-bong");
    hpny.classList.remove("hidden-hpny");
  }
});

slide1.addEventListener("click", function () {
  if (duyen > 0) {
    duyen--;
    console.log(duyen);
  }

  if (duyen === 2) {
    imgduyen.src = `duyen${duyen}.jpg`;
    hpny.classList.add("hidden-hpny");
    bong.classList.remove("hidden-bong");
  } else if (duyen === 1) {
    imgduyen.src = `duyen${duyen}.jpg`;
    bong.classList.add("hidden-bong");
    duyen1.classList.remove("hidden-duyen");
  } else if (duyen === 0) {
    imgduyen.src = `duyen${duyen}.jpg`;
    duyen1.classList.add("hidden-duyen");
    hiddentext.classList.remove("hiddentext");
  }
});
