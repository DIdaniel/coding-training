/*
get_input(question: str)

 fucntion age(num, num2){
    question(num) : prompt에 나타나는 질문 = 당신의 현재 나이는?
    question2(num2) : prompot에 나타나는 질문 = 퇴직하는 나이는?
    return question, question2
 }
  stdin = age에서 받은 결과를 stdin에!
  ..
/*

/* Hard-Coding

  [어떤 경우가 있을까?] => demo.py(test)
  string / 기호 / 소수점 / 음수 / null /
  currentAge > retireAge

[ 값이 필요한 질문 ]
currentAge = get_int_input('현재 나이는?)
retireAge = get_int_input('퇴직하는 나이는?)

[ 현재 년도 ]
currentYear = get_int_input(
  let year = now.getFullYear();
  console.log(year);
)

[ output ]
output = You have ${retireAge - currentAge}years left until you can retire.
It's ${currentYear}, so you can retire in ${currentYear + (retireAge - currentAge)}

*/

/*


// // [ input ]
// const currentAge = prompt("현재 나이는?");
// console.log(typeof currentAge);
// const retireAge = prompt("퇴직 나이는?");

// // [ get_this_year ]
// const currentYear = new Date().getFullYear;

// // [ calculate ]
// const leftAge = retireAge - currentAge;
// const leftYear = currentYear - leftAge;

// // [ output ]
// console.log(
//   `you have ${leftAge}years left until you can retire. It's ${currentYear}, so you can retire in ${leftYear}`
// );

// rl.question(`현재 나이는? `, (currentAge) => {
//   const current = parseInt(currentAge);

//   while(parseInt(current)) {

//   }
// });

*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`현재 나이는? `, (currentAge) => {
  rl.question(`퇴직 나이는? `, (retireAge) => {
    if (
      parseInt(currentAge) &&
      parseInt(retireAge) &&
      Number.isInteger === true
    ) {
      const now = new Date();
      const currentYear = now.getFullYear();

      console.log(`You have ${
        retireAge - currentAge
      } years left until you can retire.
      It's ${currentYear}, so you can retire in ${
        currentYear + (retireAge - currentAge)
      }`);
      process.exit(0);
    } else if (parseInt(currentAge) || parseInt(retireAge)) {
      console.log("숫자로 입력해주세요");
      process.exit(0);
    } else if (currentAge > retireAge) {
      console.log("이미 퇴직 하셨네요!");
      process.exit(0);
    } else if (!parseInt(currentAge) && !parseInt(retireAge)) {
      console.log("숫자로 입력해주세요");
      process.exit(0);
    } else if (!isInteger) {
      console.log("정수로 입력해주세요!");
      process.exit(0);
    } else {
      console.error("Err...");
    }
  });
});
