function solution(n, t, m, p) {
    let answer = '';
    let sequence = '';
    let number = 0;
    
    // 1. 최대 필요한 길이의 n진법 수열 생성
    while(sequence.length < t * m) {
        sequence += number.toString(n).toUpperCase();
        number++;
    }
    
    for(let i = 0; i < t; i++) {
        const index = p - 1 + i * m;
        answer += sequence[index];
    }
    
    return answer
}