const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim();

const G = Number(input);

const N = 100000;
let left = 1; // 기억하고 있는 몸무게
let right = 1; // 현재 몸무게

const answer = [];

while (left <= N && right <= N) {
  const sub = right * right - left * left;

  if (sub < G) {
    right += 1;
  }

  if (sub > G) {
    left += 1;
  }

  if (sub === G) {
    answer.push(right);
    right += 1;
  }

  if (left > right) break;
}

console.log(answer.length ? answer.join('\n') : -1);
