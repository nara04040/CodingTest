// 선택정렬 방법
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) minIndex = j;
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
// }

// let fs = require("fs");
// const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(file).toString().trim().split("\n");
// let arr = input[0].split(" ").map(Number);
// let answer = "";

// selectionSort(arr);

// for (let i = 0; i < arr.length; i++) {
//   answer += arr[i] + " ";
// }
// console.log(answer);

// sort함수 사용
let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split(" ").map(Number);
let answer = "";

input.sort((a, b) => a - b);
for (let i = 0; i < input.length; i++) {
  answer += input[i] + " ";
}

console.log(answer);
