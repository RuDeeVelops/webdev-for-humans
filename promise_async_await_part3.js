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
// await fetch returns a promise that resolves to the Response object
// await response.json() returns a promise that resolves to the JSON object parsed from the response body.
// does async function return a promise? Yes, it returns a promise that resolves to the value returned by the async function.
// The code inside the async function is much cleaner and easier to read than the promise-based code.
