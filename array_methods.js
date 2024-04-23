// how do we go through an array and do certain operations on it?
// we can use many methods:

// 1. forEach
// forEach is used to iterate over an array and do something with each element

const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log(`I like ${fruit}!`);
});

// 2. map
// map is used to iterate over an array and return a new array with the same length

const fruits2 = ["apple", "banana", "cherry"];
const loudFruits = fruits2.map((fruit) => {
  return fruit.toUpperCase();
});
console.log(loudFruits); // ["APPLE", "BANANA", "CHERRY"]

// 3. filter
// filter is used to create a new array with all elements that pass a test

const fruits3 = ["apple", "banana", "cherry"];
const longFruits = fruits3.filter((fruit) => fruit.length > 5);
console.log(longFruits); // ["banana", "cherry"]

// 4. reduce
// reduce is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value

const fruits4 = ["apple", "banana", "cherry"];
const allFruits = fruits4.reduce((total, fruit) => total + " " + fruit);
console.log(allFruits); // "apple banana cherry"

// 5. some
// some is used to test whether at least one element in the array passes the test implemented by the provided function

const fruits5 = ["apple", "banana", "cherry"];
const hasApple = fruits5.some((fruit) => fruit === "apple");
console.log(hasApple); // true

// 6. includes
// includes is used to determine whether an array includes a certain value among its entries

const fruits6 = ["apple", "banana", "cherry"];
const includesBanana = fruits6.includes("banana");
console.log(includesBanana); // true

// 7. slice
// slice is used to return a shallow copy of a portion of an array into a new array object

const fruits7 = ["apple", "banana", "cherry"];
const slicedFruits = fruits7.slice(1, 3);
console.log(slicedFruits); // ["banana", "cherry"]

// 8. join
// join is used to join all elements of an array into a string

const fruits8 = ["apple", "banana", "cherry"];
const fruitSalad = fruits8.join(", ");
console.log(fruitSalad); // "apple, banana, cherry"

// 9. sort
// sort is used to sort the elements of an array in place and returns the array

const fruits9 = ["apple", "banana", "cherry"];
fruits9.sort();
console.log(fruits9); // ["apple", "banana", "cherry"]

// 10. pop
// pop is used to remove the last element from an array and returns that element

const fruits10 = ["apple", "banana", "cherry"];
const lastFruit = fruits10.pop();
console.log(lastFruit); // "cherry"
console.log(fruits10); // ["apple", "banana"]

// 11. push
// push is used to add one or more elements to the end of an array and returns the new length of the array

const fruits11 = ["apple", "banana", "cherry"];
fruits11.push("dragonfruit");
console.log(fruits11); // ["apple", "banana", "cherry", "dragonfruit"]

// 12. shift
// shift is used to remove the first element from an array and returns that removed element

const fruits12 = ["apple", "banana", "cherry"];
const firstFruit = fruits12.shift();
console.log(firstFruit); // "apple"
console.log(fruits12); // ["banana", "cherry"]

// 13. unshift
// unshift is used to add one or more elements to the beginning of an array and returns the new length of the array

const fruits13 = ["apple", "banana", "cherry"];
fruits13.unshift("dragonfruit");
console.log(fruits13); // ["dragonfruit", "apple", "banana", "cherry"]

// 14. splice
// splice is used to change the contents of an array by removing or replacing existing elements and/or adding new elements

const fruits14 = ["apple", "banana", "cherry"];
fruits14.splice(1, 0, "dragonfruit");
console.log(fruits14); // ["apple", "dragonfruit", "banana", "cherry"]
