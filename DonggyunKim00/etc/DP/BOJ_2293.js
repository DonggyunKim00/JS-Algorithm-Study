const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const COINS = input.map(Number);

const dp = Array(K + 1).fill(0);
dp[0] = 1;

COINS.forEach((coin) => {
  for (let i = coin; i <= K; i++) {
    dp[i] += dp[i - coin];
  }
});

console.log(dp[K]);

// coin이 들어왔을때 해당 index부터 시작함으로써 index원을 만들때 필요한 값을 계산된 값을 누적함
// ex)
// 초기 상태 => [1,0,0,0,0,0]
// 1원이 마지막에 들어옴 => [1,1,1,1,1,1]
// 2원이 마지막에 들어옴 => [1,1,dp[2]+dp[0], ... ]
