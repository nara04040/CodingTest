function solution(numbers) {
    const sortNumbers = numbers.sort((a,b)=> a - b)
    const maxIndex = sortNumbers.length - 1;
    
    return sortNumbers[maxIndex] * sortNumbers[maxIndex - 1]
}