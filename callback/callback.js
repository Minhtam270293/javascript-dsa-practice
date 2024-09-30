// function isEven(num) {
//     return num % 2 === 0
// };

// function someRecursive(arr,callback) {

//     // base case
//     if (arr.length === 0) return false;
//     if (callback(arr[0])) return true;

//     // procedure
//     return someRecursive(arr.slice(1),callback);
// };

// let arr = [1,3,7];
// console.log(someRecursive(arr,isEven));


/////////////////////////////////////////////////////
// Exercise 1: Simple Timer Callback

// Write a function delayedGreeting that takes a name and a callback function. 
// The delayedGreeting function should wait for 2 seconds before calling the callback function 
// with the name as an argument

// const delayedGreeting = function(name, callback) {
//     setTimeout(function() {
//         callback(name);
//     }, 2000);
// }

// delayedGreeting("Alice", function(name) {
//   console.log(`Hello, ${name}!`);
// });
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// Exercise 2: Array Iteration
// Write a function processArray that takes an array 
// and a callback function. The processArray function 
// should iterate over the array and call the callback 
// function for each element, passing the element as an argument.

// const processArray = function(arr, callback) {
//     arr.forEach(item => callback(item))
// };

// // Test the function
// const numbers = [1, 2, 3, 4, 5];
// processArray(numbers, function(element) {
//   console.log(element * 2);
// });
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// Exercise 4: Filtering an Array
// Write a function filterArray that takes an array 
// and a callback function. The filterArray function 
// should return a new array containing only the elements 
// for which the callback function returns true.

// const filterArray = function (arr, callback) {
//   return arr.filter(item => callback(item));
// }

// // Test the function
// const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = filterArray(mixedNumbers, function(element) {
//   return element % 2 === 0;
// });

// console.log(evenNumbers)
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
// Exercise 5: Error Handling with Callbacks
// Write a function divideNumbers that takes two numbers 
// and a callback function. The divideNumbers function should 
// attempt to divide the first number by the second and 
// call the callback with an error message if the second 
// number is zero, or with the result of the division otherwise.

// function divideNumbers(a, b, callback) {
//   if (b === 0) callback(new Error('division by 0 is not allowed'),null) 
//   else callback (null, a/b);
//   };

// Test 1
// divideNumbers(10, 2, function(error, result) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result); // 5
//   }});

// Test 2
// divideNumbers(10, 0, function(error, result) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result);
//   }
// });
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// Exercise 6: Chaining Callbacks
// Write two functions firstTask and secondTask that each 
// take a callback. firstTask should simulate an asynchronous 
// operation using setTimeout and call the callback with some 
// data. secondTask should take the data and call another 
// callback with a modified version of the data. 

// function firstTask(callback) {
//   setTimeout(function(){callback(data)}
//   ,3000);
// }

// function secondTask(data, callback) {
//   callback(data*99);
// };

// // Test the function
// let data = 2;

// firstTask(function(data) {
//   console.log('First task completed with data:', data);
//   secondTask(data, function(newData) {
//     console.log('Second task completed with new data:', newData);
//   });
// });

// Chain these tasks together.
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// Exercise 7: Map Function
// Write a function mapArray that takes an array and a 
// callback function. The mapArray function should return 
// a new array where each element is the result of applying 
// the callback function to the corresponding element in the 
// original array.

// function mapArray(arr, callback) {
//   return arr.map(item => callback(item));
// }

