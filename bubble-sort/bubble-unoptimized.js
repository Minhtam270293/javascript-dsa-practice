const swap = (arr,elem1,elem2) => {
    [arr[elem1],arr[elem2]] = [arr[elem2],arr[elem1]];
};

function sort(arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if(arr[j] > arr[j+1]) swap(arr,j,j+1);
        }
    };
    return arr;
};

let arr = [5,4,1,6,10,9];

console.log(sort(arr));