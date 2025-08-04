const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.shift();

const arr = [];
const answer = [];
let stack_idx = 0;

input.forEach((num) => {
  if (arr[arr.length - 1] === num) {
    arr.pop();
    answer.push('-');
  } else {
    for (let i = stack_idx + 1; i <= num; i++) {
      arr.push(i);
      stack_idx += 1;
      answer.push('+');
    }

    if (arr[arr.length - 1] === num) {
      arr.pop();
      answer.push('-');
    }
  }
});

// 답안 도출
if (arr.length) {
  console.log('NO');
} else {
  console.log(answer.join('\n'));
}
