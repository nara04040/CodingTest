function solution(food) {
     // 1. 각 선수가 먹을 수 있는 음식 개수 계산 (짝수로 만들기)
    const foodCount = food.map(count => Math.floor(count / 2));
    
    // 2. 한 선수가 먹을 음식 배치 문자열 생성
    let arrangement = '';
    for(let i = 1; i < foodCount.length; i++) {
        arrangement += String(i).repeat(foodCount[i]);
    }
    
    // 3. 최종 배치: 음식 + 물 + 역순 음식
    return arrangement + '0' + [...arrangement].reverse().join('');
}