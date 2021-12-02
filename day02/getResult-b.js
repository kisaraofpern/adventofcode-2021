const fs = require('fs');
const text = fs.readFileSync('input.txt').toString('utf-8');
const input = text.split('\n');

let horizontal = 0;
let aim = 0;
let depth = 0;

/*
  - down X increases your aim by X units.
  - up X decreases your aim by X units.
  - forward X does two things:
    - It increases your horizontal position by X units.
    - It increases your depth by your aim multiplied by X.
*/

for (let i = 0; i < input.length; i++) {
  const string = input[i];
  const units = Number(string.split(' ')[1]);
  const direction = string.split(' ')[0];

  switch (direction) {
    case 'forward':
      horizontal += units;
      depth += aim * units;
      break;
    case 'up':
      aim -= units;
      break;
    case 'down':
      aim += units;
      break;
  }
}

console.log('Horizontal: ', horizontal);
console.log('Depth: ', depth);
console.log(horizontal * depth);