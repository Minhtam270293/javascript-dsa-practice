

// compare 2 and 5, place 2 before 5,
// now 2 5 1 3 7
// compare 1 vs 5 -> yes, compare 1 vs 2 -> yes 
// 1 4 5 3 (current)
// 1 4 3 (current) 5
// 1 3 4 5

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        
        while (j >= 0 && currentValue < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = currentValue;
    }

    return arr;
};

console.log(insertionSort([5,2,1,3,1111,11,4]));


