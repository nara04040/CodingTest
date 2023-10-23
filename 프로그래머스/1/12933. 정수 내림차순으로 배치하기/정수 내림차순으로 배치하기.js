function solution(n) {
    let arrN = String(n).split('')
    let answer = arrN.sort((a,b) =>b-a).join('')
    return +answer
}