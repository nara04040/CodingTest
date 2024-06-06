let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "../백준문제/input.txt";
let input = fs.readFileSync(file).toString().split("\n");

//  1.  나무의 수 = N
//  2. 상근이가 필요한 나무길이(잘라라서 가져가야하는 나무길이) = M
//  3. 나무의 길이를 나타내는 배열
//  4. 절단기에 설정할 수 있는 높이의 최댓값을 구해야함

let N = input[0].split(" ")[0];
let M = input[0].split(" ")[1];
let treeArray = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...treeArray);

let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (x of treeArray) if (x > mid) sum += x - mid;
  if (sum < M) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
