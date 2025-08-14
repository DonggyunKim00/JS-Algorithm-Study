const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const prefixSum = Array(N + 1).fill(0);
for (let i = 1; i < N + 1; i++) {
  prefixSum[i] = prefixSum[i - 1] + A[i - 1];
}

const map = new Map();
map.set(0, 1);

let count = 0;
for (let j = 1; j < N + 1; j++) {
  const needed = prefixSum[j] - K;

  if (map.has(needed)) {
    count += map.get(needed);
  }

  map.set(prefixSum[j], (map.get(prefixSum[j]) || 0) + 1);
}

console.log(count);
