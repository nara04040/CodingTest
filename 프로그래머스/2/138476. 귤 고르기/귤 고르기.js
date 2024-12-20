// 6, [1, 3, 2, 5, 4, 5, 2, 3]
function solution(k, tangerine) {
    const sizeCount = new Map();
    
    tangerine.forEach(size => {
        sizeCount.set(size, (sizeCount.get(size) || 0) + 1);
    })
    
    const counts = [...sizeCount.values()].sort((a,b) => b-a);
    
    let sum = 0;
    let types = 0;
    
    for(const count of counts) {
        sum += count;
        types++;
        if(sum >= k ) break;
    }
    
    return types
    // console.log(counts)
}