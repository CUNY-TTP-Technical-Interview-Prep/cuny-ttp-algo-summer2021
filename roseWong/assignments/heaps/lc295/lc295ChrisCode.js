// Problem Statement #

// Design a class to calculate the median of a number stream. The class should have the following two methods:

//   1. insertNum(int num): stores the number in the class
//   2. findMedian(): returns the median of all numbers inserted in the class

// If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

// the following code is the snippet that Chris dropped in Slack

/**  Chris'code starts here
 * 
create a Class Heap
 -> constructor
 -> add method
 -> peek method
 -> poll method
 -> bubbleUp method
 -> bubbleDown method
 
 Median's addNum Method
 -----
 //if no values in maxHeap OR num passed into addNum is less than topValue of MaxHeap
      //add this value to the maxHeap
    //else
      //add it to the minHeap
    
    //if maxHeap is growing faster than minHeap
      //pull top value with poll and add to opposing heap
    //if OPPOSITE
      // OPPOSITE
*/
​
/**
 * initialize your data structure here.
 
 Set my minHeap & maxHeap -> new Heap
 */
var MedianFinder = function() {
    this.maxHeap = new Heap(Heap.maxComparator);
    this.minHeap = new Heap(Heap.minComparator);
};
​
/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
        this.maxHeap.add(num);
    } else {
        this.minHeap.add(num);
    };
    
    if ((this.maxHeap.size - this.minHeap.size) > 1) {
        this.minHeap.add(this.maxHeap.poll());
    } else if ((this.minHeap.size - this.maxHeap.size) > 1) {
        this.maxHeap.add(this.minHeap.poll())
    };
};
​
/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    //maxHeap has more vals than minHeap -> median is here
      // elif OPPOSITE
        // else even number and need to do math in order to get median
    if (this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek();
    } else if (this.minHeap.size > this.maxHeap.size) {
        return this.minHeap.peek();
    } else {
        return (this.minHeap.peek() + this.maxHeap.peek()) / 2
    };
};
​
/**
 CUSTOM HEAP CLASS
*/
​
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
        let parent = Math.floor( (index - 1) / 2 );
        
        while (this.comparator(this.values[index], this.values[parent]) < 0) {
            [ this.values[parent], this.values[index] ] = [ this.values[index], this.values[parent] ];
            index = parent;
            parent = Math.floor( (index - 1) / 2 );
        };    
    }
    
    bubbleDown() {
        let index = 0;
        let length = this.values.length
        
        while (true) {
            let left = null;
            let right = null;
            let swap = null;
            let leftIndex = (index * 2) + 1;
            let rightIndex = (index * 2) + 2;
            
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
            }
            
            if (swap === null) {
                break;
            }
            
            [ this.values[index], this.values[swap] ] = [ this.values[swap], this.values[index] ];
            index = swap
            
        }
    }
    
    
}
​
/**
 COMPARING TO FIND IF VAL A < OR > B
*/
​
Heap.minComparator = (a, b) => { return a - b };
Heap.maxComparator = (a, b) => { return b - a };
​
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */













// old code start here
// class MedianOfAStream {
//   insert_num(num) {
//     // TODO: Write your code here
//     return -1;
//   }

//   find_median(self) {
    /**
 CUSTOM HEAP CLASS
*/


var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
