// n명이서 끝말잇기
// 2명이서 hello(1), one(2), even(1), never(2), now(1) 라고 한다면
// 가장 먼저 탈락하는 사람의 번호는 1번고 차례는 3번째이므로 return은 [1,3]이여야한다.
function solution(n, words) {
    
    for(let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        if(words.indexOf(currentWord) !== i) {
            return [i % n + 1 , Math.floor(i/n) + 1];
        }
        const lastLetter = words[i - 1].slice(-1);
        const firstLetter = currentWord.charAt(0);
        if(lastLetter !== firstLetter){
            return [i % n + 1, Math.floor(i/n) + 1];
        }

    }     
    return [0,0];
}