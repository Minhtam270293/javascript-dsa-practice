function getDigit(num,place) {
    
    // let power = 10 ** place;

    // while (power !== 10) {
    //     num = Math.floor(num/10);
    //     power /= 10;
    // };
    // return num % 10;

    return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10;
};

function countDigit(num) {
    // let quantity = 1;
    // while (Math.abs(num) >= 10) {
    //     num = Math.floor(num/10);
    //     quantity++;
    // };

    // return quantity;

    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

function mostDigitNum(arr) {
    let max = 0;

    for (let num of arr) {
        max = (countDigit(num) > max)? countDigit(num) : max;
    }

    return max;
};

function radixSort(arr) {

    outerLoopTimes = mostDigitNum(arr);
    for (let i = 0; i <= outerLoopTimes; i++) {
        let bucket = [];
        for (let i = 0; i <= 9; i++) {
        bucket.push([]);
    };
        
        for (let num of arr) {
            let index = getDigit(num,i);
            bucket[index].push(num);
        };
        arr = [].concat(...bucket);
    };

    return arr;
};

console.log(radixSort([234,10,450,99,88,43534234234,0,33,5345,1235,432]));