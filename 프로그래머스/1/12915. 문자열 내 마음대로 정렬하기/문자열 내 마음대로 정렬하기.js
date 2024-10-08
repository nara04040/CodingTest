// n번째 문자열을 오름차순
// n번째 같으면 사전순으로 정렬
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// return 1이면 첫 인자가 두 번째 인자보다 작으니 뒤에 위치
// return -1이면 첫 인자가 두 번째 인자보다 크니 앞에 위치해라

function solution(strings, n) {
    return strings.sort((a,b) => {
        // console.log(a[n],b[n]) => sun, bed비교 || bed, car비교
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        // if(a[n] == b[n]) return -1 예시는 맞는데 테스트에서 실패
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
}