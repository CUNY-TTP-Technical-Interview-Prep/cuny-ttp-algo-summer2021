// Problem Statement #

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

// Example 1:

// Input: nums=[1, 2, -1, 3, 5], k = 2
// Output: [1.5, 0.5, 1.0, 4.0]
// Explanation: Lets consider all windows of size ‘2’:

//   - [1, 2, -1, 3, 5] -> median is 1.5
//   - [1, 2, -1, 3, 5] -> median is 0.5
//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 4.0

// Example 2:

// Input: nums=[1, 2, -1, 3, 5], k = 3
// Output: [1.0, 2.0, 3.0]
// Explanation: Lets consider all windows of size ‘3’:

//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 2.0
//   - [1, 2, -1, 3, 5] -> median is 3.0
class Heap {
	constructor(isMax = true) {
		this.heap = [];
		this.isMax = isMax;
	}

	size() {
		return this.heap.length;
	}

	push(num) {
		this.heap.push(num);
		let index = this.size() - 1;
		if (index === 0) return;

		this.bubbleUp(index);
	}

	bubbleUp(index) {
		let parentIndex = Math.floor((index - 1) / 2);

		if (this.isMax) {
			while (this.heap[parentIndex] !== undefined && this.heap[parentIndex] < this.heap[index]) {
				[ this.heap[parentIndex], this.heap[index] ] = [ this.heap[index], this.heap[parentIndex] ];
				index = parentIndex;
				parentIndex = Math.floor((index - 1) / 2);
			}
		} else {
			while (this.heap[parentIndex] !== undefined && this.heap[parentIndex] > this.heap[index]) {
				[ this.heap[parentIndex], this.heap[index] ] = [ this.heap[index], this.heap[parentIndex] ];
				index = parentIndex;
				parentIndex = Math.floor((index - 1) / 2);
			}
		}
		return index;
	}

	pop() {
		let parentIndex = 0;
		let lastIndex = this.size() - 1;
		[ this.heap[parentIndex], this.heap[lastIndex] ] = [ this.heap[lastIndex], this.heap[parentIndex] ];
		let result = this.heap.pop();

		this.bubbleDown(parentIndex);

		return result;
	}

	bubbleDown(parentIndex) {
		let leftChildIndex = 2 * parentIndex + 1;
		let rightChildIndex = 2 * parentIndex + 2;

		if (this.isMax) {
			while (
				(this.heap[leftChildIndex] !== undefined && this.heap[leftChildIndex] > this.heap[parentIndex]) ||
				(this.heap[rightChildIndex] !== undefined && this.heap[rightChildIndex] > this.heap[parentIndex])
			) {
				let highestChildIndex;
				if (this.heap[leftChildIndex] === undefined || this.heap[rightChildIndex] === undefined) {
					highestChildIndex = leftChildIndex || rightChildIndex;
				} else {
					highestChildIndex =
						this.heap[leftChildIndex] > this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
				}
				[ this.heap[parentIndex], this.heap[highestChildIndex] ] = [
					this.heap[highestChildIndex],
					this.heap[parentIndex]
				];
				parentIndex = highestChildIndex;
				leftChildIndex = 2 * parentIndex + 1;
				rightChildIndex = 2 * parentIndex + 2;
			}
		} else {
			while (
				(this.heap[leftChildIndex] !== undefined && this.heap[leftChildIndex] < this.heap[parentIndex]) ||
				(this.heap[rightChildIndex] !== undefined && this.heap[rightChildIndex] < this.heap[parentIndex])
			) {
				let highestChildIndex;
				if (this.heap[leftChildIndex] === undefined || this.heap[rightChildIndex] === undefined) {
					highestChildIndex = leftChildIndex || rightChildIndex;
				} else {
					highestChildIndex =
						this.heap[leftChildIndex] < this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
				}
				[ this.heap[parentIndex], this.heap[highestChildIndex] ] = [
					this.heap[highestChildIndex],
					this.heap[parentIndex]
				];
				parentIndex = highestChildIndex;
				leftChildIndex = 2 * parentIndex + 1;
				rightChildIndex = 2 * parentIndex + 2;
			}
		}
	}

	peek() {
		return this.heap[0];
	}

	delete(num) {
		let index = 0;
		for (let i = 0; i < this.heap.length; i++) {
			if (this.heap[i] === num) {
				index = i;
			}
		}
		if (index === this.heap.length - 1) {
			return this.heap.pop();
		}
		this.heap[index] = this.heap.pop();
		this.bubbleDown(this.bubbleUp(index));
	}
}

class SlidingWindowMedian {
	constructor() {
		this.maxHeap = new Heap(true);
		this.minHeap = new Heap(false);
	}
	find_sliding_window_median(nums, k) {
		let result = [];
		// TODO: Write your code here
		let start = 0;
		let end = 0;

		while (end < nums.length) {
			this.insert(nums[end]);
			if (end - start + 1 > k) {
				this.remove(nums[start]);
				start++;
			}

			if (end - start + 1 === k) {
				result.push(this.median());
			}
			end++;
		}
		return result;
	}

	insert(num) {
		if (this.maxHeap === 0 || this.maxHeap.peek() > num) {
			this.maxHeap.push(num);
		} else {
			this.minHeap.push(num);
		}

		this.rebalance();
	}

	rebalance() {
		if (this.maxHeap.size() > this.minHeap.size() + 1) {
			this.minHeap.push(this.maxHeap.pop());
		} else if (this.minHeap.size() > this.maxHeap.size()) {
			this.maxHeap.push(this.minHeap.pop());
		}
	}

	median() {
		if (this.maxHeap.size() === this.minHeap.size()) {
			return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
		} else {
			return this.maxHeap.peek();
		}
	}

	remove(num) {
		if (this.maxHeap.peek() >= num) {
			this.maxHeap.delete(num);
		} else {
			this.minHeap.delete(num);
		}

		this.rebalance();
	}
}

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([ 1, 2, -1, 3, 5 ], 2);

console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([ 1, 2, -1, 3, 5 ], 3);
console.log(`Sliding window medians are: ${result}`);
