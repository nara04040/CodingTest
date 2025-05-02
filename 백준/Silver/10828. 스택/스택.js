const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
  const n = parseInt(input[0]);
  const stack = [];
  const result = [];

  for (let i = 1; i <= n; i++) {
    const command = input[i].split(' ');
    
    switch (command[0]) {
      case 'push':
        stack.push(parseInt(command[1]));
        break;
      
      case 'pop':
        result.push(stack.length === 0 ? -1 : stack.pop());
        break;
      
      case 'size':
        result.push(stack.length);
        break;
      
      case 'empty':
        result.push(stack.length === 0 ? 1 : 0);
        break;
      
      case 'top':
        result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
        break;
    }
  }
  
  return result.join('\n');
};

console.log(solution(input));