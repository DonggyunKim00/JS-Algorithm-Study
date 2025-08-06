const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);

const graph = Array.from({ length: N }, () => Array(N).fill(0));

input
  .map((item) => item.split(' ').map(Number))
  .forEach(([node1, node2]) => {
    graph[node1 - 1][node2 - 1] = 1;
    graph[node2 - 1][node1 - 1] = 1;
  });

const bfs = (start) => {
  const visited = Array(N).fill(0);

  const answer = [start];
  const queue = [start - 1];
  visited[start - 1] = 1;

  while (queue.length > 0) {
    const node = queue.shift();

    for (let dir = 0; dir < N; dir++) {
      if (graph[node][dir] === 0 || visited[dir] === 1) continue;

      answer.push(dir + 1);
      queue.push(dir);
      visited[dir] = 1;
    }
  }

  console.log(answer.join(' '));
};

const dfs = (start) => {
  const visited = Array(N).fill(0);
  const answer = [];

  const rec = (start) => {
    answer.push(start + 1);
    visited[start] = 1;

    for (let i = 0; i < N; i++) {
      if (graph[start][i] === 0 || visited[i]) continue;
      rec(i);
    }
  };

  rec(start - 1);

  console.log(answer.join(' '));
};

dfs(V);
bfs(V);
