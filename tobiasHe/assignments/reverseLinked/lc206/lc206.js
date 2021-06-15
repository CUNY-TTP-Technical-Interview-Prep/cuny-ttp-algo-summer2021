// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	get_list() {
		let result = '';
		let temp = this;
		while (temp !== null) {
			result += temp.value + ' ';
			temp = temp.next;
		}
		return result;
	}
}

const reverse = function(head) {
	// TODO: Write your code here
	/* 
    given head of linkedlist, reverse it, and return the new head of the linkedlist
    the idea is that we reverse the order so head points to null and the next value points to the previous head and so on
    create a new variable previous to hold previous value
    create a new variable next to hold next value
    head will keep moving until it becomes null which means we reached the tail. 
    loop through linkedlist until head === null which means we reached the end of the linkedlist
  */
	let previous = null;
	let next = null;
	while (head) {
		next = head.next;
		head.next = previous;
		previous = head;
		head = next;
	}
	return previous;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`);

// Solution
// -----
// const reverse = function(head) {
//   let previous = null;
//   let current = head;

//   while (current !== null) {
//     next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }
//   return previous;
// };

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).
