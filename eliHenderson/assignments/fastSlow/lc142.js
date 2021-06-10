// Problem Statement #

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

/**
 *
 * The goal is to find the length of the cycle
 * to find the length, we interate through the list
 * as if we were trying to find the cycle,
 * iterating  the fast pointer 2x as fast as the slow pointer
 * Once we find the collision that tells us that there is a cycle.
 *
 * we can use a second function that counts the length of the cycle
 * this function can store the value of the starting node
 * and iterate using the nodes next values until the value equals the inputted node.
 *
 * A third function can first push one pointer up 'cycle length' amount of times,
 * and then move that pointer and a second pointer up, 1 node at a time until they meet,
 * once they meet, they will be on the head of the cycle in one pass. \
 *
 * O(N)
 * O(1)
 *
 * It could be useful to know if the linked list will include the length of the linked list
 * this would allow use to store the length and reference pass values
 *
 *
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_start(head) {
  // TODO: Write your code here

  let count = 0;
  let start = 0;
  let turtle = head,
    hare = head;
  while (hare !== null && hare.next !== null) {
    turtle = turtle.next;
    hare = hare.next.next;

    if (hare === turtle) {
      count = count_cycle_steps(turtle);
      break;
    }
  }
  return cycle_start(head, count);
}

function count_cycle_steps(n) {
  let count = 1;
  let temp = n;

  while (temp.next != n) {
    count++;
    temp = temp.next;
  }
  return count;
}

function cycle_start(head, length) {
  let p1 = head,
    p2 = head;

  while (length > 0) {
    p2 = p2.next;
    length--;
  }

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

function find_cycle_start(head) {
  // TODO: Write your code here

  let count = 0;
  let start = 0;
  let turtle = head,
    hare = head;
  while (hare !== null && hare.next !== null) {
    turtle = turtle.next;
    hare = hare.next.next;

    if (hare === turtle) {
      count = count_cycle_steps(turtle);
      break;
    }
  }
  return cycle_start(head, count);
}

function count_cycle_steps(n) {
  let count = 1;
  let temp = n;

  while (temp.next != n) {
    count++;
    temp = temp.next;
  }
  return count;
}

function cycle_start(head, length) {
  let p1 = head,
    p2 = head;

  while (length > 0) {
    p2 = p2.next;
    length--;
  }

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;


//version that worked on leet code 

const find_cycle_start =(head)=>{
  let turtle = head, 
    hare = head, 

  while (hare && hare.next){
    turtle = turtle.next
    hare = hare.next.next

    if(turtle===hare){
      turtle = head; 
      while (turtle !==hare){
        turtle = turtle.next; 
        hare = hare.next; 
      }

      return slow
    }
  }

  return null
}