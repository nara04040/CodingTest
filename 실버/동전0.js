let fs = require("fs");
/**
 * inputN : string , 준규가 가지고있는 동전 종류
 * inputK : string, 준규가 사용하여 가치의 합
 */
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
