
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
function inorderTraversal(node, result) {
    if (node) {
      inorderTraversal(node.left, result);
      result.push(node.value);
      inorderTraversal(node.right, result);
    }
}

function preorderTraversal(node, result) {
    if (node) {
      result.push(node.value);
      preorderTraversal(node.left, result);
      preorderTraversal(node.right, result);
    }
}

function postorderTraversal(node, result) {
    if (node) {
      postorderTraversal(node.left, result);
      postorderTraversal(node.right, result);
      result.push(node.value);
    }
}


const root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

const result = [];
//inorderTraversal(root, result);
//preorderTraversal(root, result);
//postorderTraversal(root, result);
console.log(result); 
  

    //         5
    //     3       7
    // 2      4 6      8
