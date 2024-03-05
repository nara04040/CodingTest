let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\n");

input = Number(input[0]);

if (90 <= input && input <= 100) console.log("A");
else if (80 <= input && input <= 89) console.log("B");
else if (70 <= input && input <= 79) console.log("C");
else if (60 <= input && input <= 69) console.log("D");
else console.log("F");
