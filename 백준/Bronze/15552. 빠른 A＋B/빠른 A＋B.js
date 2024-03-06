let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let testCase = Number(input[0]);
let answer = ''

for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(' ');
  let a = Number(data[0])
  let b = Number(data[1])
  answer += a + b + '\n'
}

console.log(answer)
