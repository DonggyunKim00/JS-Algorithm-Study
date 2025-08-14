const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const A = input[0].split(' ').map(Number);

const prefixSum = Array(N).fill(0);
prefixSum[0] = A[0];

for (let i = 1; i < N; i++) {
  prefixSum[i] = prefixSum[i - 1] + A[i];
}

const modCount = new Map();
modCount.set(0, 1);

let answer = 0;

for (let i = 0; i < N; i++) {
  const mod = prefixSum[i] % M;

  if (modCount.has(mod)) {
    answer += modCount.get(mod);
    modCount.set(mod, modCount.get(mod) + 1);
  } else {
    modCount.set(mod, 1);
  }
}

console.log(answer);
