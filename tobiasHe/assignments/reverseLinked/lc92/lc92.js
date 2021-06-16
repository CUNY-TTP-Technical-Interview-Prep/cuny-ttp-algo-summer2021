// Problem Statement #

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

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

const reverse_sub_list = function(head, p, q) {
	// TODO: Write your code here
	// 1 -> 2 -> 3 -> 4 -> 5 -> 6
	//      p         q
	// 1 -> 4 -> 3 -> 2 -> 5 -> 6

	// 2 3 4 5
	// 5 4 3 2
	// 1 5 4 3 2 6
	// previous, next
	// start at position p
	// increment head.next  p - 1 steps  head = whatever it's at position p

	// p = 2
	// q = 4
	if (p === q) return head;

	let previous = null;
	let next = null;
	let current = head;

	if (current) {
		for (let i = 0; i < p - 1; i++) {
			previous = current;
			current = current.next;
		}
	}

	let j = 0;
	let lastNodeOfFirst = null;
	if (previous) {
		lastNodeOfFirst = previous; //need access to the last node of first part
	}

	tailOfSub = current;

	//reverse from p to q
	while (current && j < q - p + 1) {
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
		j++;
	}

	console.log(current);

	//connect first part
	if (lastNodeOfFirst !== null) {
		lastNodeOfFirst.next = previous;
	} else {
		head = previous;
	}

	//connect last part
	tailOfSub.next = current;

	return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`);

// Solution
// -----
// function reverse_sub_list(head, p, q) {
//   if (p === q) {
//     return head;
//   }

//   // after skipping 'p-1' nodes, current will point to 'p'th node
//   let current = head,
//     previous = null;
//   let i = 0;
//   while (current !== null && i < p - 1) {
//     previous = current;
//     current = current.next;
//     i += 1;
//   }

//   // we are interested in three parts of the LinkedList, the part before index 'p',
//   // the part between 'p' and 'q', and the part after index 'q'
//   const last_node_of_first_part = previous;
//   // after reversing the LinkedList 'current' will become the last node of the sub-list
//   const last_node_of_sub_list = current;
//   let next = null; // will be used to temporarily store the next node

//   i = 0;
//   // reverse nodes between 'p' and 'q'
//   while (current !== null && i < q - p + 1) {
//     next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//     i += 1;
//   }

//   // connect with the first part
//   if (last_node_of_first_part !== null) {
//     // 'previous' is now the first node of the sub-list
//     last_node_of_first_part.next = previous;
//     // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
//   } else {
//     head = previous;
//   }

//   // connect with the last part
//   last_node_of_sub_list.next = current;
//   return head;
// }

// -----

// Time complexity #
// The time complexity of our algorithm will be O(N) where ‘N’ is the total number of nodes in the LinkedList.

// Space complexity #
// We only used constant space, therefore, the space complexity of our algorithm is O(1).
