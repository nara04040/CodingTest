function solution(numbers) {
    const result = numbers
        .map(String)  
        .sort((a, b) => (b + a) - (a + b)) 
        .join('');  
    
    // 0일때를 구분
    return result[0] === '0' ? '0' : result;
}