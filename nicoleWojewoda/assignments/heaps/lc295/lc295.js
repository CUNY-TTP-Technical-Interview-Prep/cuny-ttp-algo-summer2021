// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

/*
create a Heap class
  constructor
  add method
  peek method
  poll method
  bubbleUp method
  bubbleDown method
*/

class Heap {
  constructor(comparator) {
    this.size = 0;
    this.values = []; // container that holds array representation of the heap
    this.comparator = comparator || Heap.minComparator;
  }

  // new items first get added as leaves
  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }

  // returns the root node or null if it doesn't exist
  peek() {
    return this.values[0] || null;
  }

  poll() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;

    if (this.values.length) {
      this.values[0] = end; // reassign root node as last leaf node
      this.bubbleDown();
    }

    return max; // return the removed value
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ]; // swap values between parent and child
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let length = this.values.length;

    while (true) {
      let left = null;
      let right = null;
      let swap = null;
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;

      if (leftIndex < length) {
        left = this.values[leftIndex];

        if (this.comparator(left, this.values[index]) < 0) {
          swap = leftIndex;
        }
      }

      if (rightIndex < length) {
        right = this.values[rightIndex];

        if (this.comparator(right, this.values[index]) < 0) {
          swap = rightIndex;
        }

        if (
          (swap !== null && this.comparator(right, left) < 0) ||
          (swap === null && this.comparator(right, this.values[index]))
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) {
        break;
      }

      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
    }
  }
}

// Comparing to find if val a < or > val b
Heap.minComparator = (a, b) => {
  return a - b;
};
Heap.maxComparator = (a, b) => {
  return b - a;
};

class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap(Heap.maxComparator);
    this.minHeap = new Heap(Heap.minComparator);
  }

  // if there are no values in the maxHeap or if num is less than the root value of maxHeap,
  // add num to the maxHeap
  // otherwise, add it to the minHeap
  insert_num(num) {
    if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
      this.maxHeap.add(num);
    } else {
      this.minHeap.add(num);
    }

    // if maxHeap has more than one extra value, then it's not evenly balanced
    if (this.maxHeap.size - this.minHeap.size > 1) {
      this.minHeap.add(this.maxHeap.poll()); // retrieve and remove val from maxHeap, add it to minHeap
    } else if (this.minHeap.size - this.maxHeap.size > 1) {
      this.maxHeap.add(this.minHeap.poll());
    }
  }

  find_median(self) {
    if (this.maxHeap.size > this.minHeap.size) {
      return this.maxHeap.peek();
    } else if (this.minHeap.size > this.maxHeap.size) {
      return this.minHeap.peek();
    } else {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2; // otherwise, the median will be the average of the middle two numbers
    }
  }
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`); // 2
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`); // 3
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`); // 3.5
