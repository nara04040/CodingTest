function solution(t, p) {
    let count = 0;
    const pLength = p.length;
    const pNum = parseInt(p, 10);
    
    for (let i = 0; i <= t.length - pLength; i++) {
        const subStr = t.slice(i, i + pLength); 
        const subNum = parseInt(subStr, 10); 
        if (subNum <= pNum) {
            count++;
        }
    }
    
    return count;
}
