// progresses : 작업의 진도율을 나타내는 배열
// speeds : 작업 개발 속도
// 

function solution(progresses, speeds) {
    var answer = [];
    const remainDays = progresses.map((progress, index) => Math.ceil( (100 - progress) / speeds[index]) ) // 작업에 남은 개발 일자를 계산
    console.log(remainDays)
    
    let maxDay = remainDays[0]; //  배열의 첫 번째 요소로 초기화하여, 첫 번째 기능이 배포될 때까지의 최대 날짜를 설정합니다.
    answer.push(0) // 첫 배포 횟수 초기화
    
    for(let i = 0; i < remainDays.length; i++) { // remainDays 배열을 순회
        if(remainDays[i] <= maxDay) { // 현재 작업의 남은 개발 일수가 최대값보다 작거나 같으면
            answer[answer.length - 1] += 1 // answer배열에서의 마지막 요소에 1을 추가 (stack알고리즘)
        } else {
            answer.push(1);
            maxDay = remainDays[i]; // 새로운 최대값 설정
        }
    }

    return answer;
}