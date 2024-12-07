function solution(answers) {
    const patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    // 수포자별 정답 개수 계산
    const scores = patterns.map((pattern, index) => {
        return answers.reduce((score, answer, idx) => {
            return score + (answer === pattern[idx % pattern.length] ? 1 : 0)
        }, 0);
    });
    
    const maxScore = Math.max(...scores);
    
    // 최고 점수를 받은 수포자 찾기
    return scores.reduce((result, score, index) => {
        if(score === maxScore) {
            result.push(index + 1);
        }
        
        return result
    },[])
}