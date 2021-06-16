/**
 * Summary: 
 *  If there is no cycle in the linked list 
 *  there will be a null at the of list
 *  we can use two pointer to iterate through the 
 *  array. One pointer will move 2x faster than the 
 *  other, Once the fast pointer reaches the end, 
 *  the slower pointer will be a the middle
 *  return the slow pointer
 * 
 * while (fast is not null)
 *  fast = fast.next.next
 *  slow = slow.next
 * 
 * return slow
 * 
 * Time: (O(N))
 * Space: O(1)

 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_middle_of_linked_list = function (head) {
  let hare = head;
  let turtle = head;
  while (hare !== null) {
    hare = hare.next;
    if (hare === null) break;
    hare = hare.next;

    turtle = turtle.next;
  }

  return turtle;
};

const find_middle_of_linked_list = function (head) {
  let hare = head;
  let turtle = head;

  while (hare !== null) {
    hare = hare.next;
    if (hare === null) break;
    hare = hare.next;

    turtle = turtle.next;
  }

  return turtle;
};

const find_middle_of_linked_list2 = (head) => {
  let hare = head;
  let turtle = head;

  while (hare !== null) {
    hare = hare.next.next;
    turtle = turtle.next;
  }

  return turtle;
};

const find_middle_of_linked_list = (head) => {
  let hare = head;
  let turtle = head;

  while (hare !== null && hare.next !== null) {
    hare = hare.next.next;
    turtle = turtle.next;
  }
  return turtle;
};

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
