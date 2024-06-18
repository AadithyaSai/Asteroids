import { startGame } from "./game";

const startDiv = document.getElementById("start")!;
const gameDiv = document.getElementById("game")!;
const endDiv = document.getElementById("end")!;

const startButtons = document.querySelectorAll(".start-button")!;

startButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    startDiv.classList.add("hide");
    endDiv.classList.add("hide");
    gameDiv.classList.remove("hide");
    startGame();
  });
});

window.addEventListener("gameover", () => {
  gameDiv.classList.add("hide");
  endDiv.classList.remove("hide");
  document.getElementById("end-score")!.textContent! =
    "Score: " + document.getElementById("score")!.textContent;
});

// touch events
const leftButton = document.getElementById("left")!;
const rightButton = document.getElementById("right")!;
const forwardButton = document.getElementById("forward")!;
const fireButton = document.getElementById("fire")!;

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
