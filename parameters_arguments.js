// An argument is "fed" into a function when the function is called.
// That argument replaces the parameter in the function definition, regardless of the name of the parameter. What matters is the order in which the arguments are passed in.

function sayHello(name) {
  // "name" is the parameter which will be replaced by the argument that is passed in when the function is called
  console.log("Hello " + name);
}

sayHello("John"); // "John" is the argument that is passed in when the function is called

// the name parameter is a placeholder for the argument that will be passed in when the function is called
