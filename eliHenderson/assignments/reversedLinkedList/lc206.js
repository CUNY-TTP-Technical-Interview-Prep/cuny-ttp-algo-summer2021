// Problem Statement #

// Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

/**
 * Problem:
 *  return a reversed array
 *
 *
 * Ex:
 *  What to do if the the node list is empty
 *
 *
 * we need to set 2 pointers
 * a current value that equals the head
 * the prev value that trails the current value
 *
 * loop through the linked list starting at the beginning
 *
 * store a temp value that always holds a current.next value
 * sever the current and current.next link
 * create a link to the trailing node
 * move up the current and prev nodes
 *
 *      n
 * 2 -> 4 -> 8 -> 10 -> null
 * c
 *p
 *
 *     n
 * null<-2  4 -> 8 ->10 -> null
 * c
 *p
 *
 *                 n
 * null <- 2 <-4 -> 8 ->10 -> null
 *             c
 *         p
 *
 *                       head    n
 * null <- 2 <-4 <- 8 <-10
 *                          c
 *                      p
 *
 * 10 -> 8 -> 4 -> 2 -> null
 * p
 *
 * prev is the new head
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse = function (head) {
  // TODO: Write your code here

  let curr = head;
  let prev = null;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

const reverse = (head) => {
  let curr = head;
  let prev = null;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`);
