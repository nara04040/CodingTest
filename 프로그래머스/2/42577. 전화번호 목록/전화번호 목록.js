function solution(phone_book) {
    const hash = {};
    
    for(const number of phone_book) {
        hash[number] = true;
    }
    
    for (const number of phone_book) {
        for(let i = 1; i < number.length; i++) {
            const prefix = number.slice(0, i);
            if(hash[prefix]) return false
        }
    }
    
    return true;
}