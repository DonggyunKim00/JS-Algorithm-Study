const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const TEMP = input[1].split(' ').map(Number);

// 초기 값 설정
let sum = 0;
for (let i = 0; i < K; i++) {
  sum += TEMP[i];
}

let max = sum;
for (let i = K; i < N; i++) {
  sum = sum - TEMP[i - K] + TEMP[i];
  max = Math.max(sum, max);
}

console.log(max);
