class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        };
        return total;
    }

    set(key, value) {
        const index = this._hash(key);

        this.keyMap[index] = this.keyMap[index] ? 
        [...this.keyMap[index], [key,value]] : [[key,value]]
    }

    get(key) {
        const index = this._hash(key);
        for (let pair of this.keyMap[index]) {
            if (pair[0] === key) return pair[1] 
        }

        return undefined;
    }

    keys() {
        let keyArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let pair of this.keyMap[i]) {
                    keyArr.push(pair[0])
                }
            }
        }
        return keyArr
    }

    allValues() {
        let valArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let pair of this.keyMap[i]) {
                    if (!valArr.includes(pair[1]))
                    valArr.push(pair[1])
                }
            }
        }
        return valArr
    }

}

const myTable = new HashTable(23);
myTable.set('green','#F888AB');
myTable.set('black','sdfB');
myTable.set('pink','#fffff');
myTable.set('dupPink','#fffff');
myTable.set('pinkagain','#fffff');
console.log(myTable.keyMap);
console.log(myTable.keys());
console.log(myTable.allValues());