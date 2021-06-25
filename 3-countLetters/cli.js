const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const smthString = (string) => {
  console.log(`${string} has ${string.length} characters `);
};

rl.question("what is the input string? ", smthString);
