const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const N = +input.shift();

const stack = [];
const answer = [];
let head = 0;
for (let i = 0; i < N; i++) {
  const A = input[i].split(" ")[0];
  if (A === "push") {
    stack.push(input[i].split(" ")[1]);
  } else if (A === "pop") {
    if (stack.length - head === 0) {
      answer.push(-1);
    } else {
      answer.push(stack[head]);
      head++;
    }
  } else if (A === "size") {
    answer.push(stack.length - head);
  } else if (A === "empty")
    if (stack.length - head === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  else if (A === "front") {
    if (stack.length - head === 0) {
      answer.push(-1);
    } else {
      answer.push(stack[head]);
    }
  } else {
    if (stack.length - head === 0) {
      answer.push(-1);
    } else if (A === "back") {
      answer.push(stack[stack.length - 1]);
    }
  }
}
console.log(answer.join("\n"));
