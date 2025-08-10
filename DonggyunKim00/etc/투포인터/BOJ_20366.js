const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const N = Number(input[0]);
const SNOW = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const pairs = [];
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    pairs.push({ sum: SNOW[i] + SNOW[j], i, j });
  }
}

pairs.sort((a, b) => a.sum - b.sum);

console.log(pairs);

let ans = Infinity;
for (let k = 0; k < pairs.length - 1; k++) {
  const p1 = pairs[k];
  const p2 = pairs[k + 1];

  // 두 쌍이 서로 겹치지 않을 때만 검사
  if (p1.i !== p2.i && p1.i !== p2.j && p1.j !== p2.i && p1.j !== p2.j) {
    const diff = Math.abs(p1.sum - p2.sum);
    if (diff < ans) ans = diff;
  }
}

console.log(ans);
