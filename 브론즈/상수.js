let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [inputA, inputB] = fs.readFileSync(file).toString().trim().split(" ");

inputA = inputA.split("").reverse().join("");
inputB = inputB.split("").reverse().join("");

if (inputA > inputB) return console.log(inputA);
else return console.log(inputB);
