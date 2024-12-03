function solution(number, limit, power) {
    function getDivisorCount(num){
        let count = 0;
        
        for(let i = 0; i <= Math.sqrt(num); i++) {
            if(num % i === 0) {
                count += (i*i === num) ? 1 : 2;
            }
        }
        return count 
    }
    
    return Array.from({length: number}, (_,i) => i+1)
        .map(num => {
        const divisorCount = getDivisorCount(num);
        return divisorCount > limit ? power : divisorCount
    }).reduce((acc, cur) => acc + cur, 0);
}