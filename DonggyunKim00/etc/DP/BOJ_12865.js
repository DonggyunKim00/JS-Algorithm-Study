const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const things = input.map((item) => item.split(' ').map(Number));

const store = Array(K + 1).fill(0);
things.forEach(([W, V]) => {
  for (let i = K; i >= W; i--) {
    store[i] = Math.max(store[i], store[i - W] + V);
  }
});

console.log(Math.max(...store));
