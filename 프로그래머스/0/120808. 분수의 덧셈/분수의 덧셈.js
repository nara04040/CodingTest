function solution(numer1, denom1, numer2, denom2) {
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    
    // 분모의 최대공약수를 구하자
    function GCD(a,b) {
        if(a % b === 0) {
            return b
        } else {
            return GCD(b, a%b)
        }
    }
    const gcd = GCD(numer, denom);
    
    return [numer / gcd , denom / gcd]
}