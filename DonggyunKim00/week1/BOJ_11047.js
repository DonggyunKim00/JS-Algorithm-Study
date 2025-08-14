const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const COINS = input.map(Number);

let amount = K;
let answer = 0;
for (let i = N - 1; i >= 0; i--) {
  if (COINS[i] > amount) continue;

  while (amount >= COINS[i]) {
    amount -= COINS[i];
    answer += 1;
  }
}

console.log(answer);
