function solution(k, m, score) {
    score.sort((a,b) => b-a);
    
    let totalProfit = 0;
    
    for(let i = m-1; i < score.length; i+= m) {
        totalProfit += score[i] * m;
    }
    
    return totalProfit;
}