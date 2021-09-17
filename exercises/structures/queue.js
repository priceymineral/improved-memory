class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // enqueue to the back of the queue
  enqueue(val) {
    // input => integer (value)
    // output => queue
    // edge => if queue is empty, reassign both first and last and increment size
    //         if queue is 1 node long reassign head's next to the new node, reassign tail to the new node, increment size
    // constraints => none stated
    // high level => create a new node, make it the tail, increment size

    // create a new node with input value (val)
    let node = new Node(val);
    // if queue is empty
    if (!this.size) {
      // reassign first to new node
      this.first = node;
      // reassign last to new node
      this.last = node;
      // if queue is 1 node long
    } else if (this.size === 1) {
      // assign new node to last
      this.last = node;
      // assign first's next to last
      this.first.next = this.last;
      // otherwise
    } else {
      // make last's next the new node
      this.last.next = node;
      // reassign last to be the new node
      this.last = node;
    }

    // increment size
    this.size++;
    // return queue
    console.log(this);
  }

  // pop from the front of the queue
  dequeue() {
    // input - none
    // output - popped node
    // edge - queue is empty, return null
    //      - queue is 1 node long, reassign first and last to null and decrement size
    // constraints - none stated
    // high level - remove first and return it, adjust size and reassign the first

    // save first to a variable
    let popped = this.first;

    // if queue is empty return null
    if (!this.size) return console.log('undefined');

    // if queue is 1 node long
    if (this.size === 1) {
      // reassign first to null
      this.first = null;
      // reassign last to null
      this.last = null;
      // else
    } else {
      // reassign the first to be it's next
      this.first = this.first.next;
    }



    // decrement size
    this.size--;
    // return popped
    console.log(popped);

  }
}

// let q = new Queue();
// console.log('enqueueed 1', q.enqueue(1));
// console.log('enqueueed 2', q.enqueue(2));
// console.log('enqueueed 3', q.enqueue(3));
// console.log('dequeueped', q.dequeue());
// console.log(q);
// console.log('dequeueped', q.dequeue());
// console.log(q);
// console.log('dequeueped', q.dequeue());
// console.log(q);