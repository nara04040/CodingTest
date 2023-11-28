// one4seveneight이면 1478로 변화해야한다.
// 즉 숫자면 그대로 출력, string이면 문자열에 맞는 숫자로 변경하여 출력
// 1. 숫자인지 문자열인지 판별
// 2. 숫자라면 그대로 출력, 문자라면 단어에 속한 숫자로 변환

function solution(s) {
    let splitingChar = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let answer = s
    for(let i = 0; i < splitingChar.length; i++) {
        let a = answer.split(splitingChar[i])
        answer = a.join(i);
    }
    
    return Number(answer)
}