const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const dp1 = Array(n).fill(0);
const dp2 = Array(n).fill(0);

dp1[0] = nums[0];
dp2[0] = nums[0];

let answer = nums[0];

for (let i = 1; i < n; i++) {
  dp1[i] = Math.max(dp1[i - 1] + nums[i], nums[i]);
  dp2[i] = Math.max(dp2[i - 1] + nums[i], dp1[i - 1]);
  answer = Math.max(answer, dp1[i], dp2[i]);
}

console.log(answer);
