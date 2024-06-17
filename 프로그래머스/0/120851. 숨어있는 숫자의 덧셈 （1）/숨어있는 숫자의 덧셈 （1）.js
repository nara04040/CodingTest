function solution(my_string) {
    let a = my_string.split('');
    const answer = 0;
    const filterArr = a.filter((word) => word < 10);
    
    return filterArr.reduce((acc, cur) => Number(acc) + Number(cur))
    
}