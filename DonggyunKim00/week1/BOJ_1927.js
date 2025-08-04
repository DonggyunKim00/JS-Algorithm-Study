const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath, 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

input.shift();
const answer = [];

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (!this.heap.length) {
      return 0;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();

    return value;
  }

  bubbleUp() {
    let currIdx = this.heap.length - 1;
    let parentIdx = Math.floor((currIdx - 1) / 2);

    while (this.heap[parentIdx] && this.heap[currIdx] < this.heap[parentIdx]) {
      this.swap(currIdx, parentIdx);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
  }

  bubbleDown() {
    let idx = 0;
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;

    while (
      (this.heap[leftIdx] && this.heap[idx] > this.heap[leftIdx]) ||
      (this.heap[rightIdx] && this.heap[idx] > this.heap[rightIdx])
    ) {
      let smallerIdx = leftIdx;
      if (this.heap[leftIdx] > this.heap[rightIdx]) smallerIdx = rightIdx;

      this.swap(idx, smallerIdx);

      idx = smallerIdx;
      leftIdx = smallerIdx * 2 + 1;
      rightIdx = smallerIdx * 2 + 2;
    }
  }
}

const minheap = new MinHeap();

input.forEach((num) => {
  if (num === 0) {
    answer.push(minheap.pop());
  } else {
    minheap.push(num);
  }
});

console.log(answer.join('\n'));
