const fs = require('fs');
const text = fs.readFileSync('input.txt').toString('utf-8');
const input = text.split('\n');

const movement = {
  forward: [],
  up: [],
  down: []
}

for (let i = 0; i < input.length; i++) {
  const string = input[i];
  const units = string.split(' ')[1];
  const direction = string.split(' ')[0];

  movement[direction].push(Number(units));
}

const horizontal = movement.forward.reduce((acc, cur) => acc + cur, 0);

const upMovement = movement.up.reduce((acc, cur) => acc + cur, 0);
const downMovement = movement.down.reduce((acc, cur) => acc + cur, 0);
const depth = downMovement - upMovement;

console.log(horizontal * depth);