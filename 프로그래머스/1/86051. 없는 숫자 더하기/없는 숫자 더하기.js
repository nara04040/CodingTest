function solution(numbers) {
    const numbersTotal = 45;
    let numbersSum = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        numbersSum += numbers[i]
    }
    
    // console.log(numbersTotal - numbersSum)
    return numbersTotal - numbersSum
}