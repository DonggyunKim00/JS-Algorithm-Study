const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const T = Number(input.shift());
const N = Number(input.shift());
const arrA = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const arrB = input.shift().split(' ').map(Number);

const map = new Map();

for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = i; j < N; j++) {
    sum += arrA[j];
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
}

let answer = 0;
for (let i = 0; i < M; i++) {
  let sum = 0;
  for (let j = i; j < M; j++) {
    sum += arrB[j];
    if (map.has(T - sum)) {
      answer += map.get(T - sum);
    }
  }
}

console.log(answer);
