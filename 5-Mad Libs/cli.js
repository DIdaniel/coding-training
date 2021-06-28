// input : prompt
// function
// output : lastAnswer

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Enter a noun : `, (noun) => {
  const innerNoun = noun;

  rl.question(`Enter a verb : `, (verb) => {
    const innerVerb = verb;

    rl.question(`Enter a adjective : `, (adjective) => {
      const innerAdjective = adjective;

      rl.question(`Enter a adverb : `, (adverb) => {
        const innerAdverb = adverb;
        console.log(
          `Do you ${innerVerb} your ${innerAdjective} ${innerNoun} ${innerAdverb}? That's hilarious!`
        );
        rl.close();
      });
    });
  });
});

// console.log() 없이 noun만 저장하려면?
