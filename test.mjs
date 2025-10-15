import Node from "./Node.mjs"
import Tree from "./Tree.mjs"


let queueArr = [1, 7, 4, 23, 8, 8, 94, 3, 5, 7, 9, 67, 6345, 324]


// create the nodes and push onto the tree arr
let bst = new Tree()
let buildTree = bst.buildTree(queueArr)
console.log(buildTree)


