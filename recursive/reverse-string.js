// Given a string, reverse it

function reverse(str) {
    // base case
    if (str.length === 1) return str;
    if (str.length === 0) return;

    // different output
    return reverse(str.slice(1)) + str[0];
}