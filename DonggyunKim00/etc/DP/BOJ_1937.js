const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, 1, -1],
];

const N = Number(input.shift());
const graph = input.map((item) => item.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(N).fill(0));

const dfs = (x, y) => {
  if (dp[x][y]) return dp[x][y];

  dp[x][y] = 1;

  for (let dir = 0; dir < 4; dir++) {
    const mx = x + dx[dir];
    const my = y + dy[dir];

    if (mx < 0 || my < 0 || mx >= N || my >= N) continue;
    if (graph[mx][my] <= graph[x][y]) continue;

    dp[x][y] = Math.max(dp[x][y], dfs(mx, my) + 1);
  }

  return dp[x][y];
};

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    answer = Math.max(answer, dfs(i, j));
  }
}

console.log(answer);
