let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let n = Number(input[0]);
let summary = 0;
for (let i = 1; i <= n; i++) {
  let data = input[i];
  if (check(data)) summary += 1;
}
console.log(summary);

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] != data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}
