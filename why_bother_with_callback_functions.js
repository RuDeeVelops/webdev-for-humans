// Let's see how we can use callback functions to create a custom filter function in JavaScript.
// In a way a callback function allows us to customize a more generic function which can be seen as templates.
// Let's suppose we wanna build a custom filter function that filters an array based on a callback function.
// We don't know what we're going to filter, but we know HOW we're going to filter it: in this case, we want to filter based on a callback function that returns true or false for every item in the array.

// Here's our initial array of people, some have pets, some don't.
const people = [
  { name: "Jack", hasPet: true },
  { name: "Jill", hasPet: false },
  { name: "Alice", hasPet: true },
  { name: "Bob", hasPet: false },
];

// This is our filterArray function.
// We create placeholders (parameters) for everything.
// We wanna feed it an array and a callback function.
// We don't know what the callback function needs specifically, but we decide that it will return true or false for every item.

function filterArray(array, callback) {
  const resultingArray = []; // We start with an empty array.
  for (let item of array) {
    // for every item in the passed array..
    const shouldBeIncluded = callback(item); // We don't know what the callback function will do, but we know it returns true or false for every item.
    if (shouldBeIncluded) {
      // If the callback function returns true, we include the item in the resultingArray.
      resultingArray.push(item);
    }
  }

  // Once we've checked every item, filterArray returns the resultingArray.
  return resultingArray;
}

// So now we can "customize" our filterArray template function by passing a callback function that decides what to filter.
// So filterArray is going to return a new array that only includes the people who have pets.
const peopleWithPets = filterArray(people, function (person) {
  return person.hasPet;
});

// We're logging the new array to the console.
console.log(peopleWithPets);
