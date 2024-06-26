class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // insert a nodde where it corresponds
    // input - integer
    // output - tree (root)
    // edge - root is null, insert at the root
    // constraints - none stated
    // high level - create a node, find it's correct place, insert, return the root

    // create a new node
    let node = new Node(val);

    // if tree is empty,
    if (!this.root) {
      // insert at the root
      this.root = node;
      // else
    } else {
      // initialize current node at the root
      let currentNode = this.root;
      // traverse the tree
      while (true) {
        // compare value of new node with current node
        // if value is greater
        if (node.val > currentNode.val) {
          // check if there is a right
          // if no right
          if (!currentNode.right) {
            // insert
            currentNode.right = node;
            // break
            break;
            // if there is repeat traversal
          } else {
            // reassign current node to that node
            currentNode = currentNode.right;
          }
        } else {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        }
      }
    }

    return this.root;
    // console.log(this.root);
  }

  find(val) {
    // input => integer
    // output => boolean
    // edge => tree is empty, return false
    // high level => traverse the tree and return true if val is found, false otherwise

    // if tree is empty, return false
    if (!this.root) return false;
    // initialize current node at the root
    let current = this.root;
    // traverse
    while (true) {
      // compare val to current value
      if (val === current.val) {
        // return true
        return true;
      }
      // if value is greater
      if (val > current.val) {
        // if there is a right
        if (current.right) {
          // current value is right's value
          current = current.right;
          // else
        } else {
          // return false
          return false;
        }
      }
      // if value is less
      if (val < current.val) {
        // if there is a left
        if (current.left) {
          // current value is left's value
          current = current.left;
          // else
        } else {
          // return false
          return false;
        }
      }
    }
  }

  bfs() {
    let data = [];
    queue = [this.root];

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  dfsPreOrder() {
    // [10, 6, 3,8, 15, 20]
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  dfsPostOrder() {
    // [ 3, 8, 6, 20, 15, 10 ]
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      // node.left && traverse(node.left);
      if (node.right) traverse(node.right);
      // node.right && traverse(node.right);
      data.push(node.val);
    }

    traverse(this.root);
    return data;
  }

  dfsInOrder() {
    let data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(20);
tree.insert(3);
console.log(tree);
console.log(tree.dfsPreOrder()); // [10, 6, 3, 8, 15, 20]
console.log(tree.dfsPostOrder()); // [ 3, 8, 6, 20, 15, 10]
console.log(tree.dfsInOrder()); // [3, 6, 8, 10, 15, 20]

//        10
//       /  \
//     6      15
//   /   \       \
//  3     8       20
