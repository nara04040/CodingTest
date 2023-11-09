// commands배열은 3개가 주어지고 i, j, k값이 있다.
// slice(i, j)하고 sort한 배열의 k번째 값을 찾아낸다.
// slice하거나 k값을 구할 때 직접적인 값이 아닌 index개념의 값으로 계산
function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++) {
        let sliceArr = []
        sliceArr = array.slice(commands[i][0] - 1, commands[i][1])
        answer.push(sliceArr.sort((a,b) => a-b)[commands[i][2] - 1])
    }
    return answer
}