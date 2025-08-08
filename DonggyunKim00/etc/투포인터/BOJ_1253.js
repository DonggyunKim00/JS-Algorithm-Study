const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const NUMS = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const answer = [];

for (let i = 0; i < N; i++) {
  const target = NUMS[i];
  let start = 0;
  let end = N - 1;

  while (start < end) {
    if (start === i) {
      start++;
      continue;
    }
    if (end === i) {
      end--;
      continue;
    }

    const sum = NUMS[start] + NUMS[end];

    if (sum === target) {
      answer.push(target);
      break;
    } else if (target < sum) end--;
    else start++;
  }
}

console.log(answer.length);
