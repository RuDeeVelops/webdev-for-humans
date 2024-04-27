// Now let's see how async/await can replace and simplify the use of promises and .then() method.

// Here is an example of a function that uses promises and .then() method to fetch data from an API:

function shuffleCards() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

// We can rewrite the above function using async/await like this:

async function shuffleCards() {
  const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/");
  const data = await response.json();
  console.log(data);
}

// await can be used only inside an async function and with methods that return a promise.
// since 2020 await can also be used as a top-level await in a module, this means that you can use await outside of an async function in a module.
// await fetch returns a promise that resolves to the Response object
// await response.json() returns a promise that resolves to the JSON object parsed from the response body.
// At this point the async Promise is set to fullfilled even if no data is explicitly returned.
// If we were to add return data then it would also output the data in its promiseResult property and can be passed forward.

// Another more "template like" example:
async function promise() {
  const response = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature");
  const jsonData = await response.json();
  return jsonData;
}
console.log(promise());

// CONTINUE TO PART 4 - ERROR HANDLING
