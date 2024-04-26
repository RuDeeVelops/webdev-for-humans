let PromiseOld = Promise.resolve("Response Old");

// Amd this is how PromiseOld looks like:

// +-----------------+
// |  PromiseOld     |
// +-----------------+
// |  Promise State  |
// |  fullfilled     |
// +-----------------+
// | Promise Result  |
// |  Response Old   |
// +-----------------+

// Now we chain .then() and see what happens

PromiseOld.then((responseOld) => {
  // Access the resolved value of PromiseOld
  console.log(responseOld); // Callback executed - PromiseOld fulfilled. A new Promise is created (Promise1).
  return "Response 1"; // The returned value becomes the resolved value of Promise1
})
  .then((response1) => {
    // Access the resolved value of Promise1
    console.log(response1); // Callback executed - Promise1 fulfilled. A new Promise is created (Promise2).
    return "Response 2"; // The returned value becomes the resolved value of Promise2
  })
  .then((response2) => {
    // Access the resolved value of Promise2
    console.log(response2); // Callback executed - Promise2 fulfilled. A new Promise is created (Promise3).
    return "Response 3"; // The returned value becomes the resolved value of Promise3
  })
  .then((response3) => {
    // Access the resolved value of Promise3
    console.log(response3); // Callback executed - Promise3 fulfilled. No new Promise is created as this is the end of the chain.
  });

// The .then circle of life
// Each .then() "receives" a previous Promise's result value, creates a new Promise which is fullfilled if callback is executed and returns a value which will be the result value of the new Promise. If we don't return a value the new promiseResult remains "undefined".

// +-----------------+     +--------+     +-----------------+     +--------+     +-----------------+     +-----+
// |  Promise Name   |     |        |     |  Promise Name   |     |        |     |  Promise Name   |     |     |
// |  PromiseOld     |     |        | --> |  Promise1       |     |        | --> |  Promise2       | --> | ... |
// +-----------------+     |        |     +-----------------+     |        |     +-----------------+     +-----+
// |  Promise State  |     |        |     |  Promise State  |     |        |     |  Promise State  |     |     |
// |  fulfilled      |     |  .then |     |  fulfilled      |     |  .then |     |  fulfilled      | --> | ... |
// +-----------------+     |        |     +-----------------+     |        |     +-----------------+     +-----+
// | Promise Result  |     |        |     | Promise Result  |     |        |     | Promise Result  |     |     |
// |  "Response Old" | --> |        |     |  "Response 1"   | --> |        |     |  "Response 2"   | --> | ... |
// +-----------------+     +--------+     +-----------------+     +--------+     +-----------------+     +-----+

// AND NOW LET'S SIMPLIFY EVERYTHING WITH ASYNC/AWAIT IN PART 3
