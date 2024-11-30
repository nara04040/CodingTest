function solution(n) {
let sum = 0;
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            sum += i;
            if(i !== n/i) {  // 중복 방지 (예: 25의 경우 5가 중복)
                sum += n/i;
            }
        }
    }
    return sum;
}