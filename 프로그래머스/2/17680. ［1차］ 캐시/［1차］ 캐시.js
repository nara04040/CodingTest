function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;
    
    const cache = [];
    let time = 0;
    
    cities.forEach(city => {
        city = city.toLowerCase();
        
        const index = cache.indexOf(city);
        
        if (index !== -1) {
            cache.splice(index, 1);
            cache.push(city);
            time += 1;
        } else {
            if (cache.length >= cacheSize) {
                cache.shift(); 
            }
            cache.push(city);
            time += 5;
        }
    });
    
    return time;
}