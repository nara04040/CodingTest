const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n');

// 명령의 수 N
const N = parseInt(input[0]);
// 스택 배열 선언
const stack = [];
// 결과를 저장할 배열
const result = [];

// 각 명령어 처리
for(let i = 1; i <= N; i++) {
    const command = input[i].split(' ');
    
    switch(command[0]) {
        case '1': // 1 X: 정수 X를 스택에 넣기
            stack.push(parseInt(command[1]));
            break;
            
        case '2': // 2: 스택에서 맨 위 정수를 빼고 출력
            result.push(stack.length > 0 ? stack.pop() : -1);
            break;
            
        case '3': // 3: 스택에 들어있는 정수 개수 출력
            result.push(stack.length);
            break;
            
        case '4': // 4: 스택이 비어있으면 1, 아니면 0 출력
            result.push(stack.length === 0 ? 1 : 0);
            break;
            
        case '5': // 5: 스택 맨 위의 정수 출력
            result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
            break;
    }
}

// 결과 출력
console.log(result.join('\n'));