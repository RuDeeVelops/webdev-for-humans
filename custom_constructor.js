// We can create our custom constructors. In two ways. The first way is to use a function declaration and the second way is to use the class syntax.
// First example with function declaration:

function Car(carMake, carModel, carYear) {
  this.make = carMake;
  this.model = carModel;
  this.year = carYear;
}

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1); // Car { make: 'Toyota', model: 'Corolla', year: 2020 }

// First example with class syntax:

class Car {
  constructor(carMake, carModel, carYear) {
    this.make = carMake;
    this.model = carModel;
    this.year = carYear;
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1); // Car { make: 'Toyota', model: 'Corolla', year: 2020 }

//Second example with function declaration:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice and I'm 25 years old.
console.log(person1); // Person { name: 'Alice', age: 25, greet: [Function] }

// Second example with class syntax:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 25);
person1.greet(); // Hello, my name is Alice and I'm 25 years old.
console.log(person1); // Person { name: 'Alice', age: 25 }
