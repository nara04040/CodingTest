function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];
    
    for (let currentIdx = 0; currentIdx < prices.length; currentIdx++) {
        while (stack.length > 0 && prices[stack[stack.length-1]] > prices[currentIdx]) {
            const pastIdx = stack.pop();
            answer[pastIdx] = currentIdx - pastIdx;
        }
        stack.push(currentIdx);
    }
    
    while (stack.length > 0) {
        const pastIdx = stack.pop();
        answer[pastIdx] = prices.length - 1 - pastIdx;
    }
    
    return answer;
}