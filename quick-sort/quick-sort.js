function pivot(arr,start = 0,end = arr.length-1) {
    let pivot = arr[start];
    let pivotIndex = start;
    
    for (let i = start + 1; i < end; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;
        }
    };

    arr[start] = arr[pivotIndex];
    arr[pivotIndex] = pivot;
    return pivotIndex;
};


function quickSort(arr, left = 0, right = arr.length - 1) {
    
    if (left < right) {
    let pivotIndex = pivot(arr,left,right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
    };

    return arr;
};

console.log(quickSort([3,2,6,5,1,0,8,7,9]));