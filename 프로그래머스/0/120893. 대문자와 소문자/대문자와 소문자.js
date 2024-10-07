function solution(my_string) {
    let result = []
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] === my_string[i].toUpperCase()) {
            result.push(my_string[i].toLowerCase());
        } else {
            result.push(my_string[i].toUpperCase())
        }
    }
    
    console.log(result.join(''))
    return result.join('');
}