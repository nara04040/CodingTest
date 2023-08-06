let fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number); // 초기 위치(N)와 동생의 위치(K)
// 걸을때와 순간이동을 할때가 존재

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    // queue에 삽입
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function findFastestTime(N, K) {
  const visited = new Array(100001).fill(false); // 0 ~ 100000까지 방문여부 저장 배열
  const queue = new Queue();
  queue.enqueue([N, 0]); // [현재 위치, 시간] 형태로 Queue에 삽입 , 시간으로 최단 시간을 도출해냄
  visited[N] = true;

  while (!queue.isEmpty()) {
    // queue가 비어있지 않다면?
    const [currentPosition, currentTime] = queue.dequeue();

    if (currentPosition === K) {
      // 동생 위치에 도달했다면
      return currentTime; // 시간을 반환
    }

    // 걸을 때
    for (const nextPosition of [currentPosition - 1, currentPosition + 1]) {
      if (nextPosition >= 0 && nextPosition <= 100000 && !visited[nextPosition]) {
        // 다음 positin이 있거나, 최대값 밑이거나 방문하지 않았거나
        queue.enqueue([nextPosition, currentTime + 1]);
        visited[nextPosition] = true;
      }
    }

    // 순간이동 할 때
    const teleportPosition = currentPosition * 2;
    if (teleportPosition <= 100000 && !visited[teleportPosition]) {
      // 텔레포트한 곳이 최대값 이하거나 방문하지 않았으면
      queue.enqueue([teleportPosition, currentTime + 1]);
      visited[teleportPosition] = true;
    }
  }
  return -1;
}

console.log(findFastestTime(n, k));
