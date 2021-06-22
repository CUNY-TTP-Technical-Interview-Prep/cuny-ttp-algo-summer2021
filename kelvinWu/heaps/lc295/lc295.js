// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

//median is the middle value of the current elements
//can also be thought of as max of the smaller half of numbers and minimum of the greater half of the numbers
//if know max of the smaller half and min of greater half,
////median is max of smaller half if current size if odd
////median if average of max of smaller half and min of greater half if current size if even
//keep two heaps, minheap and maxheap and size initialized to 0

/*
  insert_num(num) {
    size += 1;
    //size now represents how many elements there should be total after insertion

    //if heaps are both empty, just push num to maxHeap 
    if(size === 1) {
        maxHeap.push(num);
        return;
    }
    
    if(size % 2 === 0) {
      //if size will be even after insertion, then maxHeap and minHeap should have equal number of elements
      //currently maxHeap has one more element than minHeap
      //add num to maxHeap. now maxHeap has 2 more elements than minHeap
      //need to pop element from maxHeap to insert to minHeap so both have equal number of elements
      
      maxHeap.push(num);
      int elementToGoToMinHeap = maxHeap.poll();
      minHeap.push(elementToGoToMinHeap);

    }
    else {
      //after insertion, maxHeap should have +1 element compared to minHeap
      //currently maxHeap and minHeap have equal elements

      if(num <= minHeap.peek()) {
        //if num <= top of minHeap
        ////then should be inserted to maxHeap

        maxHeap.push(num);

      }
      else {
        //else if num > top of minHeap, need to add it to minHeap to know new min of greater half
        ////now minHeap has +1 element than maxHeap
        ////pop off top of minHeap to add to maxHeap
        ////now maxHeap has +1 element than minHeap

        minHeap.push(num);
        int elementToGoToMaxHeap = minHeap.poll();
        maxHeap.push(elementToGoToMaxHeap);

      }
        
    }
  }

*/
/*
  find_median(self) {
    if(size % 2 == 0) {
      return (minHeap.peek() + maxHeap.peek()) / 2;
    }
    else {
      return minHeap.peek();
    }
  }
*/
class MedianOfAStream {
  insert_num(num) {
    // TODO: Write your code here
    return -1;
  }

  find_median(self) {
    // TODO: Write your code here
    return 0.0;
  }
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
