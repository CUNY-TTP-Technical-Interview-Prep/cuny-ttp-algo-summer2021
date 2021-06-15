// Problem Statement #

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

/*
Insights:
  - At some point, we need to implement the steps to reverse a linked list
  - We can just iterate through the list until we reach 'p'
  - Then we have a loop that will reverse that specific part of the linked list
  - So, we need a counter and we reverse the linked list once its between p and q

Reversing a Linked List;
  1. Get current node and store next value
  2. Update next value to a "listSoFar"
  3. Point the "listSoFar" to the current node
  4. Update the current node to store the next value

Thoughts:
  - We should keep track of the node at p - 1, as it represents the last list node before our reversed section
  - The first node in the reversed section (pre-reversal) will become the tail
  - If we implement the logic to reverse a linked list, then our "listSoFar" variable will store the head of the entire reversed linked list section
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse_sub_list = function (head, p, q) {
  // TODO: Write your code here
  let currentPos = 1;
  let currentNode = head;
  let start = head; // Represents the last list node before the start of our reversed linked list section

  // Iterate through until we reach p
  while (currentPos < p) {
    start = currentNode; // Will end up pointing to the node before the reversed linked list section, or p - 1
    currentNode = currentNode.next; // Advance current node (will end up equal to value at node p)
    currentPos++; // Increment position (will end up equal to p)
  }

  let newList = null; // Initialize a new list
  let tail = currentNode; // The beginning node in the target section of the linked list will end up as the tail once reversed

  // Now iterate through the reversal while the currentPos is in the boundaries of p and q
  while (currentPos >= p && currentPos <= q) {
    const nextNode = currentNode.next;
    currentNode.next = newList;
    newList = currentNode; // currentNode will represent the head of the list we have built so far
    currentNode = nextNode; // At the end, currentNode will equal the value at q + 1, which represents the start of the rest of the linked list
    currentPos++;
  }

  start.next = newList; // The newList is the head of the reversed section
  tail.next = currentNode; // currentNode is pointing at q + 1

  // Most of the time, we could return head, but it won't work if p is 1, meaning we reverse starting from the beginning, so we need to check
  if (p > 1) {
    return head;
  } else {
    return newList;
  }
};

/*
Sample run of my solution:

Linked List: (1) -> (2) -> (3) -> (4) -> (5) -> null, p = 2, q = 4

currentPos = 1
currentNode = head = (1)
start = head = (1)

Loop (iterate until we reach p):
  Iteration 0:    start = currentNode = (1)
                  currentNode = currentNode.next = (2)
                  currentPos++ -> currentPos = 2
  Since currentPos === p, close loop

newList = null
tail = currentNode = (2)

Loop:
  Iteration 0:  nextNode = currentNode.next = (3)
                currentNode.next = newList = (2) -> null
                newList = currentNode = (2) -> null
                currentNode = nextNode = (3)
                currentPos++ -> currentPos = 3
  Iteration 1:  nextNode = currentNode.next = (4)
                currentNode.next = newList = (3) -> (2) -> null
                newList = currentNode = (3) -> (2) -> null
                currentNode = nextNode = (4)
                currentPos++ -> currentPos = 4
  Iteration 2:  nextNode = currentNode.next = (5)
                currentNode.next = newList = (4) -> (3) -> (2) -> null
                newList = currentNode = (4) -> (3) -> (2) -> null
                currentNode = nextNode = (5)
                currentPos++ -> currentPos = 5
  Since currentPos > q, close loop

start.next = newList = (1) -> (4) -> (3) -> (2) -> null
tail.next = currentNode = (1) -> (4) -> (3) -> (2) -> (5) -> null

return head = (1) -> (4) -> (3) -> (2) -> (5) -> null
*/

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`
);

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
