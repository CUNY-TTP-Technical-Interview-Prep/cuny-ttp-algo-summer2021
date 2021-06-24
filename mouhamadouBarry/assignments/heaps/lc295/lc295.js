// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.
/*
  Some quick notes: 
    - A heap is 9/10 times custom made. This means that js does not have specific method that I call the same way I can
      do with arrays. I need to be ok with this.
    - A class thats not titled as heap (like MedianofAStream), can still be a heap. 
    - This problem seems like it can be solved by creating a heap
    - A heap class generally has the following method
      -> a Poll method that returns the root and then deletes it
      -> a peek method that returns the root without deleting the root
      -> a add method that allow the user to add an element to the heap. This 9/10 time done by adding it at the vary end.
      -> a bubbleUp method that will handle the job of fixing the heap after adding an element
      -> a bubbleDown method that will handle the job of fixing the heap after polling an element
      NOTE -> the way I think of bubbleUP and bubbleDown may be switched for other people in terms of name. 
              But the fuctionality will be the same.
              

  Gameplan:
    we need to do two things. 
    - Create a insert method that accepts an int
    - Create a method that returns the medium of our array

  Solution 1A:
    - I need an array
      -> This will store all of the ints and be the representation of our heap
    - I need a bubbleUp
      -> This will handle the job of fixing the array when we add an element to it
    - Test this section out before moving forward

    let numArr = []
    numArr.push(num)
    
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
