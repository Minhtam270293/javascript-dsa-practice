// Recursion fibonacci

const recurFib = function(n) {
    if (n <= 2) return 1;
    return recurFib(n - 2) + recurFib(n - 1);
}

// Dynamic fibonacci

const memoFib = function(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;

    let res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
    memo[n] = res;
    return res;
};

const alterFib = function(n) {
    let memo = [];

    const helper = function(x) {
        if (memo[x] !== undefined) return memo[x];
        if (x <= 2) return 1;

        let res = helper(x-1) + helper(x-2);
        memo[x] = res;
        return res;
    };

    return helper(n);
}

console.log(alterFib(40));