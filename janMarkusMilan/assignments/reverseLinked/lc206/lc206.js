// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList.
// Write a function to return the new head of the reversed LinkedList.

/*
Key Insights:
  - We don't know the actual length of the linked list (we only receive the head)
  - We need to use some iterative technique that will operate on a node and move on

Iterating Through Linked Lists:
  let currentNode = head;
  while (currentNode) {
    // Perform operations here
    currentNode = currentNode.next;
  }

Theorizing The Solution:
  - Let's say we were given the linked list: (1) -> (2) -> (3) -> (4) -> (5) -> null
    We need to think of the final version of our linked list: (5) -> (4) -> (3) -> (2) -> (1) -> null
  - If we look at the head node, we know that it has access to the next node: (1) -> (2)
    In our final solution, we will be looking at: (2) -> (1) -> null
    The key difference is that the (1) is pointing at null because it is the tail, and the (2) is pointing at the (1) instead of (3).
  - We need to keep reference of the nodes and make sure they point at the right one

Variables:
  1. currentNode (we iterate using this one)
  2. Some var to keep track of our final solution (reversed linked list)
  3. nextNode (the node next to the currentNode)
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

const reverse = function (head) {
  // TODO: Write your code here
  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};

/*
Testing my solution:
  1.  Let's use the following linked list: [1, 2, 3, 4, 5]
      We first set prevNode equal to null, and set currentNode equal to the head, which is just 1, then we go to our while loop.
          1st iteration: nextNode = currentNode.next = (2) | currentNode.next = prevNode = null, so (1) -> null | prevNode = currentNode = (1) -> null | currentNode = nextNode = (2)
          2nd iteration: nextNode = (3) | currentNode.next = (2) -> (1) -> null | prevNode = (2) -> (1) -> null | currentNode = (3)
          3rd iteration: nextNode = (4) | currentNode.next = (3) -> (2) -> (1) -> null | prevNode = (3) -> (2) -> (1) -> null | currentNode = (4)
          4th iteration: nextNode = (5) | currentNode.next = (4) -> (3) -> (2) -> (1) -> null | prevNode = (4) -> (3) -> (2) -> (1) -> null | currentNode = (5)
          5th iteration: nextNode = null | currentNode.next = (5) -> (4) -> (3) -> (2) -> (1) -> null | prevNode = (5) -> (4) -> (3) -> (2) -> (1) -> null | currentNode = null
      Since currentNode is equal to null, we end the while loop and return prevNode, which stores our answer.
*/

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
