// Problem Statement #

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
/**
 * process: two pointer
 * one faster pointer and one slow pointer
 * 1 => 2=> 3=> 4=>5=>6=>3
 *
 * set both pointer as the head node
 * increment them from the head
 *
 * while loop
 *  keep incrementing until either
 *  one node reaches null or
 *  the two nodes meet
 *
 * time complexity: O(N)
 * space complexity: O(1)
 *
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_cycle = function (head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next; // 2x faster than slow
    slow = slow.next;

    if (fast === slow) return true; // if the nodes meet, return true
  }

  return false;
};

const has_cycle = function (head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
