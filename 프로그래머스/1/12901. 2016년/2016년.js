function solution(a, b) {
    // 1. 각 월의 일수 배열 (윤년)
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // 2. 요일 배열 (1월 1일이 금요일이므로 금요일부터 시작)
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    
    // 3. 1월 1일부터 입력받은 날짜까지의 총 일수 계산
    let totalDays = b - 1;  // 당일까지 포함
    for(let i = 0; i < a - 1; i++) {
        totalDays += monthDays[i];
    }
    
    // 4. 총 일수를 7로 나눈 나머지로 요일 결정
    return days[totalDays % 7];
}