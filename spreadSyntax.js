// Spready syntax:
// "spread out" or "separate" an array into its individual elements (or arguments). It can only be used in array literals, object literals, parameter in function calls or as last argument in a function declaration (in this case it is called rest parameter).

// array literal

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrTotal = [...arr1, ...arr2];

console.log(arrTotal);
//Output: [1, 2, 3, 4, 5, 6]

// object literal
const obj1 = { name: "John", age: 30 };
const obj2 = { job: "developer", country: "USA" };

const objTotal = { ...obj1, ...obj2 }; // this will merge the two objects into a single object

console.log(objTotal);
//Output: { name: 'John', age: 30, job: 'developer', country: 'USA' }

// function calls
const arr = [1, 2, 3];
console.log(...arr);
// Output: 1 2 3

// function declaration (rest parameter)
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));
// Output: 10
