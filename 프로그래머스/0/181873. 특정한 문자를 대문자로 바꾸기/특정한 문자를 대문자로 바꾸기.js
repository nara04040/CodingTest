// alp에 해당하는 index값을 구함
// 문자열에서 해당하는 문자열을 toUpperCase로 바꿈
function solution(my_string, alp) {
    return my_string.replaceAll(alp, alp.toUpperCase())
}