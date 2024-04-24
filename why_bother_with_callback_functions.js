// Callback function allows us to customize a more generic, template-like function (higher-order function). It's a function used as a parameter for another function.
// Here's a super simple code example to illustrate the concept:
function higherOrderFunction(callbackParameter) {
  console.log("I'm a higher-order function!");
  callbackParameter();
}

function callbackFunction() {
  console.log("I'm a callback function!");
}

higherOrderFunction(callbackFunction);

// Let's see a webdeveloper would use a callback function in a simple real-world example.
// We have a function that checks a user's age and calls a callback.
function checkAge(age, callbackFunction) {
  if (age >= 18) {
    callbackFunction("User is old enough.");
  } else {
    callbackFunction("User is not old enough.");
  }
}

// We can call the function and pass a callback that logs a message.
checkAge(20, (message) => {
  console.log(message); // output: User is old enough.
});
