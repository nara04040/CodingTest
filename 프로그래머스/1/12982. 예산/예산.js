function solution(d, budget) {
    let sortArr = d.sort((a,b) => a-b);
    let counter = 0;
    let sum = 0;
    
    for(let i = 0; i < sortArr.length; i++) {
        counter++
        sum += sortArr[i];
        if(sum > budget) {
            counter--
        }
    }
    return counter
}