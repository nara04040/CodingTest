// 어찌되었건 전체 학생(n) 중 빌렸건 못빌렸건 없는 놈만 빼서 return하는 방법

function solution(n, lost, reserve) {
//  reserve에서 도난도 당한 놈
    let realLost = lost.filter(student => !reserve.includes(student));
    console.log(realLost)
//   reserve에서 빌려줄수있는 놈
    let realReserve = reserve.filter(student => !lost.includes(student));
    // console.log(realReserve)

    realLost.sort((a,b) => a-b);
    realReserve.sort((a,b) => a-b);
    
    for (let i = 0; i < realReserve.length; i++) {
       const reserveStudent = realReserve[i];
        const front = reserveStudent - 1;
        const back = reserveStudent + 1;
       
        // console.log(reserveStudent) 
        // console.log(front)
// 앞놈 빌려줌
        if(realLost.includes(front)) {
            realLost = realLost.filter(student => student !== front)
            console.log('변경후', realLost)
        } else if (realLost.includes(back)) {
            realLost = realLost.filter(student => student !== back)
        }
    }
    
    return n - realLost.length
}