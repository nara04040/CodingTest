const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const A = input[0];
const P = input[1];

function findCycleStart(A, P) {
  const seen = new Map();
  let current = A;
  let position = 0;
  
  while (!seen.has(current)) {
    seen.set(current, position);
    
    let next = 0;
    const digits = current.toString().split('');
    
    for (const digit of digits) {
      next += Math.pow(parseInt(digit), P);
    }
    
    current = next;
    position++;
  }
  
  return seen.get(current);
}

console.log(findCycleStart(A, P));