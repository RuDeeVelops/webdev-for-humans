// A Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It's capitalized because it's a constructor function used to create new Promise instances. It takes a callback function with two parameters: resolve and reject. The resolve and reject functions are used to resolve or reject the promise, respectively.

new Promise((resolve, reject) => {
  resolve("Success!");
})

  // The promise.then() method is a Promise method used to handle the success case of a Promise. It takes a callback function that will be called when the Promise is resolved. In our case it's resolved with the string "Success!".

  .then((result) => {
    return result + " Oh, yeah!";
  })
  .then((result) => {
    return result + " Keep going!";
  })
  .then((result) => console.log(result)); // output: Success! Oh, yeah! Keep going!

//.then() is a method inside Promise that takes two arguments: a callback for the success case and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.

// .then(successCallback, failureCallback);

//.then() returns a new Promise, different from the original one, which allows you to chain multiple .then() methods together.

let myPromise = new Promise(function (resolve, reject) {
  let result = false;

  if (result == true) {
    resolve("Promise is resolved!");
  } else {
    reject("Promise is rejected!");
  }
});

// myPromise now contains a resolution or a rejection - we use then() to do something with that result and for both success and failure cases we ask the promise to log a message.
myPromise.then(
  (message) => logs(message),
  (message) => logs(message)
);

// Funtion to run when Promise is settled:
function logs(something) {
  console.log(something);
}
