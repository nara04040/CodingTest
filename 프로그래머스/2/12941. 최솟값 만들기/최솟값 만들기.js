function solution(A,B){
    let minA = A.sort((a,b) => a-b)
    let maxB = B.sort((a,b) => b-a)
    let answer = 0
    for(let i = 0; i < A.length; i++) {
        answer += minA[i] * maxB[i]
    }
    
    return answer
}