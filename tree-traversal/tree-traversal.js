class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    constructor(){
        this.root = null;
    };

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            
            while (true) {
                if (val === current.val) return undefined;
                
                if (val > current.val) {
                    if (current.right) {
                        current = current.right
                    } else {
                        current.right = newNode
                        return this;
                    }
                };

                if (val < current.val) {
                    if (current.left) {
                        current = current.left
                    } else {
                        current.left = newNode;
                        return this;
                    }
                }
            }
        }
    };

    find(val) {
        if (!this.root) return false;

        let current = this.root;

        while (true) {

            if (val === current.val) return true;
            
            if (val > current.val) {
                if (!current.right) return false;
                current = current.right;
            } else {
                if (!current.left) return false;
                current = current.left;
            };

        }


        
    };

BFS() {

let queue = [];
let result = [];

queue.push(this.root);

while(queue.length !== 0) {
    let popItem = queue.shift();
    result.push(popItem.val);

    if (popItem.left) queue.push(popItem.left);
    if (popItem.right) queue.push(popItem.right);
};

    return result;
};


    DFSPreOrder() {
        let data = [];
        let currentNode = this.root;

        function helper(node) {
            data.push(node.val);

            if(node.left) {
                helper(node.left)
            };

            if(node.right) {
                helper(node.right)
            };

            return;
            }
        helper(currentNode);
        return data;
        };

    
  DFSPostOrder(){
      let data = [];
      let currentNode = this.root;

      function helper(node) {
          if(node.left) helper(node.left);
          if(node.right) helper(node.right);
          data.push(node.val);
      }
      helper(currentNode);
      return data;
  };

  DFSInOrder(){
      let data = [];
      let currentNode = this.root;

      function traverse(node) {
          if(node.left) traverse(node.left);
          data.push(node.val);
          if(node.right) traverse(node.right);
      };
      traverse(currentNode);
      return data;
  }
    
};



const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);

console.log(bst.DFSInOrder());

