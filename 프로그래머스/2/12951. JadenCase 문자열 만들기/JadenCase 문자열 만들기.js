function solution(s) {
    return s.toLowerCase().split("").map((char, i) => {
        if(i === 0 || s[i - 1] === " ") {
            return char.toUpperCase();
        }
        return char
    }).join('')
}