// example from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
// key to understand Promises is to see them happening in realtime in the console of the browser.
// Head over to example.org and open the console. Paste the code below and see what happens.

// a fetch request returns a Promise object. The Promise is "pending" until the request completes and it is "fulfilled" or "rejected". When the Promise is fulfilled or rejected, the promise returns a Response object.
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log(fetchPromise);
// we log the Promise object to the console to see what's happening in the promise.
// the Promise will automatically resolve to a Response object once it completes the fetch request.
// Expand the console and you will see that PromiseState is fullfilled and PromiseResult is a Response object.
// What do we do with the result of the Promise, aka the Response object?
// If you expand it in the console you can see there are many properties to access. Let's try and log the status property.
// To do this we attach a event handler to the Promise object. We use .then on our Promise.
// .then() can access the Response object of our Promise and do something with it.
//.then() takes the Response object as argument once the Promise is fullfilled.
// *********** IMPORTANT ***************
// In layman's terms: .then() means "when the Promise is fulfilled, do this with its Response object".

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

// From MDN:

// 1 calling the fetch() API, and assigning the return value to the fetchPromise variable
// 2 immediately after, logging the fetchPromise variable. This should output something like: Promise { <state>: "pending" }, telling us that we have a Promise object, and it has a state whose value is "pending". The "pending" state means that the fetch operation is still going on.
// 3 passing a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.
// 4 logging a message that we have started the request.

// CONTINUES IN PART 2
