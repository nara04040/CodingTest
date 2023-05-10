let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim();

let star = "";
for (let i = 0; i < input; i++) {
  star += "*";
  console.log(star);
}
