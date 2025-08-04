const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' '));

input.shift();

const answer = [];
const queue = [];
let head = 0;
let tail = 0;

input.forEach(([command, value]) => {
  if (command === 'push') {
    queue[tail] = value;
    tail++;
  }

  if (command === 'pop') {
    if (head === tail) {
      answer.push(-1);
    } else {
      answer.push(queue[head]);
      head++;
    }
  }

  if (command === 'size') {
    answer.push(tail - head);
  }

  if (command === 'empty') {
    answer.push(head === tail ? 1 : 0);
  }

  if (command === 'front') {
    answer.push(head === tail ? -1 : queue[head]);
  }

  if (command === 'back') {
    answer.push(head === tail ? -1 : queue[tail - 1]);
  }
});

console.log(answer.join('\n'));
