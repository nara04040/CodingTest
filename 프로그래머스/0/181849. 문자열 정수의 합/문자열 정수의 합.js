function solution(num_str) {
    let arr = num_str.split('');
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            arr.pop()
        } else {
            answer += Number(arr[i]);
        }
    }
    return answer
}