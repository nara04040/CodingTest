function solution(s) {
    const sets = s.slice(2,-2).split('},{').map(set => set.split(',').map(Number)).sort((a,b) => a.length - b.length);
    const result = [];
    const used = new Set();
    
    for(const set of sets) {
        for(const num of set) {
            if(!used.has(num)) {
                result.push(num);
                used.add(num);
            }
        }
    }
    
    return result;
}