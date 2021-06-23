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

class Heap {
	constructor() {
		this.size = 0;
		this.heap = [];
	}

	swapNodes(i, j) {
		const t = this.heap[i];
		this.heap[i] = this.heap[j];
		this.heap[j] = t;
	}

	parent(i) {
		return Math.floor((i - 1) / 2);
	}

	left(i) {
		return 2 * i + 1;
	}

	right(i) {
		return 2 * i + 2;
	}
}

class MinHeap extends Heap {
	insert(v) {
		this.heap[this.size++] = v;
		let index = this.size - 1;

		while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
			this.swapNodes(index, this.parent(index));
			index = this.parent(index);
		}
	}

	getMin() {
		return this.size ? this.heap[0] : undefined;
	}

	minHeapify(i) {
		const left = this.left(i);
		const right = this.right(i);
		let smallestIndex = i;

		if (left < this.size && this.heap[left] < this.heap[smallestIndex]) smallestIndex = left;
		if (right < this.size && this.heap[right] < this.heap[smallestIndex]) smallestIndex = right;

		if (smallestIndex !== i) {
			this.swapNodes(i, smallestIndex);
			this.minHeapify(smallestIndex);
		}
	}

	extractMin() {
		const min = this.heap[0];

		// remove root and replace with last node
		this.heap[0] = this.heap[this.size - 1];
		this.size--;

		// percolate down replacing with smallest of children
		this.minHeapify(0);

		return min;
	}
}

class MaxHeap extends Heap {
	insert(v) {
		this.heap[this.size++] = v;
		let index = this.size - 1;

		while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
			this.swapNodes(index, this.parent(index));
			index = this.parent(index);
		}
	}

	getMax() {
		return this.size ? this.heap[0] : undefined;
	}

	maxHeapify(i) {
		const left = this.left(i);
		const right = this.right(i);
		let biggestIndex = i;

		if (left < this.size && this.heap[left] > this.heap[biggestIndex]) biggestIndex = left;
		if (right < this.size && this.heap[right] > this.heap[biggestIndex]) biggestIndex = right;

		if (biggestIndex !== i) {
			this.swapNodes(i, biggestIndex);
			this.maxHeapify(biggestIndex);
		}
	}

	extractMax() {
		const max = this.heap[0];

		// remove root and replace with last node
		this.heap[0] = this.heap[this.size - 1];
		this.size--;

		// percolate down replacing with smaller of children
		this.maxHeapify(0);

		return max;
	}
}

let MedianFinder = function() {
	this.med = 0;
	this.minHeap = new MinHeap();
	this.maxHeap = new MaxHeap();
};

class MedianOfAStream {
	insert_num(num) {
		if (this.maxHeap.size > this.minHeap.size) {
			if (num >= this.med) {
				this.minHeap.insert(num);
			} else {
				this.minHeap.insert(this.maxHeap.extractMax());
				this.maxHeap.insert(num);
			}

			this.med = (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;
		} else if (this.minHeap.size > this.maxHeap.size) {
			if (num >= this.med) {
				this.maxHeap.insert(this.minHeap.extractMin());
				this.minHeap.insert(num);
			} else {
				this.maxHeap.insert(num);
			}

			this.med = (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;
		} else {
			if (num >= this.med) {
				this.minHeap.insert(num);
				this.med = this.minHeap.getMin();
			} else {
				this.maxHeap.insert(num);
				this.med = this.maxHeap.getMax();
			}
		}
	}

	find_median() {
		if (this.maxHeap.heap.length === 0 && this.minHeap.heap.length === 0) return null;

		if (this.maxHeap.heap.length > this.minHeap.heap.length) return this.maxHeap.getMax();
		if (this.maxHeap.heap.length < this.minHeap.heap.length) return this.minHeap.getMin();
		return (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;
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
