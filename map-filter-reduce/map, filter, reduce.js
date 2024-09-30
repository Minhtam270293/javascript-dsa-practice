//////// Map Exercises

// Exercise 1: Convert Array of Strings to Uppercase
// Given an array of strings, use map to create a new array with all strings 
// converted to uppercase.

// const words = ["hello", "world", "javascript"];
// const upperWords = words.map(word => word.toUpperCase());
// console.log(upperWords);
// ========================================================

// Exercise 2: Square the Numbers
// Given an array of numbers, use map to create a new array with the squares 
// of the original numbers.

// const numbers = [1, 2, 3, 4, 5];
// const squareNums = numbers.map(num => num**2);
// console.log(squareNums);
// ========================================================

// Exercise 3: Extract Property from Objects
// Given an array of objects, use map to create a new array that 
// contains only the values of a specific property.

// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];
// const ages = users.map(user => user.age);
// console.log(ages);
// ========================================================


//////// Filter Exercises

// Exercise 1: Filter Even Numbers
// Given an array of numbers, use filter to create a new array that 
// contains only the even numbers.

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNum = numbers.filter(num => num%2 === 0);
// console.log(evenNum);
// ========================================================

// Exercise 2: Filter Adults
// Given an array of objects representing people, use filter to 
// create a new array that contains only the people who are 18 or older.

// const people = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 22 }
// ];
// const adults = people.filter(person => person.age >= 18);
// console.log(adults);
// ========================================================

// Exercise 3: Filter Words Containing 'a'
// Given an array of strings, use filter to create a new array that 
// contains only the strings that include the letter 'a'.

// const words = ["apple", "banana", "cherry", "date"];
// const wordsA = words.filter(word => word.includes('a'));
// console.log(wordsA);
// ========================================================


//////// Reduce Exercises

// Exercise 1: Sum of Numbers
// Given an array of numbers, use reduce to calculate the sum of all the numbers.

// const numbers = [1, 2, 3, 4, 5];
// const sumArr = numbers.reduce((total,num) => {return total + num});
// console.log(sumArr);
// ========================================================

// Exercise 2: Count Occurrences
// Given an array of strings, use reduce to count the 
// number of occurrences of each string.

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const countFruit = fruits.reduce((count,fruit) => {
//     count[fruit] = (count[fruit] || 0) + 1;
//     return count;
// },{});
// console.log(countFruit);
// ========================================================

// Exercise 3: Flatten an Array
// Given an array of arrays, use reduce to flatten it into a single array.

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenArr = nestedArray.reduce((finalArr,subArr) => finalArr.concat(subArr),[]);
// console.log(flattenArr);
// ========================================================

//////// Combining Map, Filter, and Reduce

// Exercise 1: Chain Methods
// Given an array of numbers, use filter to get only the even numbers, 
// then use map to square them, and finally use reduce to get the sum of 
// the squared numbers.

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNums = numbers.filter(num => num%2 === 0);
// const squareNums = evenNums.map(num => num ** 2);
// const sumNums = squareNums.reduce((final,num) => final + num);
// const finalChain = numbers.filter(num => num%2 === 0).map(num => num ** 2).reduce((final,num) => final + num);
// console.log(evenNums);
// console.log(squareNums);
// console.log(sumNums);
// console.log(finalChain);
// ========================================================

// Exercise 2: Extract and Transform Data
// Given an array of user objects, use filter to get only users older than 18, 
// then use map to get their names, and finally use reduce to concatenate 
// the names into a single string.

// const users = [
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 20 },
//     { name: "Charlie", age: 16 },
//     { name: "David", age: 22 }
// ];
// const finalString = users.filter(person => person.age > 18)
// .map(user => user.name).reduce((final,name) => final + name + ", ",'').slice(0,-2);
// console.log(finalString);
// ========================================================