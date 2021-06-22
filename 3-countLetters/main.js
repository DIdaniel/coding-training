"use strict";

const body = document.querySelector("body");
const inputName = document.querySelectorAll(".name");
const number = document.querySelector(".number");

let globalPromptValue;

function enterfunc(e) {
  if (e.keyCode === 13) {
    globalPromptValue = prompt("Enter the String!");
  }

  for (let i = 0; i < inputName.length; i++) {
    inputName[i].innerText = globalPromptValue;
    number.innerText = globalPromptValue.length;
    // console.log(globalPromptValue);
  }
}

body.addEventListener("keydown", enterfunc);
