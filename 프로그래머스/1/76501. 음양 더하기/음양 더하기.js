function solution(absolutes, signs) {
    return absolutes.reduce((acc, value, index) =>
                            acc +  (signs[index] ? value : -value) , 0
                           )
}