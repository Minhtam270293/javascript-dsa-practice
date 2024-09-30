function pivot(arr,start,end) {
    let pivot = arr[start];
    let pivotIndex = start;
    
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;
        }
    };

    arr[start] = arr[pivotIndex];
    arr[pivotIndex] = pivot;
    console.log(arr);
    return pivotIndex;
};

console.log(pivot([10,7,2,3,6,4,1],0,6));