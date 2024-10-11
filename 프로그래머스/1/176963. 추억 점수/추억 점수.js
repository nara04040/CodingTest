// name[0] : yearning[0] => 객체화
// 그럼 may가 들어오면 점수가 찍히게
// 사진마다 점수 계산

function solution(name, yearning, photo) {
    const scoreMap = {};
    for (let i =0; i < name.length; i++) {
        scoreMap[name[i]] = yearning[i]
    }
    
    // console.log(scoreMap)
    
    const result = photo.map(team => {
        return team.reduce((acc, people) => {
            return acc + (scoreMap[people] || 0)
        }, 0)
    })
    
    return result
}