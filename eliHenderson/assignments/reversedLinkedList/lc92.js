/**
 * Problem:
 *  Given: Linked List such as 1 -> 2 -> 3-> 4 -> 5
 *  reverse as sub section of the linked list
 *                  1 -> 2 -> 3-> 4 -> 5
 *                      p         q
 *
 *
 *
 * edge:
 *  this method works on sorted linked lists
 *
 *
 *
 * overview:
 *  check if p and q are equal
 *  if so just return the head
 *
 *  curr = head
 *  prev = null
 *
 *
 *  1 -> 2 -> 3-> 4 -> 5
 *      p         q
 *  c
 *
 *  the current value has to start at the sub-arr
 *
 *  counter = 0
 *
 * while curr !== null and counter < p - 1
 *
 *          prev  = curr
 *          curr = curr.next
 *          counter ++
 *
 *  1 <- 2 <- 3<- 4  5
 *      p         q
 *                  curr
 *              prev
 *
 *   1  4-> 3-> 2  5
 *
 * counter = 0
 *
 * lof = prev
 * los = curr
 *
 *
 *
 * while ( curr !=null && counter < q - p + 1 )
 *          let next = curr.next
 *          curr.next = prev
 *          prev = current
 *          curr = next
 *          counter ++
 *
 *
 *  1  4-> 3-> 2   5
 *      p         q
 *               curr
 *    prev
 *  lof
 *            los
 *  1 -> 4-> 3-> 2   5
 *      p         q
 *               curr
 *    prev
 *  lof
 *            los
 *
 *
 *
 * lof.next = prev
 * los.next = curr
 *
 *
 * return head
 *
 *
 *
 *  Time complexity: O(N)
 *  Space: O(1)
 *
 *
 *
 *
 */

// Problem Statement #

// Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

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
  if (p === q) return head;

  let curr = head;
  let prev = null;
  let inc = 0;

  //start the current node at the start of the subarray

  while (curr !== null && inc < p - 1) {
    prev = curr;
    curr = curr.next;
    inc++;
  }

  //save the beginning of the list
  // last of first array
  let last_of_first = prev;

  //save the end of the sub-array
  //last of the subarray
  let last_of_sub = curr;

  //reset the counter
  inc = 0;

  while (curr !== null && inc < q - p + 1) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    inc++;
  }

  // *  1 -> 4-> 3-> 2 ->  5
  // *      p         q
  // *                    curr
  // *    prev
  // *  lof
  // *            los

  //connect the first part to the sub-arr
  last_of_first.next = prev;

  //connect the end of the sub-arr to the end of the link list
  last_of_sub.next = curr;

  //return the head
  return head;
};

const reverse_sub_list = (head, p, q) => {
  if (p === q) return head;

  let curr = head;
  let prev = null;
  let inc = 0;

  while (curr !== null && inc < p - 1) {
    prev = curr;
    curr = curr.next;
    inc++;
  }

  const lof = prev;
  const los = curr;

  inc = 0;

  while (curr !== null && inc < q - p + 1) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    inc++;
  }

  lof = prev;

  los = curr;

  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`
);
