function solution(money) {
    let maxCoffe = 0;
    
    maxCoffe = parseInt(money / 5500)
    
    return [maxCoffe, money % 5500]
    
}