// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

/**
 * input: num: that going to the heap
 * 
 * output: the median number
 * 
 * step 1: make a new heap class
 * step 2: the heap class have methods like: add, peak, poll, bubbleUp, bubbleDown
 * step 3: need a comparator to accept max heap or min heap that can use to determin if we need max heap structure or min heap structure
 * step 4: separate the array to one min heap array and one max heap array so that we can find median from two root value
 * 
 * a Heap class that need a constructor to accept a max or min heap comparator, initialize a the size of the heap and an empty array.
 * By default the comparator could be a min Heap. A comparator is used to determine if this is use for max or min Heap
 * for the min Heap should return a negative number so that means the parent is less than child. Max Heap should return positive number 
 * a add() method should 
 *          add the value at the end of the array
 *          increase the size of the heap
 *          use bubble up method to compare with the parent
 * a poll() method should
 *          delete the first element in the array 
 *          put the last element to the root 
 *          decrease the size of the Heap
 *          compare the root with children node and bubble down
 *          return the deleted element
 * a peek() method should
 *          return the fist element in the array that's the root node in the Heap structure or a null if no elements
 * a bubbleUp() method should
 *          
 * 
 * 
 */

class MedianOfAStream {

  insert_num(num) {
    // TODO: Write your code here
    
  }

  find_median(self) {
    // TODO: Write your code here
    
  }
}

var medianOfAStream = new MedianOfAStream(); // [3, 1, 5 , 4] => max:[5, 3, 4, 1], min [1,3,4,5]
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);//[1,3] => 2
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`); // [1, 3, 5] => 3
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`); // [1,3,4,5] => 3.5

/**
 * input: num: that going to the heap
 * 
 * output: the median number
 * 
 * step 1: make a new heap class
 * step 2: the heap class have methods like: add, peak, bubbleUp, bubbleDown, remove
 * 
 */

//  class MedianOfAStream {

//   constructor(){
//     this.maxHeap = new Heap(Heap.maxComparator);
//     this.minHeap = new Heap(Heap.minComparator);
//   }

//   insert_num(num) {
//     // TODO: Write your code here
//     if(this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
//       this.maxHeap.add(num);
//     } else {
//       this.minHeap.add(num);
//     }
  
//     if(this.maxHeap.size - this.minHeap.size > 1) {
//       this.minHeap.add(this.maxHeap.poll());
//     } else if(this.minHeap.size - this.maxHeap.size > 1) {
//       this.maxHeap.add(this.minHeap.poll());
//     }

//     return -1;
//   }

//   find_median(self) {
//     // TODO: Write your code here
//     if(this.maxHeap.size > this.minHeap.size) {
//       return this.maxHeap.peek();
//     } else if(this.maxHeap.size < this.minHeap.size) {
//       return this.minHeap.peek();
//     } else {
//       return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
//     }
//   }
// }

// class Heap{

//   constructor(comparator){
//     this.size = 0;
//     this.values = [];
//     this.comparator = comparator || Heap.minComarator;
//   }

//   add(value){
//     this.values.push(value);
//     this.size ++;
//     this.bubbleUp();
//   }

//   poll(){
//     let max = this.values[0];
//     let end = this.values.pop();

//     this.size --;

//     if(this.values.length){
//       this.values[0] = end;
//       this.bubbleDown();
//     }
//     return max;
//   }

//   peek(){
//     return this.values[0] || null;
//   }

//   bubbleUp(){
//     let index = this.values.length - 1;
//     let parent = Math.floor((index - 1) / 2);

//     while(this.comparator(this.values[index], this.values[parent]) < 0){
//       [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }

//   bubbleDown(){
//     let index = 0;
//     let length = this.values.length;
    
//     while(true){
//       let left = null,
//           right = null,
//           swap = null,
//           leftIndex = index * 2 + 1,
//           rightIndex = index * 2 + 2;

//           //if the left index is less than the length
//           if (leftIndex < length) {
//             left = this.values[leftIndex];
//             // if the left child is smaller than the current pa
//             if (this.comparator(left, this.values[index]) < 0) swap = leftIndex;
//           }
    
//           if (rightIndex < length) {
//             right = this.values[rightIndex];
//             if ((swap !== null && this.comparator(right, left) < 0) || (swap === null && this.comparator(right, this.values[index]) < 0)) {
//               swap = rightIndex;
//             }
//           }
//           if (swap === null) break;
    
//           [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
//           index = swap;
//     }
//   }
// }

// Heap.minComparator = (a, b) => {return a - b;}
// Heap.maxComparator = (a, b) => {return b - a;}
