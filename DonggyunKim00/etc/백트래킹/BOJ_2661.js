const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const N = Number(input);

const isGood = (str) => {
  const length = str.length;

  for (let size = 1; size <= length / 2; size++) {
    // size 변수는 비교할 문자가 몇개인지 나타냄
    const left = str.slice(length - size * 2, length - size);
    const right = str.slice(length - size);

    if (left === right) return false;
  }

  return true;
};

let found = false;

const solution = (str) => {
  if (found) return;

  if (str.length === N) {
    console.log(str);
    found = true;
    return;
  }

  for (let num of ['1', '2', '3']) {
    const next = str + num;
    if (isGood(next)) {
      solution(next);
    }
  }
};

solution('');
