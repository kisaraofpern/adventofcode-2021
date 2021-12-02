const fs = require('fs');
const text = fs.readFileSync('input.txt').toString('utf-8');
const input = text.split('\n').map((x) => Number(x));

let increasesA = 0;
let increasesB = 0;

// Part A
for (let i = 1; i < input.length; i++) {
  const previous = input[i-1];
  const current = input[i];
  
  if (current > previous) {
    increasesA += 1;
  }
}

// Part B
for (let i = 3; i < input.length; i++) {
  const numbers = [];

  for (let j = 3; j > -1; j--) {
    numbers.push(input[i-j]);
  }

  const previous = numbers[0] + numbers[1] + numbers[2];
  const current = numbers[1] + numbers[2] + numbers[3];
    
  if (current > previous) {
    increasesB += 1;
  }
}

console.log(increasesB);