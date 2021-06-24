// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

//create a heap
//provide insertion into the heap
//find the median

class MedianOfAStream {

  insert_num = (num) => {

    if(!this.maxHeap) this.maxHeap = new Heap(Heap.maxComparator);
    if(!this.minHeap) this.minHeap = new Heap(Heap.minComparator);

    if(this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
      this.maxHeap.add(num);
    }else {
      this.minHeap.add(num);
    }

    if(this.maxHeap.size - this.minHeap.size > 1) {
      this.minHeap.add(this.maxHeap.poll());
    }else if(this.minHeap.size - this.maxHeap.size > 1) {
      this.maxHeap.add(this.minHeap.poll());
    }
  };

  find_median = () => {

    if(this.minHeap.size < this.maxHeap.size) {
      return this.maxHeap.peek();
    }else if(this.maxHeap.size < this.minHeap.size) {
      return this.minHeap.peek();
    }else {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
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

  peek() { return this.values[0] || null; }

  poll() { 
    const max = this.values[0];
    const end = this.values.pop();
    this.size--;

    if(this.values.length) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while(this.comparator(this.values[index], this.values[parent]) < 0) {
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];

      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown() {
    let index = 0;
    let length = this.values.length;

    while(true) {
      let left = null;
      let right = null;
      let swap = null;
      let leftIndex = (2 * index) +  1;
      let rightIndex = (2 * index) + 2;

      if(rightIndex < length) {
        left = this.values[rightIndex];
        if(this.comparator(right, this.values[index]) < 0) {
          swap = rightIndex;
        }
      }

      if(swap === null) break;
      [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
      index = swap;
    }
  }
}

Heap.minComparator = (a, b) => {return a - b};
Heap.maxComparator = (a, b) => {return b - a};
// class MedianOfAStream {  

//   insert_num = (num) => {
//     // TODO: Write your code here

//     if(!this.maxHeap) this.maxHeap = new Heap(Heap.maxComparator);
//     if(!this.minHeap) this.minHeap = new Heap(Heap.minComparator);

//     if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
//       this.maxHeap.add(num);      
//     } else {
//       this.minHeap.add(num);
//     }

//     if (this.maxHeap.size - this.minHeap.size > 1) {
//       this.minHeap.add(this.maxHeap.poll());
//     } else if (this.minHeap.size - this.maxHeap.size > 1) {
//       this.maxHeap.add(this.minHeap.poll());
//     }
//   };

//   find_median = () => {
//     // TODO: Write your code here

//     if (this.minHeap.size < this.maxHeap.size) {
//       console.log(this.maxHeap.peek());
//       return this.maxHeap.peek();
//     } else if (this.maxHeap.size < this.minHeap.size) {
//       return this.minHeap.peek();
//     } else {
//       return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
//     }
//   }
// }

// class Heap {

//   constructor(comparator) {
//     this.size = 0;
//     this.values = [];
//     this.comparator = comparator || Heap.minComparator; //checks to see if the comparator is real
//   }

//   add(val) {
//     this.values.push(val);
//     this.size++;
//     this.bubbleUp();
//   }

//   peek() { return this.values[0] || null; }

//   poll() {
//     const max = this.values[0];
//     const end = this.values.pop();
//     this.size--;

//     if (this.values.length) {
//       this.values[0] = end;
//       this.bubbleDown();

//     }

//     return max;
//   }

//   bubbleUp() {
//     let index = this.values.length - 1;
//     let parent = Math.floor((index - 1) / 2);

//     while (this.comparator(this.values[index], this.values[parent]) < 0) {
//       [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];

//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }

//   bubbleDown() {
//     let index = 0;
//     let length = this.values.length;

//     while (true) {
//       let left = null;
//       let right = null;
//       let swap = null ;
//       let leftIndex = (2 * index) + 1;
//       let rightIndex = (2 * index) + 2;

//       if (leftIndex < length) {
//         left = this.values[leftIndex];
//         if (this.comparator(left, this.values[index]) < 0) {
//           swap = leftIndex;
//         }
//       }

//       if (rightIndex < length) {
//         left = this.values[rightIndex];
//         if (this.comparator(right, this.values[index]) < 0) {
//           swap = rightIndex;
//         }
//       }

//       if (swap === null) break;

//       [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
//       index = swap;
//     }
//   }
// }

// Heap.minComparator = (a, b) => { return a - b };
// Heap.maxComparator = (a, b) => { return b - a };

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
