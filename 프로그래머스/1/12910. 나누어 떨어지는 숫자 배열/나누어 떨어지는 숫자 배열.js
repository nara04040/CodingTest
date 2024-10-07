// divisor로 나누어 떨어지는 값 반환 , 만약 나누어 떨어지는 게 없다면 -1
// 오름차순으로 정렬

function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i] % 5)
        if(arr[i] % divisor === 0) {
            answer.push(arr[i])
        }
    }
    if(answer.length === 0) {
        answer.push(-1)
    }
    
    // console.log(answer.sort((a,b) => a - b))
    return answer.sort((a,b) => a - b);
}