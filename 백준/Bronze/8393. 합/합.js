let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();
let answer = 0;
for (let i = 1; i <= input; i++) {
  answer += i;
}
console.log(answer);
