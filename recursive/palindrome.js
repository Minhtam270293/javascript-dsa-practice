function isPalindrome(str) {
    // base case
    if (str.length === 0 || str.length === 1) return true;
    if (str.length === 2) return (str[0] === str[1]);

    // procedure
    if (str[0] === str[-1]) {
        str = str.slice(1,-1);
        isPalindrome(str)
    } else return false;
};