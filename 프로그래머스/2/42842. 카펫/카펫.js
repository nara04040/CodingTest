// 노란색이 하나라도 있어야하기에 갈색의 최소 개수는 가로 3개 세로 3개가 존재해야한다.
// 카펫의 가로길이는 세로길이와 같거나 길다.

function solution(brown, yellow) {
    var answer = [];
    let carpetSize = brown + yellow
    
//     최소개수 : 3
    for(let i = 3; i < carpetSize; i++) {
        let width = carpetSize / i;
        let height = i;
        
        if(width < height) continue;
        
        if((width - 2) * (height - 2) === yellow) {
            answer.push(width);
            answer.push(height)
        }
    }
    
    return answer;
}