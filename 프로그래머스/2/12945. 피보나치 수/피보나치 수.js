// 피보나치수열을 정의하는 함수를 만들어라.
function solution(n) {
    let answer = 0
    let f0 = 0;
    let f1 = 1;
    for(let i = 1; i < n; i++) {        
        answer = (f0 + f1) % 1234567
        f0 = f1;
        f1 = answer
    }
    return answer
}


