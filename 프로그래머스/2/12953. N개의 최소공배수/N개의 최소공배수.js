function solution(arr) {
    // GCD(최대 공약수)
    const gcd = (a,b) => {
        while(b>0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
     return a;
    };

    const lcm = (a,b) => (a * b) / gcd(a,b);
    
    return arr.reduce((acc,cur) => lcm(acc, cur));
}