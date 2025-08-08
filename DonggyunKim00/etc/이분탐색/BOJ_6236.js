const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath, 'utf8').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

const isPossible = (K) => {
  let money = K;
  let cnt = 1;

  for (let i = 0; i < N; i++) {
    if (money < arr[i]) {
      money = K;
      cnt += 1;
    }
    money -= arr[i];
  }

  return cnt <= M;
};

// 이분탐색 로직
let left = Math.max(...arr); // 최소 => 7번 인출 해야함
let right = arr.reduce((prev, acc) => prev + acc, 0); // 최대 => 1번만 인출해도 됨
let result;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (isPossible(mid)) {
    result = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(result);
