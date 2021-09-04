class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  pop () {
    // remove the tail
    // return the tail
    // reassign the tail to the new last node
    if (!this.size) return undefined;
    // initialize a last node var
    let currentNode = this.head; // {val:1, next:Node}
    if (this.size === 1) {
      this.size = 0;
      this.head = null;
      this.tail = null;

      return currentNode;
    }
    let nextNode = currentNode.next; // {val:3, next:null}
    // traverse the list
    while (currentNode) {
      // console.log('in while loop');
      // if the next is null
      // console.log(nextNode.next);
      if (!nextNode.next) {
        // console.log('in if')
      // change the next pointer on the second to last node to null
      currentNode.next = null;
      // reassign tail to this modified node
      this.tail = currentNode;
      // decrement list size by 1
      this.size--;
      // return the value of the node whose next is null (tail??)
      // console.log('list:', this);
      // console.log('pop:', nextNode.val);
      return nextNode;
      }
      currentNode = nextNode;
      nextNode = currentNode.next;
    }
  }

  push (val) {
    let node = new Node(val);
    // if there is no head
    if (!this.head) {
      // assign a node with value val as the head and tail
      this.head = node;
      this.tail = this.head;
    // if there is a head
    } else {
      // assign the new node to the next of the tail
      this.tail.next = node;
      // assign the new node as the tail
      this.tail = node;
    }
    // increment the size
    this.size++;
    // return the list
    return this;
  }


  shift() {
    // if list has no head, return undefined
    if (!this.size) return undefined;
    // if list size is 1, make head and tail null, decrement size to 0
    if (this.size === 1) {
      let shifted = this.head;
      this.head = null;
      this.tail = null;
      this.size--;

      return shifted;
    }
    // removes the head
    let shifted = this.head;
    // reassign head to the second node
    this.head = this.head.next
    // decrement size
    this.size--;

    // returns removed head
    return shifted;
  }


  unshift(val) {
    // add a new head
    // create a new node with value "val", next will be the old head
    let newHead = new Node(val);
    // if there is no head
    if (!this.size) {
      // make head and tail the new node
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      // reassign the head
      this.head = newHead;
    }
    // increment the size
    this.size++;

    return this;
  }

  get(idx) {
    if (this.size <= idx || idx < 0) return 'undefined';
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      node = node.next;
    }
    return node;
  }

  insert(idx, val) {
    // if index is 0, unshift, return true
    if (!idx) !!this.unshift(val);
    // if index = size, push, return true
    if (this.size === idx) !!this.push(val);
    // if index > size or less than 0, return false
    if (idx < 0 || idx > this.size) return false;


    let newNode = new Node(val);
    // get the node at index - 1
    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next;
    // connect it to new node
    prevNode.next = newNode;
    //connect the new node to the node at index
    newNode.next = nextNode;
    // increment size
    this.size++;
    // return true
    return true;

  }
}

let myList = new LinkedList();
// console.log(myList);
myList.push(1);
myList.push(3);
myList.pop();
// console.log(myList);
// myList.push(5);
// console.log(myList);
// myList.push(7);
// myList.push(9);
// console.log(myList.push(9));
// console.log(myList.head.next);

