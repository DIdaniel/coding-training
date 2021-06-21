// [ Hard Coding ]
// const firstName = document.querySelector(".firstName");
// const secondName = document.querySelector(".secondName");

// const randomName = prompt("Write your name");

// firstName.textContent = randomName;
// secondName.textContent = randomName;

// [ Using for Loop ]
const myName = document.querySelectorAll(".name");

const randomName = prompt("Write your name");

for (let i = 0; i < myName.length; i++) {
  myName[i].innerText = randomName;
}
