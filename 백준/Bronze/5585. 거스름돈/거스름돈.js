let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let money = 1000 - input[0];

const coins = [500, 100, 50, 10, 5, 1];

let count = 0;

for(i of coins) {
  if(money === 0) {
      break; 
  } else {
      count += parseInt(money / i);
      money %= i;   
  }
}

console.log(count);