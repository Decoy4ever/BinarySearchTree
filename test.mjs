import Node from "./Node.mjs"
import Tree from "./Tree.mjs"


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }

  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};


let queueArr = [1, 7, 4, 23, 8, 8, 94, 3, 5, 7, 9, 67, 6345, 324]


// create the nodes and push onto the tree arr
let bst = new Tree()
// let buildTree = bst.buildTree(queueArr)
// console.log(buildTree)˝
console.log(`******`)
console.log(prettyPrint(bst.buildTree(queueArr)))



