const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = +input.shift();
const arr = input.map(Number);
let answer = [];
const stack = [];

let a = 1;
let b = 0;
while (b < N) {
  if (stack.length > 0 && stack[stack.length - 1] === arr[b]) {
    stack.pop();
    answer.push("-");

    b++;
  } else if (a <= N) {
    stack.push(a);
    answer.push("+");

    a++;
  } else {
    answer = ["NO"];
    break;
  }
}
console.log(answer.join("\n"));
