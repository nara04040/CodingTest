function solution(n) {
    let reverseBase3 = n.toString(3).split('').reverse().join('')
    return parseInt(reverseBase3,3)
}