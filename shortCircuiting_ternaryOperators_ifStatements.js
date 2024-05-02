// short-circuit with || and && VS ternary operator VS if statement VS switch statement
// same example written in 3 different ways:

// short-circuit with OR || operator
const name = "John";
const username = name || "Guest";
console.log(username); // John

// short-circuit with AND && operator ("if name is truthy, assign name to username")
const name = "John";
const username = name && name;
console.log(username); // John

// ternary operator ("if name is truthy, assign name to username, otherwise assign 'Guest' to username")
const name = "John";
const username = name ? name : "Guest";
console.log(username); // John

// if statement
const name = "John";
let username;
if (name) {
  username = name;
} else {
  username = "Guest";
}
console.log(username); // John

// switch statement reads as follows: "if name is 'John', assign name to username, otherwise assign 'Guest' to username"
const name = "John";
let username;
switch (name) {
  case "John":
    username = name;
    break;
  default:
    username = "Guest";
}
console.log(username); // John

// let's see how to flip a boolean value using the NOT ! operator

// NOT ! operator flips the value of a boolean
let isLogged = false;
isLogged = !isLogged;
console.log(isLogged); // true

// difference between OR || and AND && operators
// OR || operator returns the first truthy value or the last value if no truthy value is found
// AND && operator: If both operands are truthy, it returns the second operand. If one or both operands are falsy, it returns the first falsy operand it encounters.
// Example:
const name = "";
const username = name || "Guest";
console.log(username); // Guest

const name = "";
const username = name && "Guest";
console.log(username); // ''

let name = "John";
let username = name && "Guest";
console.log(username); // Outputs: 'Guest'
