let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(file).toString().trim().split("\n");
let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let count = 0;
for (let i = n - 1; i >= 0; i--) {
  count += parseInt(k / arr[i]);
  k %= arr[i];
}

console.log(count);
