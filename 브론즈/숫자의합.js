let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [inputNumber, input] = fs.readFileSync(file).toString().trim().split("\n");
let answer = 0;

for (let i = 0; i < inputNumber; i++) {
  answer += +input[i];
}

console.log(answer);
