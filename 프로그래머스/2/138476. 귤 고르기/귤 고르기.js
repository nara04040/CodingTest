function solution(k, tangerine) {
    const hash = new Map();

//     귤 빈도수 체크
    for(let i = 0; i < tangerine.length; i++) {
        const target = hash.get(tangerine[i]);
        hash.set(tangerine[i], target ? target + 1 : 1);
    }
    
    const value = Array.from(hash.values()).sort((a,b) => b-a);
    let count = 0;

    for(let i = 0; i < value.length; i++) {
        if(k <= 0) break;
        k -= value[i];
        count++
    }
    return count
    
}