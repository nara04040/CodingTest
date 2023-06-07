let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ").map(Number);
let answer = "";

input.sort((a, b) => a - b);
for (let i = 0; i < input.length; i++) {
  answer += input[i] + " ";
}

console.log(answer);
