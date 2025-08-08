const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let left = 0; // 다 가져감
let right = Math.max(...trees); // 안가져감 -> 0만큼 가져감
let height;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  const result = trees.reduce(
    (acc, cur) => acc + (cur > mid ? cur - mid : 0),
    0
  );

  if (M <= result) {
    height = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(height);
