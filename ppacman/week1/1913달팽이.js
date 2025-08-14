const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n").map(Number);
const N = input.shift();
const W = input.shift();

const board = Array.from(Array(N), () => Array(N).fill(0));

const dx = [-1, 0, 1, 0]; // 위 아래
const dy = [0, 1, 0, -1]; // 오른쪽 왼쪽

let x = Math.floor(N / 2);
let y = Math.floor(N / 2);
let num = 1;
let dir = 0;
let step = 1;
let stepcount = 0;

let K_x = 0;
let K_y = 0;

board[x][y] = num;
if (num === W) {
  K_x = x + 1;
  K_y = y + 1;
}
num++;

while (num <= N * N) {
  for (let i = 0; i < step; i++) {
    x += dx[dir];
    y += dy[dir];

    if (x < 0 || x >= N || y < 0 || y >= N) break; // 이 자식 때문에 한참을 고민했다... 이 버러지 자식.

    board[x][y] = num;
    if (num === W) {
      K_x = x + 1;
      K_y = y + 1;
    }
    num++;
  }
  dir = (dir + 1) % 4;
  stepcount++;
  if (stepcount === 2) {
    step++;
    stepcount = 0;
  }
}
for (let i = 0; i < N; i++) {
  console.log(board[i].join(" "));
}
console.log(`${K_x} ${K_y}`);
