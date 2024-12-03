const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./CodingTest/silver/input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const N = input[0];
const stack = [];

for(let i = 1; i <= N; i++) {
  const num = input[i];

  num === 0 ? stack.pop() : stack.push(num);
}

const sum = stack.reduce((acc, cur)=> acc + cur, 0);

console.log(sum)