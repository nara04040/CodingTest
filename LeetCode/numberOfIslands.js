// Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands*.

// An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// m = grid.length
//  n = grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' ro '1'

// Example

// ex1
// const grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];

// ex2
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const rows = grid.length; // 4
const cols = grid[0].length; // 5

function solution(grid) {
  let island = 0;

  if (!grid || grid.length === 0) return 0; // 이상한 grid값이 들어온다면 0처리

  for (let row = 0; row < rows; row++) {
    //가로 반복문
    for (let col = 0; col < cols; col++) {
      // 세로 반복문
      if (grid[row][col] === "1") {
        // 돌다가 1(땅)을 만나면
        island++; // (섬 카운팅 증가)
        dfs(row, col); // 끝날때까지 계속 재귀함수로 돌리기
      }
    }
  }

  return island;
}

function dfs(row, col) {
  if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === "0") return;

  grid[row][col] = "0";

  // 4방면 전부다 탐색
  dfs(row - 1, col);
  dfs(row + 1, col);
  dfs(row, col - 1);
  dfs(row, col + 1);
}

console.log(solution(grid));
