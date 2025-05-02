const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(file).toString().trim().split("\n");

let [bF, bS, bT] = b.split("");

let res3 = a * bT;
let res4 = a * bS;
let res5 = a * bF;
let res6 = +res3 + +`${res4}0` + +`${res5}00`;

console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);
