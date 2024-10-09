function merge(arr1,arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];

    while (arr1.length > i && arr2.length > j) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j]);
            j++;
        } else {
            newArr.push(arr1[i],arr2[j]);
            i++; j++;
        }
    };
    while (arr1.length > i) {
        newArr.push(arr1[i]);
        i++;
    };
    while (arr2.length > j) {
        newArr.push(arr2[j]);
        j++;
    };

    return newArr;
};

let arr1 = [0,3,5];
let arr2 = [1,2,9];

console.log(merge(arr1,arr2));