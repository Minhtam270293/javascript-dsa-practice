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
    }
};


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log(bst.find(7)); // true
console.log(bst.find(20)); // false