function solution(n, computers) {
    // 모든 컴퓨터의 방문 여부를 추적하기 위한 배열
    const visited = Array(n).fill(false);
    let networkCount = 0;
    
    // DFS 탐색 함수
    function dfs(node) {
        visited[node] = true; // 현재 노드를 방문으로 표시
        for (let i = 0; i < n; i++) {
            // 노드가 연결되어 있고 방문되지 않았을 경우 DFS 호출
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    // 각 컴퓨터를 순회하며 네트워크 탐색
    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 방문되지 않은 컴퓨터가 있으면
            dfs(i); // DFS로 탐색 시작
            networkCount++; // 네트워크 수 증가
        }
    }
    
    return networkCount; // 전체 네트워크 개수 반환
}
