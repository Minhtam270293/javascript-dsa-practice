class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.pre = null;
    }
};

class DoublyLinkList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    push(val) {
        let newNode = new Node(val);
        
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        };
        this.length++;
        return this;
    };

    pop() {
        if (this.length === 0) return undefined;

        let popItem = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
        this.tail = popItem.pre;
        popItem.pre = null;
        this.tail.next = null;
        }
        this.length--;
        return popItem;
    };

    shift() {
       
        
        if (this.length === 0) return undefined;

        popItem = this.head;
        if (this.length === 1) {
            this.head.next = null;
            this.tail.pre = null;
        } else {
            this.head = popItem.next;
            this.head.pre = null;
            popItem.next = null;
        }
        this.length--;
        return popItem;
    };

    unshift(val) {
        newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.pre = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    };

        get(index) {
            
            if (index >= this.length || index < 0) return null;
            let currentNode;
            if (index < Math.floor(this.length/2)) {
                let count = 0;
                currentNode = this.head;
                while (count !== index) {
                    currentNode = currentNode.next;
                    count++;
            }} else {
                let count = this.length - 1;
                currentNode = this.tail;
                while (count !== index) {
                    currentNode = currentNode.pre;
                    count--;
                }
            };
            return currentNode;
        };

        set(index,val) {
            if (this.get(index) !== undefined) {
                this.get(index).val = val;
                return true;
            } else {
                return false;
            }
           
        };

        insert(index,val) {
            if (index > this.length || index < 0) return false;
            if (index === 0) {
                this.unshift(val);
            } else if (index === this.length) {
                this.push(val);
            } else {
                let newNode = new Node(val);
                let currentNode = this.get(index);
                let preNode = currentNode.pre;
                newNode.next = currentNode;
                newNode.pre = preNode;
                preNode.next = newNode;
                currentNode.pre = newNode;
            }
            this.length++;
            return true;
        };

        delete(index) {
            if (index >= this.length || index < 0) return false;
            let currentNode;
            if (index === 0) {
                this.shift()
            } else if (index === this.length - 1) {
                this.pop()
            } else {
                currentNode = this.get(index);
                let preNode = currentNode.pre;
                let nextNode = currentNode.next;
                preNode.next = nextNode;
                nextNode.pre = preNode;
                currentNode.next = null;
                currentNode.pre = null;
            }
            this.length--;
            return currentNode;
        };    
    };

let mylist = new DoublyLinkList;
mylist.push(50);
mylist.push(100);
mylist.push(150);
mylist.push(200);
mylist.insert(2,999);