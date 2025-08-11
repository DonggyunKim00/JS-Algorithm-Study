const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const N = Number(input.shift());
const [roadLens, prices] = input.map((v) => v.split(' ').map(BigInt));

let answer = prices[0] * roadLens[0];

for (let i = 1; i < N - 1; i++) {
  if (prices[i] > prices[i - 1]) prices[i] = prices[i - 1];
  answer += prices[i] * roadLens[i];
}

console.log(answer.toString());
