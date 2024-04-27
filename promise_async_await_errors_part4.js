fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    throw Error("I'm an error!"); // let's throw an error to see how it's handled
  })
  .catch((err) => {
    console.log(err); // Output: Error: I'm an error!
  });

// If an error is thrown inside a .then() callback, it will cause the Promise to be rejected with that error. This is why the error ends up in the .catch() callback.
// If any of the Promises in the chain are rejected (either due to an error occurring, or due to a throw statement), the .catch() block will be executed. The err parameter will be the reason the Promise was rejected.

// Let's refactor the code in async/await:

async function fetchImage() {
  try {
    const response = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg"
    );
    const data = await response.json();
    console.log(data);
    throw Error("I'm an error!"); // let's throw an error to see how it's handled
  } catch (err) {
    console.log(err); // Output: Error: I'm an error!
  }
}

// We wrap the code in a try/catch block. If an error occurs in the try block, the catch block will catch it and the code inside the catch block will be executed. The err parameter will be the reason the Promise was rejected.

// Let's see a more complex example of error handling with async/await:
// In this case we are receiving a 404 error because the URL is incorrect.
// A 404 error doesn't reject the promise, so the catch block won't catch it.
// But we can check the value of response.ok which is false in case of a 400 or 500 error.
// We use an if to check if response.ok is false and if it is, we throw an error "forcing" the promise to be rejected and go to the catch block.

fetch("https://api.coingecko.com/api/v3/coins/dogecoixxzxsddsdsdds")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
