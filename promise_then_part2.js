// But what if we wanna access the body (or data) of the Response object (result of  a Promise)?
// We need to use the .json() method on the Response object.
// .json() returns another Promise that is fullfilled after parsing the body text as JSON. So this creates a bit of complexity in the Promise chain.

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
console.log(fetchPromise, "I'm Promise 1 from fetch"); // this is the first Promise object, once it is fullfilled (feth complete) it will return a Response object. The Response is passed to the .then() method.

fetchPromise
  .then((response) => {
    console.log(response, "I'm Response 1 originating from Promise 1"); // this is the Response object
    let jsonPromise = response.json();
    console.log(jsonPromise, "I'm Promise 2 originating from response.json()");
    return jsonPromise;
  })
  .then((data) => {
    console.log(data, "I'm Response 2 originating from Promise 2");
  });

// The chain of ALL the promises happening:
// fetchPromise -> response -> jsonPromise -> data
