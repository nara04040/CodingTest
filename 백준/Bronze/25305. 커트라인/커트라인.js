let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../백준문제/input.txt";
let input = fs.readFileSync(file).toString().split("\n");

let N = input[0].split(" ")[0];
let k = input[0].split(" ")[1];
let arr = input[1].split(" ").map(Number);

function insertSort(arr) {
  for (let i = 0; i < N; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }

  return console.log(arr[k - 1]);
}

insertSort(arr);
