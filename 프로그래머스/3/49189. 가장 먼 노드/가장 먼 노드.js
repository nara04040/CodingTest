function solution(n, edge) {    
    // 1. 그래프를 인접 리스트로 표현
    const graph = {};
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    for (const [a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }

    // 2. BFS를 사용하여 최단 거리 계산
    const visited = Array(n + 1).fill(false);
    const distances = Array(n + 1).fill(0);
    const queue = [1];
    visited[1] = true;
    while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distances[neighbor] = distances[node] + 1;
                queue.push(neighbor);
            }
        }
    }

    // 3. 가장 먼 거리를 가진 노드들의 개수 세기
    const maxDistance = Math.max(...distances);
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (distances[i] === maxDistance) {
            count++;
        }
    }
    return count;
}
