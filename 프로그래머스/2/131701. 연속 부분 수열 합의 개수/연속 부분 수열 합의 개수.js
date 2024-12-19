function solution(elements) {
    const n = elements.length
    // 중복제거
    const sums = new Set();
    const doubleElements = [...elements, ...elements];
 
    // 1 ~ n 까지 연속되는 부분 수열로 처리
    for(let len = 1; len <= n; len++) {
        for(let start = 0; start < n; start++) {
            const sum = doubleElements.slice(start, start + len).reduce((acc, cur) => acc + cur, 0);
            
            sums.add(sum)
        }
    }
    return sums.size
}