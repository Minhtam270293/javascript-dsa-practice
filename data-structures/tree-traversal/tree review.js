// Tree nodes

class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
};

class binarySearchTree {
    constructor(){
        this.root = null
    };

    insert(value){
        let newNode = new Node(value);
       
        if(!this.root) {
            this.root = newNode;
            return this
        }

        let currentNode = this.root;
        
        while (true) {
            if(value === currentNode.value) return undefined;
            if(value > currentNode.value) {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            };

            if(value < currentNode.value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
        }
    }

    find(value){
        if(!this.root) return false;

        let currentNode = this.root;
        while (true) {
            if(value === currentNode.value) return true;
                        
            if(value > currentNode.value) {
                if(currentNode.right) currentNode = currentNode.right
                else return false;
            };

            if(value < currentNode.value) {
                if(currentNode.left) currentNode = currentNode.left
                else return false;
            };
        }
    }

    BFS(){
        let queue = [];
        let treeData = [];

        
    }
};



// Test code 

console.log("-------Testing nodes and tree-------");
console.log("My tree: 40 80 100 150 180 200 230 250");
let myTree = new binarySearchTree();
myTree.root = new Node(150);
myTree.root.left = new Node(80);
myTree.root.left.left = new Node(40);
myTree.root.left.right = new Node(100);
myTree.root.right = new Node(200);
myTree.root.right.left = new Node(180);
myTree.root.right.right = new Node(250);
myTree.root.right.right.left = new Node(230);
console.log("Root of my tree")
console.log(myTree.root.value)
console.log("Outer left of my tree")
console.log(myTree.root.left.left.value)
console.log("Outer right of my tree")
console.log(myTree.root.right.right.value)
console.log("");

console.log("-------Testing insert method-------");
console.log("Insert 300, my tree new outer right")
myTree.insert(300);
console.log(myTree.root.right.right.right.value)
console.log("Insert 25, my tree new outer left")
myTree.insert(25);
console.log(myTree.root.left.left.left.value);
console.log("");

console.log("-------Testing find method-------");
console.log("Find 150 (true)");
console.log(myTree.find(150));
console.log("Find 180 (true)");
console.log(myTree.find(180));
console.log("Find 10 (false)");
console.log(myTree.find(10));
console.log("");