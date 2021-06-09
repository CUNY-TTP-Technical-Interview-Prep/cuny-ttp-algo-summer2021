// Problem Statement #

// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.

// If the total number of nodes in the LinkedList is even, return the second middle node.

/*
  input: head pointer to a linked-list
  output: pointer that's at the middle node.

  Sol:
  Using a two pointer system, 1 slow, 1 fast, we can find the middle item, 
  by moving the two pointers slow at half the speed of fast.
  therefore, if fast is at 10, slow is at 5, or if fast is at 101, slow will be at 51.
  so by return slow when fast reaches the end of the linked list
  we would have solved the problem.

  while (fast is not null)
    move fast by 2
    move slow by 1
    check if (fast.next is null) (meaning we have reached the end of the l.list)
      if true, return slow.
  return head or null

  edge cases: head points to null, we should return head.
  edge cases: head.next points to null, 1 node, we return the node.

*/
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_middle_of_linked_list = function (head) {
  // TODO: Write your code here
  if (head === null) return null;
  if (head.next === null) return null;

  let moveBy1Ptr = head,
    moveBy2Ptr = head;

  // I am not clear on why the while loop has to be AND instead of OR
  while (moveBy2Ptr !== null && moveBy2Ptr.next !== null) {
    moveBy1Ptr = moveBy1Ptr.next;
    moveBy2Ptr = moveBy2Ptr.next.next;
  }

  return moveBy1Ptr;
};
// let head = new Node();
// console.log(`Middle Node: ${find_middle_of_linked_list(head)}`);

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

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
