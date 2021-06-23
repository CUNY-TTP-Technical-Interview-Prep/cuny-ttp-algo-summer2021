// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

/*
Understanding the problem:
  1. Given some array, we need to find the median
  2. To get the median, the values in the array must first be sorted in ascending order
  3. We need to implement the actual methods for the class

Constraints:
  1. The values in the array can be positive or negative
  2. The length of the array will, at minimum, be one before calling find_median()

Edge Cases:
  - Little to none. We will always be returning some value, 
    as there will be at least one value in the array when finding the median.

Understanding heaps:
  - Let's say we were given an array: [1, 2, 3, 4, 5, 6]
    We would split the array in half: [1, 2, 3][4, 5, 6]
  - Essentially, we can put the smaller half into a max heap, the the bigger half into a min heap.
    That way, we can get the middle values in constant time. 

    (3) <---        (4) <---
    / \             / \
  (1) (2)         (5) (6)

Break the problem into small sub-problems:
  1. Create a class Heap with the methods:
      - constructor
      - add method
      - peek method
      - poll method
      - bubbleUp method
      - bubbleDown method
  2. After creating the Heap class, implement the insert_num method
  3. Finally, implement the find_median method  

-------------------------------------------------------

Median's addNum method (pseudo-code)
-----
If no values in maxHeap OR num passed into addNum is less than topValue of MaxHeap:
    Add this value to the maxHeap
Else
    Add it to the minHeap
    
If maxHeap is growing faster than minHeap
    Pull top values with poll and add to opposing heap
If OPPOSITE
    OPPOSITE
    
-------------------------------------------------------
    
Median's findMedian method (pseudo-code)
-----
If maxHeap has more values than minHeap:
    median is here in maxHeap
Else if OPPOSITE:
    median is here in minHeap
Else:
    even number so we need to do math in order to get median  
    
-------------------------------------------------------
*/

class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap(Heap.maxComparator);
    this.minHeap = new Heap(Heap.minComparator);
  }

  insert_num(num) {
    // TODO: Write your code here
    if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
      this.maxHeap.add(num);
    } else {
      this.minHeap.add(num);
    }

    if (this.maxHeap.size - this.minHeap.size > 1) {
      this.minHeap.add(this.maxHeap.poll());
    } else if (this.minHeap.size - this.maxHeap.size > 1) {
      this.maxHeap.add(this.minHeap.poll());
    }
  }

  find_median(self) {
    // TODO: Write your code here
    if (this.maxHeap.size > this.minHeap.size) {
      return this.maxHeap.peek();
    } else if (this.minHeap.size > this.maxHeap.size) {
      return this.minHeap.peek();
    } else {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    }
  }
}

class Heap {
  constructor(comparator) {
    this.size = 0;
    this.values = [];
    this.comparator = comparator || Heap.minComparator;
  }

  add(val) {
    this.values.push(val);
    this.size++;
    this.bubbleUp();
  }

  peek() {
    return this.values[0] || null;
  }

  poll() {
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;

    if (this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ];

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

Heap.minComparator = (a, b) => {
  return a - b;
};
Heap.maxComparator = (a, b) => {
  return b - a;
};

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
