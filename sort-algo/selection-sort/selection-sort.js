const swap = (arr,elem1,elem2) => {
    [arr[elem1],arr[elem2]] = [arr[elem2],arr[elem1]];
};

// Store first elem to be the minimum
// Compare to the rest to find the minimum
// If the minimum index is not the initial index, swap
// Repeat with the next elem until the end of the array

function selectionSort(arr) {
    

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < arr.length; j++) {    
            if (arr[j] < arr[minIndex]) {
                minIndex = j;

            }
        }

        if (minIndex != i) swap(arr,i,minIndex);
    }
    return arr;
};

console.log(selectionSort([111,3,10,2,0]));