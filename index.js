let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [inputLength, input] = fs.readFileSync(file).toString().trim().split("\n");

const inputArr = input.split(" ").map(Number);
const min = Math.min(...inputArr);
const max = Math.max(...inputArr);

console.log(min + " " + max);
