function solution(str1, str2) {
    const makeSet = (str) => {
        const result = [];
        for(let i = 0; i < str.length - 1; i++) {
            const pair = str.slice(i, i+2).toLowerCase();
            if(pair.match(/^[a-z]{2}$/)) {
                result.push(pair)
            }
        }
      return result  
    };
    
    const set1 = makeSet(str1);
    const set2 = makeSet(str2);
    
    if(set1.length === 0 && set2.length === 0) return 65536;
    
    const intersection = [];
    const union = [];
    const set1Copy = [...set1];
    const set2Copy = [...set2];
    
    for(let i = 0; i < set1.length; i++) {
        const idx = set2Copy.indexOf(set1[i]);
        if(idx !== -1) {
            intersection.push(set1[i]);
            set2Copy.splice(idx, 1);
        }
    }
        
    const unionSize = set1.length + set2.length - intersection.length;
    
    return Math.floor((intersection.length / unionSize) *65536)
}