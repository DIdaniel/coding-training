/*
## input : firstNum => first input(type: string)
## input : secondNum => second input(type: string)

==========

둘 다 Number => pass
하나만 Number => "숫자를 입력해주세요"
음수 => "음수는 안돼요!"

==========

string to Number

## calculate
firstNum + secondNum = output
firstNum - secondNum = output
firstNum * secondNum = output
firstNum / secondNum = output

## output(type: string)  
## output(type: string)

string to Number

*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(" What is the first number? ", (firstNum) => {
  let firstInput = Number(firstNum);

  rl.question(" what is the second number? ", (secondNum) => {
    let secondInput = Number(secondNum);

    calculate(firstInput, secondInput);

    function calculate(firstInput, secondInput) {
      if (firstInput > 0 && secondInput > 0) {
        console.log(firstInput + secondInput);
        console.log(firstInput - secondInput);
        console.log(firstInput * secondInput);
        console.log(firstInput / secondInput);

        process.exit(1);
      } else if (isNaN(firstInput) || isNaN(secondInput)) {
        console.log("숫자를 입력해주세요");
      } else if (firstInput < 0 || secondInput < 0) {
        console.log("음수는 안 돼요!!");
      } else {
        console.error();
      }
    }
    process.exit(1);
  });
});
