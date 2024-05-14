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
    let node = new Node(val);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (node.val > current.val) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        }
      }
    }

    return this;
  }

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;

    while (current) {
      if (current.val === val) return "found";
      current.val > val ? (current = current.left) : (current = current.right);
    }

    return "not found";
  }

  bfs() {
    let queue = [this.root];
    let visited = [];

    for (let i = 0; i < queue.length; i++) {
      let current = queue[i];
      visited.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return visited;
  }

  // other solution
  //   bfs() {
  //     let data = [];
  //     queue = [this.root];

  //     while (queue.length) {
  //       node = queue.shift();
  //       data.push(node.value);
  //       if (node.left) queue.push(node.left);
  //       if (node.right) queue.push(node.right);
  //     }

  //     return data;
  //   }
}

let tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(20);
tree.insert(3);
console.log(tree);
// console.log(tree.find(10));
// console.log(tree.find(9));
// console.log(tree.find(11));
// console.log(tree.find(111));
console.log(tree.bfs());

//        10
//       /  \
//     7      11
//   /   \       \
//  1     9       14
//   \
//     3
