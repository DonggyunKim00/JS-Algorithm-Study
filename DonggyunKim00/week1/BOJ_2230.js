const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const nums = input.map(Number).sort((a, b) => a - b);

// 1번 풀이: O(N^2)
// let answer = Infinity;

// for (let i = 0; i < N; i++) {
//   for (let j = i + 1; j < N; j++) {
//     if (Math.abs(nums[i] - nums[j]) < M) continue;

//     answer = Math.min(Math.abs(nums[i] - nums[j]), answer);
//   }
// }

// console.log(answer);

// 2번 풀이: 투포인터 O(N)

let start = 0;
let end = 0;
let min = Infinity;

while (start < N && end < N) {
  if (nums[end] - nums[start] < M) {
    end += 1;
  } else {
    min = Math.min(nums[end] - nums[start], min);
    if (min === M) break;
    else start += 1;
  }
}

console.log(min);
