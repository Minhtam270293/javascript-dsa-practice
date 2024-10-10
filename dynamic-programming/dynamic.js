// Recursion fibonacci

const recurFib = function(n) {
    if (n <= 2) return 1;
    return recurFib(n - 2) + recurFib(n - 1);
}

// Memoization fibonacci

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

// Tabulation fibonacci

const tabFib = function(n) {
    if (n <=2 ) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(tabFib(45));