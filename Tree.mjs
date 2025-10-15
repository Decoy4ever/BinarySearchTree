import Node from "./Node.mjs"
export default class Tree{
    constructor(treeArr){
        // root variable return the rootNode from the buildTree(arr)
        this.root = null
        this.treeArr = []
    }

    
    /**
     * `buildTreeHelper(arr,start,end)` is helper function for buildTree(arr)
     * takes a sorted array and build a balance binary tree
     * `start` point to the first element in the arr
     * `end` point to the last element in the arr
     * `mid` point to the middle element in the arr
     * create a node instance from the node class 
     * recursively call the buildTreeHelper(arr,start,mid-1)
     * recursively call the buildTreeHelper(arr,mid+1,end)
    */
    buildTreeHelper(arr,start,end){
        // `Set()` remove duplicates
        // encapsulating the [...] create an array
        // `sort()` sort the arr in asc order

        if(arr.length === 0) return
        // start = 0
        // end = arr.length - 1
        let mid = Math.floor(0.5*(start + end))

        // base case
        if(start > end) return null
        let node = new Node(arr[mid])

        // recursively call left and right subtress
        node.left = this.buildTreeHelper(arr,start,mid-1)
        node.right = this.buildTreeHelper(arr,mid+1,end)

        return node
    }

    /**
     * `buildTree(arr)` call the createBST(arr,0,arr.length - 1)
     */
    buildTree(arr){
        let sortArr = [...new Set(arr)].sort((a,b) => a - b)
        this.root = this.buildTreeHelper(sortArr,0,arr.length - 1)
        return this.root
    }

    // prettyPrint(node, prefix = '', isLeft = true){
    //     node = this.root
    //     if (node === null) {
    //         return;
    //     }

    //     if (node.right !== null) {
    //         prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    //     }

    //     console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        
    //     if (node.left !== null) {
    //         prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    //     }
    // }
}
