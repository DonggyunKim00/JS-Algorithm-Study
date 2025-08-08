const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split("\n");

const answer = [];

const check = (line) => {
  const stack = [];

  for (const char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return "no";
      }
    } else if (char === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        return "no";
      }
    }
  }

  return stack.length === 0 ? "yes" : "no";
};

for (let i = 0; i < input.length; i++) {
  if (input[i] === ".") {
    break;
  }

  answer.push(check(input[i]));
}

console.log(answer.join("\n"));

//함수를 이용하면 바로 return 때려서 좀 더 숏코딩이 가능하더라
//그리고 문장 마지막의 . 을 굳이 검사할 필요가 없는듯,,?
//이게 맞나
