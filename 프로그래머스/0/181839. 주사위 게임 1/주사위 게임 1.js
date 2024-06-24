function solution(a, b) {
    let diceState = '';
    let answer = 0;
    
    if(a % 2 !== 0 && b % 2 !== 0) {
        diceState = 'allOdd'
    } else if (a % 2 === 0 && b % 2 === 0 ) {
        diceState = 'allEven'
    } else {
        diceState = 'halfOdd'
    }
    
    
    if(diceState === 'allOdd') {
       answer += a**2 + b**2
    } else if(diceState === 'allEven') {
        answer += Math.abs(a - b);
    } else if(diceState === 'halfOdd') {
        answer += 2 * (a + b)
    }
    
    return answer
}