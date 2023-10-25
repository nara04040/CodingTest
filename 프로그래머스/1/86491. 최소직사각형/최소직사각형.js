function solution(sizes) {
    let arr = [0,0]
    for(let i = 0; i < sizes.length; i++) {
        let [b,s] = sizes[i].sort((a,b) => b-a)
        if(b > arr[0]) {
            arr[0] = b
        }
        if(s > arr[1]) {
            arr[1] = s
        }
    }
    return arr[0] * arr[1]
}