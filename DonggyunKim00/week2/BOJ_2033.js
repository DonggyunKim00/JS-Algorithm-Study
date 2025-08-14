const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));

const [N, M] = input.shift().map(Number);
const ARR = input.shift().map(Number);

let start = 0;
let end = 0;
let cnt = 0;
let sum = 0;

while (true) {
  if (sum >= M) sum -= ARR[start++];
  else if (end === N) break;
  else sum += ARR[end++];

  if (sum === M) cnt++;
}

console.log(cnt);
