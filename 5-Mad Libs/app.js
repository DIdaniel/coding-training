const body = document.querySelector("body");
const noun = document.querySelector(".noun");
const verb = document.querySelector(".verb");
const adjective = document.querySelector(".adj");
const adverb = document.querySelector(".adv");

const nounAnswer = document.querySelector(".nounAnswer");
const verbAnswer = document.querySelector(".verbAnswer");
const adjectiveAnswer = document.querySelector(".adjAnswer");
const adverbAnswer = document.querySelector(".advAnswer");
const lastAnswer = document.querySelector(".lastAnswer");

let globalNoun;
let globalVerb;
let globalAdjective;
let globalAdverb;

const enterPrompt = (e) => {
  if (e.keyCode === 13) {
    globalNoun = prompt("Enter a noun : ");
    globalVerb = prompt("Enter a verb : ");
    globalAdjective = prompt("Enter a Adjective : ");
    globalAdverb = prompt("Enter a Adverb : ");
  }

  nounAnswer.textContent = globalNoun;
  verbAnswer.textContent = globalVerb;
  adjectiveAnswer.textContent = globalAdjective;
  adverbAnswer.textContent = globalAdverb;

  lastAnswer.textContent = `Do you ${globalVerb} your ${globalAdjective} ${globalNoun} ${globalAdverb}? That's hilarious!`;
};

body.addEventListener("keydown", enterPrompt);
