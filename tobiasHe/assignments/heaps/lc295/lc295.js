// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

/* 
  keep track of median at any given time
  if we use 1 heap we can track either the max or min number at the heap
  to find the median, we can use two heaps. 
  One will keep track of the max value of lower half   (max heap)
  and the other will keep track of the min value of the uppper half (min heap)
  If the max heap and min heap both contain even numbers then we can take the average of the max and min values
  If the amount of numbers is odd then we can just take the max value of the max heap.
*/

// need more time to implement this.

class MedianOfAStream {
	insert_num(num) {}

	find_median() {}
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
