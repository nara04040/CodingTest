function solution(n, left, right) {
    const result = [];
    const test = [];
    for(let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        
        result.push(Math.max(row,col) + 1);
        test.push(row);
    }
    
    return result
}