let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
testCaseLength = Number(input[0]);
answer = "";
for (let i = 1; i <= testCaseLength; i++) {
  let element = input[i].split(" ");
  let a = +element[0];
  let b = +element[1];
  answer += a + b + "\n";
}

console.log(answer);
