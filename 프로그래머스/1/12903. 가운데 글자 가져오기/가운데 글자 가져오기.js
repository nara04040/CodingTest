function solution(s) {
    let arrLeng = s.length;
    if(arrLeng % 2 === 0) {
        return s.split('').slice(arrLeng/2 - 1, arrLeng/2 + 1).join('')
    } else {
        return s.split('').slice(Math.floor(arrLeng/2) , Math.floor(arrLeng / 2) + 1).join('')
    }

}
