let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [time, cookTime] = fs.readFileSync(file).toString().split("\n");
let [hour, min] = time.split(" ").map(Number);
let totalMin = hour * 60 + min + Number(cookTime);

totalMin %= 1440;

let resultHour = parseInt(totalMin / 60);
let resultMin = totalMin % 60;

console.log(resultHour + " " + resultMin);
