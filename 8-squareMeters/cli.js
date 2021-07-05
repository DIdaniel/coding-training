/*
[ input ]
What is the length of the room in feet? 
=> answer A
What is the width of the room in feet?
=> answer B

[ calculate ]
area feet : C => A * B
square meters : D => C * 0.09290304

[ output ]
You entered dimensions of 15 feet by 20 feet.
The area is C square feet and D.toFixed(3)

정수, 소수 OK => only Number
문자 NOP
특수문자 NOP
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Input
const lengthWidth = () => {
  rl.question("What is the length of the room in feet? ", (num) => {
    rl.question("What is the width of the room in feet? ", (num2) => {
      if (Number(num) && Number(num2)) {
        calculate(num, num2);
      } else {
        console.log("숫자를 입력해주세요");
        process.exit(0);
      }
    });
  });
};

lengthWidth();

// Cal
function calculate(num, num2) {
  const area = num * num2;
  const square = (area * 0.09290304).toFixed(3);
  return result(num, num2, area, square);
}

// Output
function result(num, num2, area, square) {
  console.log(`You entered dimensions of ${num} feet by ${num2} feet.
  The area is ${area} square feet and ${square} `);

  process.exit(1);
}
