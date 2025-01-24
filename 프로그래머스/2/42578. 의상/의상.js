function solution(clothes) {
    const clothesMap = {};
      
    for (const [name, type] of clothes) {
        clothesMap[type] = (clothesMap[type] || 0) + 1;
    }
    
    const answer = Object.values(clothesMap)
        .reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    
    return answer
}