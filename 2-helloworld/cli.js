// 1. (input)prompt -> "What is your name"
//  => javascript cli 환경에서 prompt를 어떻게 사용 할 수 있을까?
// 2. SOMEONE func => answer
// 3. (output) => Hello, SOMEONE, Nice to meet yuou!

// readline module : 한 줄씩 Readable stream에서 데이터를 읽기 위한 인터페이스 제공해주는 모듈
const readline = require("readline");
const rl = readline.createInterface({
  // process? from window! // standard in
  input: process.stdin,
  // standard out
  output: process.stdout,
});

function someone(name) {
  console.log(`Hello, ${name}, Nice to meet you!`);
  process.exit(0);
}

rl.question("What is your name?", someone);
