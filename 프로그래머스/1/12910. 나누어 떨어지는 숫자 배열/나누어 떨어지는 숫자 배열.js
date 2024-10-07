function solution(arr, divisor) {
    // arr[] % divisor === 0 -> sort((a,b) => a-b) / else -1
    var answer = [];
    for (let x of arr) {
        if (x % divisor === 0) {
            answer.push(x)
        } 
    }
    if (answer.length === 0) answer.push(-1)
    answer.sort((a,b) => a-b)
    
    return answer;
}