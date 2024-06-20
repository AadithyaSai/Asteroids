import { startGame } from "./game";

import soundOn from "./assets/image/soundOnWhite.png";
import soundOff from "./assets/image/soundOffWhite.png";

const startDiv = document.getElementById("start")!;
const infoDiv = document.getElementById("information")!;
const firstTimeDiv = document.getElementById("first-time-overlay")!;
const gameDiv = document.getElementById("game")!;
const endDiv = document.getElementById("end")!;

const startButtons = document.querySelectorAll(".start-button")!;

startButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    startDiv.classList.add("hide");
    endDiv.classList.add("hide");
    document.documentElement.requestFullscreen();
    if (
      localStorage.getItem("first-time") !== null ||
      "ontouchstart" in document.documentElement
    ) {
      firstTimeDiv.classList.add("hide");
      gameDiv.classList.remove("hide");
      startGame();
    } else {
      localStorage.setItem("first-time", "no");
      firstTimeDiv.classList.remove("hide");
    }
  });
});

window.addEventListener("gameover", () => {
  gameDiv.classList.add("hide");
  endDiv.classList.remove("hide");
  document.exitFullscreen();
  let score = document.getElementById("score")!.textContent!;
  let isHighest = false;
  if (
    localStorage.getItem("highscore") === null ||
    score > localStorage.getItem("highscore")!
  ) {
    localStorage.setItem("highscore", score);
    isHighest = true;
  }
  if (isHighest) {
    document.getElementById("hi-score")!.textContent! = "New Hi-Score!";
  } else {
    document.getElementById("hi-score")!.textContent! =
      "Hi-Score: " + localStorage.getItem("highscore")!;
  }
  document.getElementById("end-score")!.textContent! = "Score: " + score;
});

// show info page
document.querySelectorAll(".info")!.forEach((btn) => {
  btn.addEventListener("click", () => {
    startDiv.classList.add("hide");
    endDiv.classList.add("hide");
    infoDiv.classList.remove("hide");
  });
});

document.getElementById("back")!.addEventListener("click", () => {
  infoDiv.classList.add("hide");
  endDiv.classList.add("hide");
  startDiv.classList.remove("hide");
});

// Sound stuff
if (localStorage.getItem("sound") === null) {
  localStorage.setItem("sound", "on");
}

const soundButtons = document.querySelectorAll<HTMLButtonElement>(".sound")!;
soundButtons.forEach((btn) => {
  if (localStorage.getItem("sound") === "on") {
    btn.innerHTML = `<img src="${soundOn}" />`;
  } else {
    btn.innerHTML = `<img src="${soundOff}" />`;
  }
  btn.addEventListener("click", () => {
    if (localStorage.getItem("sound") === "on") {
      localStorage.setItem("sound", "off");
      btn.innerHTML = `<img src="${soundOff}" />`;
    } else {
      localStorage.setItem("sound", "on");
      btn.innerHTML = `<img src="${soundOn}" />`;
    }
  });
});

// touch events
const leftButton = document.getElementById("left")!;
const rightButton = document.getElementById("right")!;
const forwardButton = document.getElementById("forward")!;
const fireButton = document.getElementById("fire")!;

[leftButton, rightButton, forwardButton, fireButton].forEach((btn) => {
  btn.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
});

leftButton.addEventListener("touchstart", () => {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" }));
});
leftButton.addEventListener("touchend", () => {
  window.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowLeft" }));
});

rightButton.addEventListener("touchstart", () => {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" }));
});
rightButton.addEventListener("touchend", () => {
  window.dispatchEvent(new KeyboardEvent("keyup", { key: "ArrowRight" }));
});

forwardButton.addEventListener("touchstart", () => {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "w" }));
});
forwardButton.addEventListener("touchend", () => {
  window.dispatchEvent(new KeyboardEvent("keyup", { key: "w" }));
});

fireButton.addEventListener("touchstart", () => {
  window.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
});
fireButton.addEventListener("touchend", () => {
  window.dispatchEvent(new KeyboardEvent("keyup", { key: " " }));
});
