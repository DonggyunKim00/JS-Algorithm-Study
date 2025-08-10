const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const N = Number(input.shift());
const WINES = input.map(Number);

const dp = Array.from({ length: N }, () => Array(3).fill(0));

dp[0][0] = 0; // 첫번째에서 안마심
dp[0][1] = WINES[0]; // 첫번째에서 한잔째 마심
dp[0][2] = 0; // 첫번째에서 두잔째 마심 (경우 없음)

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = dp[i - 1][0] + WINES[i];
  dp[i][2] = dp[i - 1][1] + WINES[i];
}

console.log(Math.max(...dp[N - 1]));
