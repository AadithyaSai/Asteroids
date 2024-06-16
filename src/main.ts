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
