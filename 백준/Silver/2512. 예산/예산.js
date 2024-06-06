let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../백준문제/input.txt";
let input = fs.readFileSync(file).toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let totalBudget = Number(input[2]);

function binarySearch(arr, target) {
  let start = 0;
  let end = Math.max(...arr);
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        sum += mid;
      } else {
        sum += arr[i];
      }
    }

    if (sum > target) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  return result;
}

console.log(binarySearch(arr, totalBudget));
