// ES5
function swap1(arr,elem1,elem2) {
    let temp = arr[elem1];
    arr[elem1] =  arr[elem2];
    arr[elem2] = temp;
};


// ES2015
const swap2 = (arr,elem1,elem2) => {
    [arr[elem1],arr[elem2]] = [arr[elem2],arr[elem1]];
};
