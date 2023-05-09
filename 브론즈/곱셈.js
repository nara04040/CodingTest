let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(file).toString().split("\n");

x1 = b[0];
x2 = b[1];
x3 = b[2];

console.log(a * x3);
console.log(a * x2);
console.log(a * x1);
console.log(a * b);
