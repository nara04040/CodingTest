function solution(s){
    let stackCount = 0
    let arrLeng = s.length
    
    for (let i = 0; i < arrLeng; i++) {
        s[i] === "(" ? stackCount += 1 : stackCount += -1;
        if(stackCount < 0) return false
    }
    return stackCount === 0 ? true : false
}