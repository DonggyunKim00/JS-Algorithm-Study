const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [N, INT] = input;

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let graph = Array.from({ length: N }, () => Array(N).fill(0));
let cnt = N ** 2;
let pos = [0, 0];
let dir = 0;

let findPos;
for (let i = 0; i < N ** 2; i++) {
  graph[pos[0]][pos[1]] = cnt;

  if (cnt === INT) {
    findPos = [pos[0] + 1, pos[1] + 1];
  }

  const dx = pos[0] + direction[dir][0];
  const dy = pos[1] + direction[dir][1];

  cnt -= 1;

  if (dx >= N || dy >= N || dx < 0 || dy < 0 || graph[dx][dy]) {
    dir = (dir + 1) % 4;
  }

  pos[0] += direction[dir][0];
  pos[1] += direction[dir][1];
}

console.log(graph.map((item) => item.join(' ')).join('\n'));
console.log(findPos.join(' '));
