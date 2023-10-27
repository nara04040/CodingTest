// n : 발표한 논문.
// citations : 논문의 "인용 횟수"를 담은 배열
// 

function solution(citations) {
    let sortArr = citations.sort((a,b) => b-a);
    for(let i = 0; i < citations.length; i++) {
        if(i >= citations[i]) {
            return i
        }
    }
    return citations.length
}