// // Test the function
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = mapArray(numbers, function(element) {
//   return element * element;
// });

// console.log(squaredNumbers); // [1, 4, 9, 16, 25]
/////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Exercise 8: Reduce Function
// Write a function reduceArray that takes an array, a 
// callback function, and an initial value. The reduceArray 
// function should apply the callback function to each element 
// of the array, accumulating the result into a single value, 
// starting with the initial value.

// function reduceArray(arr, callback, init) {
//   return arr.reduce((accumulate,item) => {
//     return callback(accumulate,item)}, init
// )};

// // Test the function
// const numbers = [1, 2, 3, 4, 5];
// const sum = reduceArray(numbers, function(accumulator, element) {
//   return accumulator + element;
// }, 0);

// console.log(sum); // 15
////////////////////////////////////////////////////


////////////////////////////////////////////////////
// Exercise 9: Find Element
// Write a function findElement that takes an array 
// and a callback function as arguments. The function 
// should return the first element in the array for which 
// the callback function returns true. If no such element 
// is found, it should return undefined.

// const findElement = function(arr, callback) {
//     for (let item of arr) {
//       if(callback(item)) return item;
//     };

//     return undefined;
// }

// // Test the function
// const numbers = [1, 3, 5, 7, 8, 10];
// const firstEvenNumber = findElement(numbers, function(element) {
//     return element % 2 === 0;
// });

// console.log(firstEvenNumber); // 8


////////////////////////////////////////////////////
// Exercise 9: Uppercase

// const stringProcess = function(string,callback) {
//   return callback(string);
// }

// const upperCase = function(string) {
//   return string.toUpperCase();
// };

// let upper = stringProcess('hahaha',upperCase);
// console.log(upper);

// Exercise 10: Callback with Array
// Now, let’s move to an exercise involving arrays and callbacks. 
// Our goal is to apply a callback to every element of an array. 
// This exercise helps us understand how callbacks can be used to 
// manipulate and interact with complex data structures like arrays.

// function arrayProcess(arr, callback) {
//   arr.forEach(item => callback(item));
// };

// function double(num) {
//   console.log(num*2);
// }

// Exercise 10: Asynchronous Callback
// Asynchronicity is a cornerstone of JavaScript programming, especially 
// in the context of network requests. In this exercise, we focus on how 
// to simulate a network request and handle the response using a callback. 
// This scenario is essential for understanding how JavaScript handles 
// time-consuming operations, such as HTTP requests or reading files.

// Using setTimeout
// const fetchData = function(url,callback) {
//   setTimeout(() => {
//     const data = `Response from ${url}`;
//     callback(data);
//   }, 2000)
// };

// fetchData("https://api.example.com", (response) => {
//     console.log(response);
// });

// console.log('this should run before the asynchronous task');


// Using XMLHttpRequest

// function fetchData(url, callback) {
//     const request = new XMLHttpRequest();
//     request.open('GET', url);

//     request.onload = function() {
//         if(request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(data,null);
//         }

//         else callback(null, new Error('Failed to load data'))
//     };

//     request.onerror = function() {
//         callback(null, new Error('Connection error'))
//     };
    
//     request.send();
// }

// function process(url, callback) {
//     fetchData(url, function(data, error) {
//         if (data) callback(data)
//         else console.error(err)
//     })
// };

// function render(data) {
//     console.log('data*2')
// };

// process('chatgpt.com/api/1',render)


// Exercise 11: Error Handling with Callbacks
// A critical challenge in developing reliable applications 
// is error handling, especially in asynchronous contexts like 
// network requests. In this exercise, we extend our previous 
// network request example to include error handling through 
// callbacks. This step is vital to ensure that our code can 
// gracefully handle any problems that may occur during asynchronous 
// operations.

// const fetchData = function(url, callback) {
//     setTimeout(() => {

//         const error = Math.random() > 0.5;
        
//         if(error) {
//         callback('Error during fetching data', null)
//         } else {
//             const data = `Response from ${url}`;
//             callback(null, data);
//         }
//     }, 2000)
// };

// const errorHandler = function(err,res) {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(res);
//     }
// };

// fetchData('chatgpt.com',errorHandler)


// Exercise 5: Nested Callbacks
// An advanced and fundamental aspect of asynchronous 
// programming in JavaScript is managing multiple asynchronous 
// operations in sequence. In this exercise, we delve into 
// the concept of nested callbacks, where one callback triggers 
// another, creating a chain of asynchronous operations. 
// This scenario is typical in real-world applications where 
// various actions need to be executed in order after the 
// completion of each operation.

// // Function to fetch data from a URL
// const fetchData = function(url, callback) {
//     setTimeout(() => {
//         const data = `Response from ${url}`;
//         callback(null, data);
//     }, 2000);
// };

// // Function to process fetched data
// const processData = function(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} processed`;
//         callback(null, processedData);
//     }, 3000);
// };

// // Using the functions with nested callbacks
// fetchData('chatgpt.com', function(error, response) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(response);

//         processData(response, function(error, processedData) {
//             if (error) {
//                 console.error(error);
//             } else {
//                 console.log(processedData);
//             }
//         });
//     }
// });



// Lets try to translate to promise
// const fetchData = function(url) {
//     return new Promise(function(resolve,reject) {
//         setTimeout(() => {
//             const data = `Response from ${url}`;
//             resolve(data);
//         }, 2000);

//         reject(new Error('Failed to fetch data')); --> this is wrong, reject error should be insdie setTimeout
//     })
// };

// const processData = function(data) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const processedData = `${data} processed`
//             resolve(processedData)
//         }, 2000);

//         reject(new Error('Failed to process data')); --> this is wrong, reject error should be insdie setTimeout
//     })
// };

// fetchData(url).then(res => {return processData(res)}).then(data => console.log(data)).catch(err => console.error(err));

// const fetchData = function(url) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             if (url) {
//                 const data = `Response from ${url}`;
//                 resolve(data);
//             } else {
//                 reject(new Error('Failed to fetch data'));
//             }
//         }, 2000);
//     });
// };

// const processData = function(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (data) {
//                 const processedData = `${data} processed`;
//                 resolve(processedData);
//             } else {
//                 reject(new Error('Failed to process data'));
//             }
//         }, 3000);
//     });
// };

// // Define the URL
// const url = 'chatgpt.com';

// // Using Promises to handle asynchronous operations
// fetchData(url)
//     .then(response => {
//         console.log(response);
//         return processData(response);
//     })
//     .then(processedData => {
//         console.log(processedData);
//     })
//     .catch(error => {
//         console.error(error);
//     });
