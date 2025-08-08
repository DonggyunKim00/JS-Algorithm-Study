const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const answer = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") {
    break;
  }
  const stack = [];
  let isBalanced = true;

  for (let j = 0; j < input[i].length; j++) {
    const char = input[i][j];

    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        isBalanced = false;
        break;
      }
    } else if (char === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        isBalanced = false;
        break;
      }
    }

    if (char === ".") {
      break;
    }
  }

  if (isBalanced && stack.length === 0) {
    answer.push("yes");
  } else {
    answer.push("no");
  }
}

console.log(answer.join("\n"));
