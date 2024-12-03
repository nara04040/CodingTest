function solution(arr){
    //filter
    // return arr.filter((value, index) => value !== arr[index + 1]);
    
    // stack
    const stack = [];
    for(const num of arr) {
        if(stack[stack.length - 1] !== num) {
            stack.push(num);
        }
    }
    
    return stack
}