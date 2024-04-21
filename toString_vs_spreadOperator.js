// difference between toString and spread operator

const arr = [1, 2, 3, 4, 5];

// toString on an array will return a string with the elements separated by commas
console.log(arr.toString()); // 1,2,3,4,5

// spread operator on an array will return the individual elements as separate arguments
console.log(...arr); // 1 2 3 4 5

// spread operator between square brackets will return a new array with the elements of the original array
const newArr = [...arr]; // [1, 2, 3, 4, 5]
