function solution(n) {
//     이진수로 변환한 1의 갯수와 그 다음 숫자의 이진수로 변환한 1의 갯수가 같을 때! 반환하도록.
    let splitOne = n.toString(2).split('1').length;
    
    while(true) {
        n++;
        if(n.toString(2).split('1').length === splitOne) return n
    }
}