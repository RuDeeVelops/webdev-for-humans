// this lets you access the current object. example:

const obj = {
  name: "joe",
  greet: function () {
    // arrow functions cannot access this
    console.log("hello " + this.name);
  },
};

obj.greet(); // hello joe
