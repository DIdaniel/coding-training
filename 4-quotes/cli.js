// 1. input : a = Who said it?
// 1-1       : b = what doese he(she) said?
// 2. output : SOMEONE name
// 3. SOMEONE name says : blah blha~~

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Who said it? `, (name) => {
  console.log(`${name}~!!`);

  rl.question(`What dose he(she) said? `, (says) => {
    console.log(`${name} says, '\"${says}\"'`);
    process.exit(0);
  });
});
