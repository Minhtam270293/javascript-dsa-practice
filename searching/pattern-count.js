function patternCount(str,pattern) {

    // Loop through the str
    // Eg: str.length is 6, pattern is 4, only loop until second char which means index 1
    // Stop at index = str.length - pattern.length - 1
    // Check the slice equal to pattern, slice(i,i+pattern.length)

    let counter = 0;
    
    for (let i = 0; i <= str.length - pattern.length; i++) {
        if (str.slice(i,i+pattern.length) === pattern) counter += 1;
    }

    return counter;
};

let str = "hahahamyfriend";
let pattern = "myth";

console.log(patternCount(str,pattern));