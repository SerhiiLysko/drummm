const btn = document.querySelectorAll(".drum");
const btnW = document.querySelector(".w");
const btnA = document.querySelector(".a");
const btnS = document.querySelector(".s");
const btnD = document.querySelector(".d");
const btnJ = document.querySelector(".j");
const btnK = document.querySelector(".k");
const btnL = document.querySelector(".l");
const btnNum = btn.length;
let audio;

for (let i = 0; i < btnNum; i++) {
  btn[i].addEventListener("click", function () {
    console.log(this);
    this.style.color = "blue";
    /*
    if (this === btnW) {
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    }
    if (this === btnA) {
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    }
    if (this === btnS) {
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    }
    if (this === btnD) {
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    }
    if (this === btnJ) {
      audio = new Audio("sounds/snare.mp3");
      audio.play();
    }
    if (this === btnK) {
      audio = new Audio("sounds/crash.mp3");
      audio.play();
    }
    if (this === btnL) {
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    }
    */
    let btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

document.addEventListener("keypress", function (e) {
  e.target;
  console.log(e.key);
  makeSound(e.key);
  buttonAnimation(e.key);
});

const makeSound = function (x) {
  switch (x) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
  }
};

const buttonAnimation = function (curKey) {
  const activeBtn = document.querySelector("." + curKey);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, "1000");
};

//let audio = new Audio("sounds/tom-1.mp3");
