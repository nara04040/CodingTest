function solution(cacheSize, cities) {
 // 캐시 크기가 0이면 모두 미스
    if (cacheSize === 0) return cities.length * 5;
    
    // 캐시 배열 초기화
    const cache = [];
    let time = 0;
    
    // 모든 도시를 소문자로 변환하여 처리
    cities.forEach(city => {
        city = city.toLowerCase();
        
        // 캐시에 있는지 확인
        const index = cache.indexOf(city);
        
        if (index !== -1) {
            // 캐시 히트: 해당 도시를 가장 최근으로 이동
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        } else {
            // 캐시 미스: 새로운 도시 추가
            if (cache.length >= cacheSize) {
                cache.shift(); // 가장 오래된 도시 제거
            }
            cache.push(city);
            time += 5;
        }
    });
    
    return time;
}

