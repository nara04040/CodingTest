let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [hour, min] = fs.readFileSync(file).toString().split(" ").map(Number);

if (min < 45) {
  hour -= 1;
  min += 15;
  if (hour < 0) hour = 23;
} else {
  min -= 45;
}
console.log(hour + " " + min);
