const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const dp = new Map();

const w = (a, b, c) => {
  let key = `${a} ${b} ${c}`;

  if (dp.has(key)) return dp.get(key);

  let result;

  if (a <= 0 || b <= 0 || c <= 0) result = 1;
  else if (a > 20 || b > 20 || c > 20) result = w(20, 20, 20);
  else if (a < b && b < c)
    result = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  else
    result =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);

  dp.set(key, result);

  return result;
};

input.forEach(([a, b, c], idx) => {
  if (idx === input.length - 1) return;

  const result = w(a, b, c);
  console.log(`w(${a}, ${b}, ${c}) = ${result}`);
});
