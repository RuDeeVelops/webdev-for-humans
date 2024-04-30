// Define an object named 'person' with properties 'img', 'name', 'phone', and 'email'.
const person = {
  img: "./images/mr-whiskerson.png",
  name: "Mr. Whiskerson",
  phone: "(800) 555-1234",
  email: "mr.whiskaz@catnap.meow",
};

// Use destructuring to to extract values from objects and arrays and assign them to variables.
// In this example, we are extracting the 'img' and 'name' properties from the 'person' object.
// If I use the same name of the properties, the variables will be assigned the corresponding values from the 'person' object.
const { img, name } = person;
console.log(img); // "./images/mr-whiskerson.png"
console.log(name); // "Mr. Whiskerson"

// If we wanted to assign these values to variables with different names, we could do so like this:
const { img: imageUrl, name: catName } = person;
console.log(imageUrl); // "./images/mr-whiskerson.png"
console.log(catName); // "Mr. Whiskerson"
