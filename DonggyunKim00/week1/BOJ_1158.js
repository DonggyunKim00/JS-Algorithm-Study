const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = input;

let arr = Array.from({ length: N }, (_, k) => k + 1);
const answer = [];

let idx = -1;

while (answer.length < N) {
  let count = 0;

  while (count < K) {
    idx = (idx + 1) % N;
    if (arr[idx] !== 0) count++;
  }

  answer.push(arr[idx]);
  arr[idx] = 0;
}

console.log('<' + answer.join(', ') + '>');
