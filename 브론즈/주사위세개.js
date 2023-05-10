let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split(" ");

const bigDiceNum = Math.max(...input);
const diceNum = input.find((ele) => ele === ele); // 같은 눈 수
let arr = [];
// 같은 눈 개수 판별
// 같은 눈 숫자만큼 상금 판별
for (let i = 0; i < input.length; i++) {
  if (input[i] === diceNum) {
    arr.push(input[i]);
  }
}

if (arr.length === 3) {
  console.log(10000 + diceNum * 1000);
} else if (arr.length === 2) {
  console.log(1000 + diceNum * 100);
} else {
  console.log(bigDiceNum * 100);
}
