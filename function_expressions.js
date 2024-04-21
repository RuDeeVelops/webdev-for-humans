// Function Expressions: A function expression is a function that is assigned to a variable. Function expressions are not hoisted, which allows them to maintain a local scope. They can be anonymous and/or immediately invoked.
// NOTE: Function expressions are not hoisted. This means that they cannot be called before they are defined.

let sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Alice"); // Outputs: "Hello, Alice"
