const body = document.querySelector("body");
const name = document.querySelectorAll(".name");
const quotes = document.querySelector(".qoutes");

let globalEnter;
let globalQuotes;

let arrayName = [name];

function enterFunc(e) {
  if (e.keyCode === 13) {
    globalEnter = prompt("Enter name");
    globalQuotes = prompt("Enter quotes says");
  }

  quotes.innerText = `\"${globalQuotes}\"`;

  for (let i = 0; i < name.length; i++) {
    name[i].innerText = globalEnter;
  }
}

body.addEventListener("keydown", enterFunc);
