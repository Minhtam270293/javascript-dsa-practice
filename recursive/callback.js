function isEven(num) {
    return num % 2 === 0
};

function someRecursive(arr,callback) {

    // base case
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;

    // procedure
    return someRecursive(arr.slice(1),callback);
};

let arr = [1,3,7];
console.log(someRecursive(arr,isEven));