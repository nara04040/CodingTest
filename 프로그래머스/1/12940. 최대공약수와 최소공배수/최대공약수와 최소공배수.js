function solution(n, m) {
    let minN = Math.min(n,m);
    let maxN = Math.max(n,m);
    
    let gcd = (min, max) => {
        return min % max === 0 ? max : gcd(max, min % max);
    }
    
    let lcm = (min, max) => {
        return min * max / gcd(min, max)
    }
    
    return [gcd(minN, maxN), lcm(minN, maxN)]
}