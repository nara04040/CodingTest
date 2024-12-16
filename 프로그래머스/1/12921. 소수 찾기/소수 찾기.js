function solution(n) {
    const sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;
    
    for(let i = 2; i * i <= n; i++) {
        if(sieve[i]) {
            // i가 소수인 경우, 그의 배수들을 모두 제거
            for(let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    return sieve.filter(Boolean).length;
    
}