let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../백준문제/input.txt";
let input = fs.readFileSync(file).toString().split("\n");

let n = Number(input[0]);
let arr = [];
let answer = "";

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] + "\n";
}
console.log(answer);
