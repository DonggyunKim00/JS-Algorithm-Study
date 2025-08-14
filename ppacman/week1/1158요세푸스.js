const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf8").trim().split(" ");

const A = +input[0];
const B = +input[1];

const arr = Array.from({ length: A }, (_, index) => index + 1);
const result = [];
let index = 0;

while (arr.length > 0) {
  index = (index + B - 1) % arr.length;
  const A = arr.splice(index, 1);
  result.push(A);
}
console.log("<" + result.join(", ") + ">");
