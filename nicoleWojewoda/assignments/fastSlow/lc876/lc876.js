// Problem Statement #

// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

/*
given:
head of non-empty linked list

return:
the middle node of the linked list

steps:
loop through the list to find its length
loop until i < Math.floor(length/2)
if the length is even, return the node after the current node, otherwise return the current node
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// const find_middle_of_linked_list = function (head) {
//   let count = 0;
//   let current = head;
//   while (current.next != null) {
//     count += 1;
//     current = current.next;
//   }

//   for (let i = 0; i < Math.floor(count / 2); i++) {
//     head = head.next;
//   }

//   return count % 2 == 0 ? head : head.next;
// };

const find_middle_of_linked_list = function (head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`); // 3

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`); // 4

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`); // 4

// Solution
// -----
// function find_middle_of_linked_list(head) {
//   let slow = head,
//     fast = head;
//   while ((fast !== null && fast.next !== null)) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// }

// -----

// Time complexity #
// The above algorithm will have a time complexity of O(N) where ‘N’ is the number of nodes in the LinkedList.

// Space complexity #
// The algorithm runs in constant space O(1).
