//"aya", "ye", "woo", "ma" 가 한번씩만 나오는지 체크
// 반복 안됨
// 발음할 수 있는 단어 있다면 카운트

function solution(babbling) {
    const babblingList = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    babbling.forEach(word => {
        let voca = word;

        for(const a of babblingList) {
            voca = voca.replace(a, ' ')
        }
        // console.log(voca)
        // 없는거면 발음되는 거
        if(voca.trim() === '') {
            count++
        }
    })
    
    return count;
}