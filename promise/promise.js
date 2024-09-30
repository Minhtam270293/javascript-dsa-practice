// Exercise 1: Basic Promise
// Create a basic Promise that resolves with a value after 
// a 2-second delay. Log the resolved value to the console.

// const promiseValue = function(value) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value);
//         }
//             ,2000)
//     })
// };
// promiseValue(50).then(res => {console.log(res)});


// Exercise 2: Promisify a Callback Function
// Convert the following callback-based function to return a Promise.
// function oldFunction(callback) {
//     setTimeout(() => {
//         callback("Callback data");
//     }, 1000);
// }

// const promisifiedFunction = function(callback) {
//     return new Promise((resolve) => {
//         oldFunction((data) => {resolve(data)})
//     })
// }

// Exercise 3: Promise Chaining
// Create a Promise chain where each subsequent Promise 
// depends on the previous one's resolved value. The first 
// Promise should resolve with the value 1, the second with 
// the value 2, and the third with the value 3. Log each 
// resolved value to the console.

// const promiseValue = function(value) {
//     return new Promise(resolve => resolve(value))
// };

// promiseValue(1).then(res => {
//     console.log(res);
//     return promiseValue(2);
// }).then(res => {
//     console.log(res);
//     return promiseValue(3);
// }).then(res => console.log(res));


// Exercise 4: Handling Errors in Promises
// Create a Promise that rejects with an error message. 
// Handle the error using .catch and log the error message 
// to the console.

// const myFetch = function(value) {
//     return new Promise((resolve,reject) => {
//         if(value > 0) resolve(value)
//         else reject(new Error('this is an error'))
//     })
// };

// myFetch(-1).then(res => console.log(res)).catch(err => console.error(err.message));