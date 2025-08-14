const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, ...VALUES] = input.map(Number);

const dp = Array(N + 1).fill(0);

dp[1] = VALUES[0];
dp[2] = VALUES[0] + VALUES[1];
dp[3] = Math.max(VALUES[0] + VALUES[2], VALUES[1] + VALUES[2]);

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + VALUES[i - 1],
    dp[i - 3] + VALUES[i - 2] + VALUES[i - 1]
  );
}

console.log(dp[N]);
