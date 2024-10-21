function solution(numbers, target) {
    return countWays(numbers, target, 0, 0);
}

function countWays(numbers, target, index, currentSum) {
    if (index === numbers.length) {
        return currentSum === target ? 1 : 0;
    }
    
    // 현재 숫자를 더하는 경우
    const add = countWays(numbers, target, index + 1, currentSum + numbers[index]);
    // 현재 숫자를 빼는 경우
    const subtract = countWays(numbers, target, index + 1, currentSum - numbers[index]);
    
    return add + subtract;
}