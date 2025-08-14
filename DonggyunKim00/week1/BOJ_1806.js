const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const [N, S] = input[0];
const nums = input[1];

let minLength = Infinity;
let start = 0;
let end = 0;
let sum = nums[0];

while (true) {
  if (sum >= S) {
    minLength = Math.min(minLength, end - start + 1);
    sum -= nums[start];
    start += 1;
  } else {
    end += 1;
    // 이때 start는 확인 안해도 되기때문에 break 해도됨
    if (end >= N) break;
    sum += nums[end];
  }
}

console.log(minLength === Infinity ? 0 : minLength);
