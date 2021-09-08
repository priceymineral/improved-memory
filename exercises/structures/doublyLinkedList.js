class Node {
  constructor(val) {
    this.val = val,
    this.next = null,
    this.prev = null
  }
}

class DLL {
  constructor () {
    this.head = null,
    this.tail = null,
    this.size = 0
  }

push (val) {
  // push() adds to the end of the list (ie, is the new tail)
  // input: integer (val)
  // output: our list
  // edge cases: if list is empty, new node will have to become head and tail
  //
  // constraints: none stated
  // high level: create a new node with the input value and connect it as the new tail and return the new list

  // create new node with val
  let node = new Node(val);
  // console.log(node);

  // if list is empty
  if (!this.size) {
    // assign new node to the head
    this.head = node;
    // assgn new node to the tail
    this.tail = node;
  // else
  } else {
    // connect to tail
      // make tail.next equal to new node
    this.tail.next = node;
      // make new node.prev equal to the old tail
    node.prev = this.tail;
    // reassign tail to be the new node
    this.tail = node;
  }

  // increment size
  this.size++;

  // return list
  return this;
}

}

let myList = new DLL();
console.log(myList);
myList.push(5);