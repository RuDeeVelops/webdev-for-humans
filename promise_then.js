// A promise is a Promise object. .then() is a method inside Promise that takes two arguments: a callback for the success case and another for the failure case. Both are optional, so you can add a callback for the success or failure case only.
// Example of then() method

promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.error(reason);
  }
);
