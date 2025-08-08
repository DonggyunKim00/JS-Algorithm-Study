const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const N = Number(input.shift());
const graph = input.map((item) => item.split(' ').map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(0));

const [dx, dy] = [
  [1, 0],
  [0, 1],
];

const queue = [[0, 0]];
visited[0][0] = 1;

let answer = 'Hing';

while (queue.length > 0) {
  const [px, py] = queue.shift();

  for (let dir = 0; dir < 2; dir++) {
    const mx = px + dx[dir] * graph[px][py];
    const my = py + dy[dir] * graph[px][py];

    if (mx < 0 || my < 0 || mx >= N || my >= N) continue;
    if (visited[mx][my] === 1) continue;

    if (mx === N - 1 && my === N - 1) answer = 'HaruHaru';

    queue.push([mx, my]);
    visited[mx][my] = 1;
  }
}

console.log(answer);
